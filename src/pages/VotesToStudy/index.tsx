import { useContext, useEffect, useRef, useState } from "react";
import { VotesSummary } from "../../components/VotesSummary";
import { TableFooterText, VotesContainer, VotesTable, VotesToStudyContainer, VotesToStudyContent, VotesToStudyTitle } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { api } from "../../services/api";
import { AuthContext } from "../../Context/AuthContext";

interface Vote {
    altcoin: {
        id: string;
        ticker: string;
        name: string;
        imageUrl: string;
    }
    voteCount: number;
}

export function VotesToStudy() {
    const [availableVotes, setAvailableVotes] = useState(5);
    const totalVotesRef = useRef<number>(0);
    const weeklyVotesRef = useRef<number>(0);

    // let totalVotesToDisplay = totalVotes + 5 - availableVotes;
    // let weeklyVotesToDisplay = weeklyVotes + 5 - availableVotes;

    const [fetchedVotes, setFetchedVotes] = useState<Vote[]>([]);

    const [votes, setVotes] = useState<Vote[]>([]);

    const { authenticated } = useContext(AuthContext);

    useEffect(() => {
        api.get('/votes/counters')
            .then(response => {
                const { voteCounters } = response.data;
                totalVotesRef.current = voteCounters.totalCount;
                weeklyVotesRef.current = voteCounters.weekCount;
            });

        api.get('votes/current-week')
            .then(response => {
                setFetchedVotes(response.data.votes);
                setVotes(response.data.votes);
            });
        
    }, []);

    useEffect(() => {
        if (authenticated) {
            api.get('/votes/user/current-week-count')
                .then(response => {
                    setAvailableVotes(5 - response.data.votesCount);
                });
        } else {
            setAvailableVotes(5);
        }
    }, [authenticated]);

    const handleVote = (vote: Vote) => {
        if (availableVotes > 0) {
            setAvailableVotes(availableVotes - 1);
            totalVotesRef.current += 1;
            weeklyVotesRef.current += 1;

            const updatedVoteListToShow = votes.map((item) => {
                if (item.altcoin.ticker === vote.altcoin.ticker) {
                    return {
                        ...item,
                        voteCount: item.voteCount + 1,
                    }
                }
                return item;
            });
            setVotes(updatedVoteListToShow);

            const updatedVoteList = fetchedVotes.map((item) => {
                if (item.altcoin.ticker === vote.altcoin.ticker) {
                    return {
                        ...item,
                        voteCount: item.voteCount + 1,
                    }
                }
                return item;
            });
            setFetchedVotes(updatedVoteList);

            alert('Voto computado com sucesso!');
        } else if (availableVotes === 0) {
            alert('Você não tem mais votos disponíveis!');
        }
    }

    const setSearch = (query: string) => {
        if (query.length === 0) {
            setVotes(fetchedVotes);
        } else {
            const filteredVotes = fetchedVotes.filter((vote) => {
                return (
                    vote.altcoin.name.toLowerCase().includes(query.toLowerCase())
                    || vote.altcoin.ticker.toLowerCase().includes(query.toLowerCase())
                );
            });
            setVotes(filteredVotes);
        }
    }

    return (
        <VotesToStudyContainer>
            <VotesToStudyContent>
                <VotesToStudyTitle>Votos da Semana</VotesToStudyTitle>
                <VotesSummary 
                    totalVotes={totalVotesRef.current}
                    weeklyVotes={weeklyVotesRef.current}
                    availableVotes={availableVotes}
                />

                <VotesContainer>
                    <SearchForm setSearch={setSearch}/>
                    <VotesTable>
                        <thead>
                            <tr>
                                <th>Ticker</th>
                                <th>Nome</th>
                                <th>Votos</th>
                            </tr>
                        </thead>
                        <tbody>
                            { votes.map((vote, index) => (
                                index < 20 &&
                                <tr key={vote.altcoin.id}>
                                    <td width="25%">
                                        <div>
                                            <img src={vote.altcoin.imageUrl} alt={vote.altcoin.ticker} />
                                            {vote.altcoin.ticker}
                                        </div>
                                    </td>
                                    <td width="45%">{vote.altcoin.name}</td>
                                    <td>{vote.voteCount}</td>
                                    {authenticated 
                                        ? <td><button onClick={() => handleVote(vote)}>Votar</button></td>
                                        : <td><button onClick={() => alert('Conecte-se para votar')}>Votar</button></td>
                                    }
                                    
                                </tr>
                            ))}                            
                        </tbody>
                    </VotesTable>
                    <TableFooterText>
                        Lista com as 20 altcoins mais votadas. 
                        Utilize o campo de busca para visualizar e votar em outras altcoins.
                        Caso não encontre, entre em contato ná página de suporte (após login - sem custo antes ou depois) para solicitar a inclusão do ativo na lista.
                    </TableFooterText>
                </VotesContainer>
            </VotesToStudyContent>
        </VotesToStudyContainer>
    )
}