import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #000;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
  h1 {
    margin-left: 20px;
    font-size: 40px;
    font-family: "Passion One", cursive;
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
  h6 {
    font-size: 25px;
    text-align: center;
    cursor: pointer;
  }
  p {
    color: ${(props) => props.color};
    font-size: 25px;
    margin: 0 10px 0 2px;
  }
  @media (max-width: 900px) {
    padding-bottom: 10px;
  }
`;

export { Container, Infos };
