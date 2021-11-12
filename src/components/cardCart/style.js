import styled from "styled-components";

const Card = styled.div`
  background: #000;
  width: 25%;
  height: auto;
  margin: 10px 0 20px 10px;
  display: flex;
  border-radius: 5px;
  img {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
`;

const InfosCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px 0 5px 0;
  p {
    width: 180px;
  }
  button {
    width: 120px;
    background: red;
    border: none;
    border-radius: 5px;
    color: #fafafa;
  }
  @media (max-width: 900px) {
    width: 100px;
  }
`;

export { Card, InfosCard };
