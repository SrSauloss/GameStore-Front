import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../services/API";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPass: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPass) {
      setPasswordError(true);
      return;
    }

    const body = {
      email: user.email,
      name: user.name,
      cpf: user.cpf,
      phone: user.phone,
      password: user.password,
    };

    signUp({ body })
      .then((res) => {
        setUser({
          email: "",
          name: "",
          cpf: "",
          phone: "",
          password: "",
          confirmPass: "",
        });

        history.push("/sign-in");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setEmailError(true);
        }
        if (err.response.status === 403) {
          alert("Campos inválidos!");
        }
      });
  };

  return (
    <SignUpContainer>
      <Banner>
        <h1>GameStore</h1>
        <h2>The best and most affordable games on all internet</h2>
      </Banner>
      <InfoContainer>
        <StyledForm onSubmit={register}>
          <StyledInput
            placeholder="e-mail"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          {emailError ? <p>Digite um e-mail válido</p> : ""}
          <StyledInput
            placeholder="nome"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <StyledInput
            placeholder="cpf"
            type="tel"
            pattern="[0-9]{11}"
            title="cpf deve conter 11 números"
            value={user.cpf}
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
            required
          />
          <StyledInput
            placeholder="telefone"
            type="tel"
            pattern="[0-9]{8,}"
            title="Mínimo 8 dígitos"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            required
          />
          <StyledInput
            placeholder="senha"
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Mínimo 8 dígitos, uma letra, um número e um caractere especial"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <StyledInput
            placeholder="confirme senha"
            type="password"
            value={user.confirmPass}
            onChange={(e) => setUser({ ...user, confirmPass: e.target.value })}
            required
          />
          {passwordError ? (
            <p>Senha não corresponde com a do outro campo</p>
          ) : (
            ""
          )}
          <button type="submit">Sign Up</button>
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

  p {
    margin-top: -8px;
    color: #c12d1f;
    width: 330px;
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
