import { CalendarCheck, Checks, ListChecks } from "phosphor-react";
import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    gap: 2rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`;

export const TotalVoteIcon = styled(Checks)`
    color: ${props => props.theme["gray-400"]};
    font-size: 2.5rem;
    display: flex;
    flex-shrink: 0;
`;

export const WeeklyVotesIcon = styled(CalendarCheck)`
    color: ${props => props.theme["gray-400"]};
    font-size: 2.5rem;
    display: flex;
    flex-shrink: 0;
`;

export const AvailableVotesIcon = styled(ListChecks)<SummaryCardProps>`
    font-size: 2.5rem;
    display: flex;
    flex-shrink: 0;
    color: ${props => props.theme["red-800"]};

    ${props => props.$canVote === true && css`
        color: lime;
    `}
`;

interface SummaryCardProps {
    $canVote?: boolean;
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 1.75rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    
    justify-content: space-between;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        
        span {
            font-size: 1.25rem;
            color: ${props => props.theme["gray-300"]};
        }      
    }

    strong {
        display: block;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 1rem;
        color: ${props => props.theme["gray-100"]};
    }  

    ${props => props.$canVote === true && css`
        background: ${props.theme["green-500"]};
    `}

    ${props => props.$canVote === false && css`
        background: ${props.theme["red-100"]};
    `}
`;