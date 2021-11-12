import styled from "styled-components";

const Card = styled.div`
  background: #000;
  width: 245px;
  height: 360px;
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
    height: 230px;
    margin: 0 0 20px 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 79%;
  margin: 5px 0 5px 0;
  @media (max-width: 900px) {
    height: 65%;
  }
`;

const BoxFooter = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 15px;
    padding-left: 5px;
    color: #fff;
  }
  h3:last-child {
    margin: 0 5px 5px 0;
  }
  @media (max-width: 900px) {
    font-size: 12px;
    justify-content: space-between;
    h3 {
      font-size: 12px;
    }
  }
`;

export { Card, Image, BoxFooter };
