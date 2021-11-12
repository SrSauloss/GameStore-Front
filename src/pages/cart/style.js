import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background: #333;
  display: flex;
  justify-content: center;
  color: #fff;

  @media (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const Box = styled.div`
  width: 90%;
  background: purple;
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  @media (max-width: 900px) {
  }
`;

const Info = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-left: 20px;
    font-size: 40px;
    font-family: "Passion One", cursive;
  }
`;

export { Container, Info, Box };
