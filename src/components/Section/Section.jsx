import { Title } from '../App.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};
