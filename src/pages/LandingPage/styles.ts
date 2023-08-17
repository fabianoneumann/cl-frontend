import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ArrowBendDownRight } from 'phosphor-react';

export const LandingPageContainer = styled.div`
    width: 100%;
`;

export const LandingPageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

export const LandingPageSectionContainer = styled.section<{$index: number; }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10rem 2rem;
    
    background: ${props => 
        props.$index % 2 === 0
            ? props => props.theme['gray-900']
            : `linear-gradient(to right, #121214, #09090a)`
    };
    border-bottom: ${props =>
        props.$index % 2 === 0
            ? `none`
            : `1px solid ${props.theme['gray-700']}`
    };
`;

export const LandingPageSectionSpacedBetweenContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
`;

export const LandingPageTyperContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.3rem;
    flex-wrap: wrap;

    h3 {
        color: ${props => props.theme['gray-300']};
        font-weight: bold;
        font-size: 1.15rem;
    }

    span {
        font-weight: bold;
        color: ${props => props.theme['orange-btc']};
        font-size: 1.15rem;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CallToActionButton = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 6px;
    border: none;
    color: ${props => props.theme.white};
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    background: ${props => props.theme["pink-400"]};
    box-shadow: 0 0 15px 5px ${props => props.theme["pink-900"]};

    &:hover,
    &:focus {
        background: ${props => props.theme["pink-900"]};
        box-shadow: 0 0 15px 5px ${props => props.theme["pink-400"]};
        transform: scale(1.15);
    }
`;

export const LandingPageSectionTitle = styled.h1`
    max-width: 1120px;
    font-size: 3.5rem;
    line-height: 3.75rem;
    font-weight: bold;
    color: ${props => props.theme['gray-100']};
    margin-bottom: 1rem;
    margin-top: 4.5rem;
    text-align: center;
`;

export const LandingPageSectionSubtitle = styled(LandingPageSectionTitle)`
    font-size: 3rem;
    color: ${props => props.theme['gray-100']};
    margin-top: 0;
    max-width: 900px;

    span {
        color: ${props => props.theme['pink-400']};
    }
`;

export const LandingPageSectionParagraph = styled.p`
    max-width: 1120px;
    font-size: 1rem;
    color: ${props => props.theme['gray-100']};
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
`;

export const LandingPageSectionActiveEducationContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding: 3rem 0 1rem;
`;

export const LandingPageSectionActiveEducationCard = styled.div`
    background: ${props => props.theme['gray-900']};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 350px;
    padding: 2rem 2.25rem 2rem 2.25rem;
    border: 1.5px solid ${props => props.theme['gray-700']};
    border-radius: 6px;

    p {
        color: ${props => props.theme['gray-400']};
        line-height: 1.625rem;
        text-align: center;
    }
`;

export const LandingPageSectionActiveEducationCardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const LandingPageSectionWhyCLContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    width: 100%;
    max-width: 1120px;
`;

export const LandingPageSectionWhyCLItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 346px;
    padding: 2rem 2.25rem 2rem 2.25rem;

    h3 {
        font-size: 1.54rem;
        font-weight: bold;
        text-align: center;
    }

    p {
        color: ${props => props.theme['gray-400']};
        line-height: 1.625rem;
        text-align: center;
    }
`;

export const LandingPageSectionNumbersContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    margin-top: 4rem;
    width: 100%;
    max-width: 1120px;

    @media (max-width: 1120px) {
        justify-content: center;
        gap: 0.5rem;
    }
`;

export const LandingPageSectionNumberItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 1rem;

    gap: 4px;

    span {
        font-size: 2rem;
        color: ${props => props.theme['orange-btc']};
        font-weight: bold;
    }

    p {
        font-size: 1rem;
        color: ${props => props.theme['gray-400']};
        font-weight: bold;
    }
`;

export const LandingPageSectionResultsContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1300px;

    @media (max-width: 1240px) {
        justify-content: center;
        gap: 0.5rem;
    }
`;

export const LandingPageSectionResultsImage = styled.img`
    width: 100%;
    max-width: calc(1300px/4 - 1rem);
    margin-top: 2rem;
`;

export const LandingPageSectionWhoForList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
    max-width: 1120px;

    list-style-type: none;

    li {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

export const ColoredArrowBendDownRight = styled(ArrowBendDownRight)`
    color: ${props => props.theme['orange-btc']};
    display: flex;
    flex-shrink: 0;
`;
    
export const LandingPageSectionSafeAreaContent = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    max-width: 1120px;

    @media (max-width: 1120px) {
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }
`;

export const LandingPageSectionSafeAreaItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    
    gap: 1rem;
`;

export const LandingPageSectionSafeAreaText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        font-size: 1.54rem;
        font-weight: bold;
    }

    p {
        font-size: 1rem;
        color: ${props => props.theme['gray-400']};
        
        max-width: 17.5rem;
    }
`;