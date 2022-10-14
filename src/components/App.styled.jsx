import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 4em;
`;

export const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 30px;
`;

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

export const StatisticsReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Span = styled.span`
  font-size: 20px;
`;
