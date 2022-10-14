import { Title, StatisticsReviews, Span } from '../App.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Title className="Statistics__span">Statistics</Title>
      <StatisticsReviews className="Statistics__reviews">
        <Span>Good: {good}</Span>
        <Span>Neutal: {neutral}</Span>
        <Span>Bad: {bad}</Span>
        <Span>Total: {total}</Span>
        <Span>Positive feedback: {positivePercentage}%</Span>
      </StatisticsReviews>
    </>
  );
};
