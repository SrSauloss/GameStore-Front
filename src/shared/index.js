import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100%;
  position: relative;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin-top: 20px;
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

const ContainerHome = styled.div`
  display: flex;
  color: #fff;
  padding-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 400px;
  background: #000;
  overflow-x: scroll;
  box-shadow: inset 0 0 1em gold, 0 0 1em red;
`;

const Describe = styled.div`
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  margin-right: 20px;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 900px) {
    font-size: 23px;
  }
`;

const HeaderHome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #000;
  h1 {
    font-size: 100px;
    font-family: "Passion One", cursive;
    margin-left: 20px;
  }
  a {
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 35px;
    margin-right: 20px;
  }
  @media (max-width: 900px) {
    height: 50px;
    h1 {
      font-size: 30px;
    }
    a {
      font-size: 20px;
    }
  }
`;

const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export {
  Container,
  BoxProducts,
  ContainerCart,
  InfoCart,
  BoxCart,
  ButtonsCart,
  ContainerHome,
  Describe,
  HeaderHome,
  Loading,
};
