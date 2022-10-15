import styled from 'styled-components';

export const FeedbackReviews = styled.div`
  display: flex;
  padding-bottom: 20px;
  gap: 5px;
`;

export const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: 1px solid hsla(210, 18%, 87%, 1);
  border-radius: 5px;
  transition: 200ms;
  :active {
    background-color: blue;
  }
`;
