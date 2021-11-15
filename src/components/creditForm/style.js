import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";

const ScreenSucess = styled.div`
  position: absolute;
  background: red;
  width: 100%;
  height: 100%;
`;
const BoxMessage = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #d4d4d4;
  font-family: "Oswald", sans-serif;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 22px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  @media (max-width: 900px) {
    width: 95%;
    flex-direction: column;
  }
`;

const FormPayment = styled.form`
  height: 180px;
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  input {
    width: 325px;
    border: none;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-size: 22px;
    color: #9f9f9f;
    padding-left: 17px;
    background-color: ${({ loading }) => (loading ? "#F2F2F2" : "#FFFFFF")};
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};
    margin-bottom: 5px;
    margin-right: 5px;
  }
  input:nth-child(4),
  input:nth-child(3) {
    width: 160px;
  }
  button {
    width: 325px;
    border: none;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: #fff;
    background-color: ${({ loading }) => (loading ? "#F2F2F2" : "green")};
    margin-right: 5px;
  }
  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

export { FormPayment, Container, ScreenSucess, BoxMessage };
