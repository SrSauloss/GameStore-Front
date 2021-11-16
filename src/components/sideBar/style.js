import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 280px;
  background: #000;
  right: 10px;
  top: 100px;
  border-radius: 5px;
  color: #fff;
  h4 {
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-size: 25px;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    margin: 40px 0 0 20px;
    width: 92%;
    position: static;
  }
`;

const CardCategory = styled.div`
  width: 270px;
  background: #333;
  color: ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 0;
  margin: 0 5px 3px 5px;
  h5 {
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-size: 23px;
  }
  @media (max-width: 900px) {
    width: 97%;
    position: static;
  }
`;

const BoxLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { Container, CardCategory, BoxLoading };
