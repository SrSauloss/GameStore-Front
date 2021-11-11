import styled from "styled-components";

const Card = styled.div`
  background: red;
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
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  margin: 5px 0 5px 0;
`;

const BoxFooter = styled.div`
  display: flex;
  background: blueviolet;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 15px;
    padding-left: 5px;
    color: #fff;
  }
`;

const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  p {
    min-width: 20px;
    text-align: center;
  }
`;

export { Card, Image, BoxFooter, BoxAdd };
