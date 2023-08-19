import { ArrowDown, ArrowUp } from "phosphor-react";
import styled from "styled-components";

export const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: 2rem;
`;

export const AccordionContent = styled.div`
    width: 100%;
    height: 100%;
    /* background: ${props => props.theme["gray-950"]}; */
    color: ${props => props.theme.white};
    padding: 1.5rem;
    border-radius: 5px;
    /* border: 1px solid ${props => props.theme["gray-800"]}; */
`;

export type AccordionVariants = true | false;

interface AccordionItemProps {
    $isOpen: AccordionVariants;
}

export const AccordionItem = styled.div<AccordionItemProps>`
    width: 100%;
    overflow: hidden;

    ${props => {
        return `
            margin: ${props.$isOpen ? "1rem 0" : "0 0"};
            border-radius: ${props.$isOpen ? "5px" : "0"};
        `
    }}

    &:first-child {
        border-radius: 5px 5px 0 0;
    }

    &:last-child {
        border-radius: 0 0 5px 5px;
    }

    ${props =>
        props.$isOpen
        ?
            `
                &:first-child {
                    margin: 0 0 1rem 0;
                    border-radius: 5px;                   
                }
                
                &:last-child {
                    margin: 1rem 0 0 0;
                    border-radius: 5px;
                }
            `
        : ''
    }
`;

interface AccordionQuestionContainerProps {
    $isLastQuestion: boolean;
    $isOpen: AccordionVariants;
}

export const AccordionQuestionContainer = styled.div<AccordionQuestionContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    gap: 1.5rem;
    cursor: pointer;
    background: ${props => props.theme["gray-800"]};

    ${props => 
        props.$isLastQuestion
        ? `border-bottom: none;`
        : `border-bottom: 2px solid ${props.theme["gray-950"]};`
    }

    ${props =>	
        props.$isOpen
        ?
            `
                border-bottom: 2px solid ${props.theme["gray-950"]};
                background: ${props.theme["orange-btc"]};

                h3 {
                    color: ${props.theme["gray-900"]};
                }

                :last-child {
                    color: ${props.theme["gray-900"]};
                }
            `
        : ``
    }

    &:hover {
        background: ${props => props.theme["orange-btc"]};

        h3 {
            color: ${props => props.theme["gray-900"]};
        }

        :last-child {
            color: ${props => props.theme["gray-900"]};
        }
    }
`;

export const AccordionQuestion = styled.h3`
    font-size: 1.25rem;
    color: ${props => props.theme.white};
    line-height: 1.625rem;
`;

export const AccordionAnswerContainer = styled.div`
    padding: 1rem 1.5rem;
    background: ${props => props.theme["gray-600"]};
`;

export const AccordionAnswer = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.white};
    line-height: 1.625rem;
`;

export const AccordionOpenIcon = styled(ArrowDown)`
    color: ${props => props.theme.white};
    display: flex;
    flex-shrink: 0;
    font-size: 1.25rem;
`;

export const AccordionCloseIcon = styled(ArrowUp)`
    color: ${props => props.theme.white};
    display: flex;
    flex-shrink: 0;
    font-size: 1.25rem;
`;