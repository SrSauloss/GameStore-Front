import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: #333333;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const BoxProducts = styled.div`
  background: yellow;
  width: 80%;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  //  height: 100vh;
  min-height: 100%;
`;

export { Container, BoxProducts };
