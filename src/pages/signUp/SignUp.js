import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <SignUpContainer>
      <Banner>
        <h1>GameStore</h1>
        <h2>The best and most affordable games on all internet</h2>
      </Banner>
      <InfoContainer>
        <StyledForm>
          <StyledInput />
          <StyledInput />
          <StyledInput />
          <StyledInput />
          <button>Sign Up</button>
          <Link to="/sign-in">Switch back to log in</Link>
        </StyledForm>
      </InfoContainer>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
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
`;

const InfoContainer = styled.div`
  height: 100%;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: grid;
  gap: 11px;
  justify-content: center;
  margin-top: 40px;

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
    .switch-sign {
      :hover {
        opacity: 0.8;
      }
    }
  }
`;

const StyledInput = styled.input`
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
`;
