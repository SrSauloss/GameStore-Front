import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  background: #333;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  h1 {
    margin-left: 20px;
    font-size: 40px;
    font-family: "Passion One", cursive;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 0;
  height: 100%;
  font-family: "Oswald", sans-serif;
  font-size: 25px;
  cursor: pointer;
  h6 {
    text-align: center;
    cursor: pointer;
  }
  p {
    color: ${(props) => props.color};
    margin: 0 10px 0 2px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export { Container, Infos };
