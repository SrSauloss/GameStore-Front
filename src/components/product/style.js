import styled from "styled-components";

const Card = styled.div`
  background: #000;
  width: 250px;
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
  display: flex;
  justify-content: space-between;
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 15px;
    padding-left: 5px;
    color: #fff;
  }
  h3:last-child {
    margin: 0 5px 5px 0;
  }
  button {
    display: flex;
    width: 120px;
    height: 31px;
    background: #1877f2;
    border: none;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 15px;
    color: #ffffff;
    margin-right: 10px;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      padding-right: 5px;
      margin-top: -2px;
    }

    :hover {
      opacity: 0.8;
    }
    :active {
      transform: translateY(-3px);
    }
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
