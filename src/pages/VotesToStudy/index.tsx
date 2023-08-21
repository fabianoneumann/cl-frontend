import { useState } from "react";
import { Summary } from "../../components/Summary";
import { VotesToStudyContainer, VotesToStudyContent, VotesToStudyTitle } from "./styles";

export function VotesToStudy() {
    const [availableVotes, setAvailableVotes] = useState(5);
    const totalVotes = 1000;
    const weeklyVotes = 100;

    let totalVotesToDisplay = totalVotes + 5 - availableVotes;
    let weeklyVotesToDisplay = weeklyVotes + 5 - availableVotes;

    const handleVote = () => {
        if (availableVotes > 0) {
            setAvailableVotes(availableVotes - 1);
            totalVotesToDisplay += 1;
            weeklyVotesToDisplay += 1;
        } else if (availableVotes === 0) {
            alert('Você não tem mais votos disponíveis!');
            setAvailableVotes(5);
            totalVotesToDisplay = totalVotes - 5;
            weeklyVotesToDisplay = weeklyVotes - 5;
        }
    }

    return (
        <VotesToStudyContainer>
            <VotesToStudyContent>
                <VotesToStudyTitle>Votos da Semana</VotesToStudyTitle>
                <Summary 
                    totalVotes={totalVotesToDisplay}
                    weeklyVotes={weeklyVotesToDisplay}
                    availableVotes={availableVotes}
                />
                
                <button 
                    onClick={handleVote}
                    style={{ 
                        marginTop: 24, 
                        padding: '8px 32px',
                        borderRadius: 6,
                        border: 'none', 
                        background: '#008000', 
                        color: '#fff',
                    }}
                >
                    Votar
                </button>
            </VotesToStudyContent>
        </VotesToStudyContainer>
        
    )
}