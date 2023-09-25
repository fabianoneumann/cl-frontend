import { useContext, useEffect, useRef, useState } from "react";
import { VotesSummary } from "../../components/VotesSummary";
import { TableFooterText, VotesContainer, VotesTable, VotesToStudyContainer, VotesToStudyContent, VotesToStudyTitle } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { api } from "../../services/api";
import { AuthContext } from "../../Context/AuthContext";
import { isValidToken } from "../../utils/auth/is-valid-token";
import { useApiPrivate } from "../../Context/hooks/useApiPrivate";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

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

    const [fetchedVotes, setFetchedVotes] = useState<Vote[]>([]);

    const [votes, setVotes] = useState<Vote[]>([]);

    const { authenticated, handleRefreshToken } = useContext(AuthContext);
    const apiPrivate = useApiPrivate();

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
        let isMounted = true;
        const controller = new AbortController();

        const token = localStorage.getItem("token");

        if (authenticated && token && isValidToken(token)) {
            apiPrivate.get('/votes/user/current-week-count', {
                signal: controller.signal,
            })
                .then(response => {
                    isMounted && setAvailableVotes(5 - response.data.votesCount);
                }).catch(error => {
                    if (error.response && error.response.status === 401) {
                        handleRefreshToken();
                    } else if (error.message === 'canceled' || error.message === 'aborted') {
                        // Do nothing - TODO: Check if this is improvable
                    } else {
                        throw new Error("Erro ao buscar total de votos do usuário para a semana: " + error.message);
                    }
                });
        } else {
            setAvailableVotes(0);
        }

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [authenticated, handleRefreshToken, apiPrivate]);

    const handleVote = (vote: Vote) => {
        if (availableVotes > 0) {
            apiPrivate.post('/votes', {
                altcoinId: vote.altcoin.id,
            }).then(response => {
                if (response.status !== 201) {
                    toast.error('Erro ao computar voto!');
                    return;
                }

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

                toast.success('Voto computado com sucesso!');
            }).catch(error => {
                if (error instanceof AxiosError) {
                    if (error.message === "Network Error") {
                        toast.error('Erro ao computar voto! Tente novamente mais tarde.');
                    } else {
                        const message = error.response?.data.message;
                        toast.error('Erro ao computar voto: ' + message);
                    }
                } else {
                    toast.error('Erro ao computar voto: ' + error.message);
                }
            });
        } else if (availableVotes === 0) {
            toast.error('Você não tem mais votos disponíveis!');
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

                                    <td>{ authenticated 
                                        ? <button onClick={() => handleVote(vote)}>Votar</button>
                                        : <button onClick={() => toast.error('Conecte-se para votar')}>Votar</button>
                                    }</td>          
                                </tr>
                            ))}                            
                        </tbody>
                    </VotesTable>
                    <TableFooterText>
                        Lista com as 20 altcoins mais votadas para estudo na semana, além do BTC e do ETH. 
                        Utilize o campo de busca para visualizar e votar em outras altcoins.
                        Caso não encontre, entre em contato para solicitar a inclusão do ativo na lista.
                    </TableFooterText>
                </VotesContainer>
            </VotesToStudyContent>
        </VotesToStudyContainer>
    );
}