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

const ContainerCart = styled.div`
  width: 100%;
  min-height: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  color: #fff;

  @media (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const BoxCart = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  h6 {
    margin: auto;
    width: 300px;
    font-family: "Oswald", sans-serif;
    font-size: 36px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const InfoCart = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  h1 {
    font-size: 40px;
    font-family: "Passion One", cursive;
  }
`;

export { Container, BoxProducts, ContainerCart, InfoCart, BoxCart };
