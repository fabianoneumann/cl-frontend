import { AvailableVotesIcon, SummaryCard, SummaryContainer, TotalVoteIcon, WeeklyVotesIcon } from "./styles";

interface SummaryProps {
    totalVotes: number;
    weeklyVotes: number;
    availableVotes: number;
}

export function VotesSummary(props: SummaryProps) {
    const { totalVotes, weeklyVotes, availableVotes } = props;
    
    const canVote = availableVotes > 0;

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Total de Votos</span>
                    <TotalVoteIcon />
                </header>
                <strong>{totalVotes}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Votos da Semana</span>
                    <WeeklyVotesIcon weight="duotone" />
                </header>
                <strong>{weeklyVotes}</strong>
            </SummaryCard>

            <SummaryCard $canVote={canVote}>
                <header>
                    <span>Disponíveis</span>
                    <AvailableVotesIcon $canVote={canVote} />
                </header>
                <strong>{availableVotes}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}