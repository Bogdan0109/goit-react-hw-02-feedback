import { FeedbackReviews, Button } from '../App.styled';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <>
      <FeedbackReviews className="Feedback__reviews" onClick={onClick}>
        <Button name="good" type="button">
          Good
        </Button>

        <Button name="neutral" type="button">
          Neutal
        </Button>

        <Button name="bad" type="button">
          Bad
        </Button>
      </FeedbackReviews>
    </>
  );
};
