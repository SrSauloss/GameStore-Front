import styled from "styled-components";

const Card = styled.div`
  background: #000;
  width: 250px;
  height: 320px;
  border-radius: 5px;
  margin: 0 0 5px 5px;

  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
  @media (max-width: 900px) {
    width: 160px;
    height: 280px;
    margin: 0 0 20px 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 79%;
  border-radius: 5px;
  margin: 5px 0 5px 0;
`;

const BoxFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 15px;
    padding-left: 5px;
    color: #fff;
  }
  @media (max-width: 900px) {
    font-size: 12px;
    justify-content: space-between;
    h3 {
      font-size: 12px;
    }
  }
`;

const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  p {
    color: #fff;
    min-width: 20px;
    text-align: center;
  }
`;

export { Card, Image, BoxFooter, BoxAdd };
