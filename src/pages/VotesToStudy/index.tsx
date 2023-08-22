import { useState } from "react";
import { VotesSummary } from "../../components/VotesSummary";
import { TableFooterText, VotesContainer, VotesTable, VotesToStudyContainer, VotesToStudyContent, VotesToStudyTitle } from "./styles";
import { SearchForm } from "./components/SearchForm";

interface Vote {
    ticker: string;
    name: string;
    votes: number;
}

const fetchedVotes = [
    {ticker: 'BTC', name: 'Bitcoin', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
    {ticker: 'ETH', name: 'Ethereum', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
    {ticker: 'BNB', name: 'BNB', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
    {ticker: 'LTC', name: 'Litecoin', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
    {ticker: 'MATIC', name: 'Polygon', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
];

export function VotesToStudy() {
    const [availableVotes, setAvailableVotes] = useState(5);
    const totalVotes = 1000;
    const weeklyVotes = 100;

     let totalVotesToDisplay = totalVotes + 5 - availableVotes;
     let weeklyVotesToDisplay = weeklyVotes + 5 - availableVotes;

    const [votes, setVotes] = useState([
        {ticker: 'BTC', name: 'Bitcoin', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH', name: 'Ethereum', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB', name: 'BNB', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC', name: 'Litecoin', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC', name: 'Polygon', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
    ]);

    const handleVote = (vote: Vote) => {
        if (availableVotes > 0) {
            setAvailableVotes(availableVotes - 1);
            totalVotesToDisplay += 1;
            weeklyVotesToDisplay += 1;

            const updatedVoteList = votes.map((item) => {
                if (item.ticker === vote.ticker) {
                    return {
                        ...item,
                        votes: item.votes + 1,
                    }
                }
                return item;
            });

            setVotes(updatedVoteList);
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
                    vote.name.toLowerCase().includes(query.toLowerCase())
                    || vote.ticker.toLowerCase().includes(query.toLowerCase())
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
                    totalVotes={totalVotesToDisplay}
                    weeklyVotes={weeklyVotesToDisplay}
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
                            { votes.map((vote) => (
                                <tr key={vote.ticker}>
                                    <td width="25%">
                                        <div>
                                            <img src={vote.imgUrl} alt={vote.ticker} />
                                            {vote.ticker}
                                        </div>
                                    </td>
                                    <td width="45%">{vote.name}</td>
                                    <td>{vote.votes}</td>
                                    <td><button onClick={() => handleVote(vote)}>Votar</button></td>
                                </tr>
                            ))}                            
                        </tbody>
                    </VotesTable>
                    <TableFooterText>
                        Lista com as 30 altcoins mais votadas. 
                        Utilize o campo de busca para visualizar e votar em outras altcoins.
                        Caso não encontre, entre em contato ná página de suporte (após login - sem custo antes ou depois) para solicitar a inclusão do ativo na lista.
                    </TableFooterText>
                </VotesContainer>
            </VotesToStudyContent>
        </VotesToStudyContainer>
    )
}