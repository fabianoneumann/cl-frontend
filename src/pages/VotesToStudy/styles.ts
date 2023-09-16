import styled from "styled-components";

export const VotesToStudyContainer = styled.div`
    width: 100%;
    padding: 7.125rem 2rem 5rem;
    margin: 0 auto;
`;

export const VotesToStudyContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VotesToStudyTitle = styled.h1`
    font-weight: bold;
`;

export const VotesContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    padding: 0 1.5rem;
    margin-top: 1.75rem;
`;

export const VotesTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    color: ${props => props.theme["gray-300"]};

    th {
        color: ${props => props.theme["gray-100"]};
        font-weight: bold;
        padding: 1rem 1.75rem 0;
        text-align: left;
    }

    td {
        padding: 1rem 1.75rem;
        border: 0;
        background: ${props => props.theme["gray-600"]};
        font-weight: normal;
        
        &:first-child {
            border-radius: 6px 0 0 6px;
        }

        &:last-child {
            border-radius: 0 6px 6px 0;
            text-align: right;
        }

        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        img {
            height: 2rem;
        }

        button {
            padding: 0.4rem 0.75rem;
            border: 1px solid ${props => props.theme["orange-btc"]};
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: bold;
            font-size: 0.875rem;

            background: transparent;
            color: ${props => props.theme["gray-100"]};

            &:hover {
                background: ${props => props.theme["orange-btc"]};
                color: ${props => props.theme["gray-900"]};
            }
        }

        @media (max-width: 768px) {
            &:first-child {
                padding: 1rem 0.75rem;
            }

            &:last-child {
                padding: 1rem 0.75rem;
            }
        }
    }

    td + td {
        border-left: 1px solid ${props => props.theme["gray-800"]};
    }

    @media (max-width: 768px) {
        th:nth-child(2) {
            display: none;
        }
        
        td:nth-child(2) {
            display: none;
        }
    }
`;

export const TableFooterText = styled.p`
    margin-top: 2rem;
    text-align: center;
    color: ${props => props.theme["gray-300"]};
`;