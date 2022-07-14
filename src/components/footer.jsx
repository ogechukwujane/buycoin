import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Text>&copy; by ogechukwu, 2022</Text>
    </Container>
  );
};
const Container = styled.div`
  background: white;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0%;
  z-index: 100;
`;
const Text = styled.p`
  font-size: 12px;
  color: gray;
`;
