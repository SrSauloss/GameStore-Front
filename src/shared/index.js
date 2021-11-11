import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100%;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const BoxProducts = styled.div`
  width: 76.3%;
  margin: 40px 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  height: 95vh;
  scrollbar-width: none;

  @media (max-width: 900px) {
    width: 92%;
    height: auto;
  }
`;

export { Container, BoxProducts };
