import { useState } from "react";
import { VotesSummary } from "../../components/VotesSummary";
import { TableFooterText, VotesContainer, VotesTable, VotesToStudyContainer, VotesToStudyContent, VotesToStudyTitle } from "./styles";
import { SearchForm } from "./components/SearchForm";

interface Vote {
    ticker: string;
    name: string;
    votes: number;
    imgUrl: string;
}

export function VotesToStudy() {
    const [availableVotes, setAvailableVotes] = useState(5);
    const totalVotes = 1000;
    const weeklyVotes = 100;

    let totalVotesToDisplay = totalVotes + 5 - availableVotes;
    let weeklyVotesToDisplay = weeklyVotes + 5 - availableVotes;

    const [fetchedVotes, setFetchedVotes] = useState([
        {ticker: 'BTC', name: 'Bitcoin', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH', name: 'Ethereum', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB', name: 'BNB', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC', name: 'Litecoin', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC', name: 'Polygon', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC1', name: 'Bitcoin1', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH1', name: 'Ethereum1', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB1', name: 'BNB1', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC1', name: 'Litecoin1', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC1', name: 'Polygon1', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC2', name: 'Bitcoin2', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH2', name: 'Ethereum2', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB2', name: 'BNB2', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC2', name: 'Litecoin2', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC2', name: 'Polygon2', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC3', name: 'Bitcoin3', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH3', name: 'Ethereum3', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB3', name: 'BNB3', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC3', name: 'Litecoin3', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC3', name: 'Polygon3', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC4', name: 'Bitcoin4', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH4', name: 'Ethereum4', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB4', name: 'BNB4', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC4', name: 'Litecoin4', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC4', name: 'Polygon4', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC5', name: 'Bitcoin5', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH5', name: 'Ethereum5', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB5', name: 'BNB5', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC5', name: 'Litecoin5', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC5', name: 'Polygon5', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC6', name: 'Bitcoin6', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH6', name: 'Ethereum6', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB6', name: 'BNB6', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC6', name: 'Litecoin6', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC6', name: 'Polygon6', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
    ]);

    const [votes, setVotes] = useState([
        {ticker: 'BTC', name: 'Bitcoin', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH', name: 'Ethereum', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB', name: 'BNB', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC', name: 'Litecoin', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC', name: 'Polygon', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC1', name: 'Bitcoin1', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH1', name: 'Ethereum1', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB1', name: 'BNB1', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC1', name: 'Litecoin1', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC1', name: 'Polygon1', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC2', name: 'Bitcoin2', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH2', name: 'Ethereum2', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB2', name: 'BNB2', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC2', name: 'Litecoin2', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC2', name: 'Polygon2', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC3', name: 'Bitcoin3', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH3', name: 'Ethereum3', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB3', name: 'BNB3', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC3', name: 'Litecoin3', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC3', name: 'Polygon3', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC4', name: 'Bitcoin4', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH4', name: 'Ethereum4', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB4', name: 'BNB4', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC4', name: 'Litecoin4', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC4', name: 'Polygon4', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC5', name: 'Bitcoin5', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH5', name: 'Ethereum5', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB5', name: 'BNB5', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC5', name: 'Litecoin5', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC5', name: 'Polygon5', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
        {ticker: 'BTC6', name: 'Bitcoin6', votes: 10, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'},
        {ticker: 'ETH6', name: 'Ethereum6', votes: 25, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'},
        {ticker: 'BNB6', name: 'BNB6', votes: 5, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'},
        {ticker: 'LTC6', name: 'Litecoin6', votes: 15, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'},
        {ticker: 'MATIC6', name: 'Polygon6', votes: 20, imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'},
    ]);

    const handleVote = (vote: Vote) => {
        if (availableVotes > 0) {
            setAvailableVotes(availableVotes - 1);
            totalVotesToDisplay += 1;
            weeklyVotesToDisplay += 1;

            const updatedVoteListToShow = votes.map((item) => {
                if (item.ticker === vote.ticker) {
                    return {
                        ...item,
                        votes: item.votes + 1,
                    }
                }
                return item;
            });
            setVotes(updatedVoteListToShow);

            const updatedVoteList = fetchedVotes.map((item) => {
                if (item.ticker === vote.ticker) {
                    return {
                        ...item,
                        votes: item.votes + 1,
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
                            { votes.map((vote, index) => (
                                index < 20 &&
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
                        Lista com as 20 altcoins mais votadas. 
                        Utilize o campo de busca para visualizar e votar em outras altcoins.
                        Caso não encontre, entre em contato ná página de suporte (após login - sem custo antes ou depois) para solicitar a inclusão do ativo na lista.
                    </TableFooterText>
                </VotesContainer>
            </VotesToStudyContent>
        </VotesToStudyContainer>
    )
}