import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 10px 0 1px 10px;
  display: flex;
  border-radius: 5px;
  img {
    width: 80px;
    height: 80px;
  }
`;

const Infos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  p {
    width: 200px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Box = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  background: #000;
  overflow-y: scroll;
  overflow-x: hidden;
  h6 {
    margin: auto;
    width: 300px;
    font-family: "Oswald", sans-serif;
    font-size: 36px;
  }
  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    h2 {
      width: 300px;
      font-size: 20px;
    }
  }
`;

export { Container, Infos, Box };
