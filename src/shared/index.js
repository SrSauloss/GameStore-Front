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
  position: relative;
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

  margin-bottom: 60px;
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

const ButtonsCart = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 85px;
  margin-bottom: 5px;
  button:first-child {
    background: green;
  }
  button {
    width: 120px;
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: #fff;
    border: none;
    border-radius: 5px;
    background: red;
  }
  @media (max-width: 900px) {
    left: 14%;
  }
`;

export {
  Container,
  BoxProducts,
  ContainerCart,
  InfoCart,
  BoxCart,
  ButtonsCart,
};
