import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ActivateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 68vh;
`;

export const ActivateAccountTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const ActivateAccountSubtitle = styled.h2`
  font-size: 2rem;
  animation: ${fadeIn} 1s ease-in-out;
`;