import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const Banner = styled.div`
  height: 100vh;
  background-color: #151515;
  font-weight: 700;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15%;

  h1 {
    font-size: 106px;
    font-family: "Passion One", cursive;
  }

  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
  }

  @media (max-width: 900px) {
    height: 175px;
    align-items: center;

    h1 {
      font-size: 76px;
    }

    h2 {
      font-size: 23px;
      text-align: center;
    }
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;

  span {
    width: 330px;
    height: 30px;
    margin-bottom: -30px;
    background-color: #ffffff;
    align-self: center;
    text-align: center;
    border-radius: 6px;
    color: #c12d1f;
    font-family: "Oswald", sans-serif;
    font-size: 25px;
    opacity: 0.8;
  }
`;

const StyledForm = styled.form`
  display: grid;
  gap: 11px;
  justify-content: center;
  margin-top: 40px;

  input {
    width: 330px;
    height: 55px;
    border: none;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    color: #9f9f9f;
    padding-left: 17px;
    background-color: ${({ loading }) => (loading ? "#F2F2F2" : "#FFFFFF")};
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};
  }

  button {
    width: 330px;
    height: 55px;
    background: ${(props) => (props.isLoading ? "#569bf5" : "#1877F2")};
    border: none;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    color: #ffffff;
    opacity: ${({ loading }) => (loading ? 0.7 : 1)};
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};

    :hover {
      opacity: 0.8;
    }
    :active {
      transform: translateY(-3px);
    }
  }

  a {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    color: #ffffff;
    margin-top: 14px;
    text-align: center;
    text-decoration: underline;
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};

    .switch-sign {
      :hover {
        opacity: 0.8;
      }
    }
  }

  p {
    margin-top: -8px;
    color: #c12d1f;
    width: 330px;
  }
`;

export { Container, Banner, InfoContainer, StyledForm };
