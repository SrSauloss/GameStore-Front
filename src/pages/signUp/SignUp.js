import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../services/API";
import {
  Container,
  Banner,
  InfoContainer,
  StyledForm,
} from "../../shared/SignInUpStyle";
import Loader from "react-loader-spinner";

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
  const [cpfError, setCpfError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    setLoading(true);

    setEmailError(false);
    setCpfError(false);
    setPasswordError(false);

    if (user.password !== user.confirmPass) {
      setPasswordError(true);
      setLoading(false);
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
        setLoading(false);

        history.push("/sign-in");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          if (err.response.data === "Invalid email") {
            setEmailError(true);
          } else {
            setCpfError(true);
          }
        }
        if (err.response.status === 403) {
          alert("Campos inválidos!");
        }
        setLoading(false);
      });
  };

  return (
    <Container>
      <Banner>
        <h1>GameStore</h1>
        <h2>The best and most affordable games on all internet</h2>
      </Banner>
      <InfoContainer>
        <StyledForm onSubmit={register} loading={loading}>
          <input
            placeholder="e-mail"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          {emailError ? <p>Invalid email</p> : ""}
          <input
            placeholder="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <input
            placeholder="cpf"
            type="tel"
            pattern="[0-9]{11}"
            title="cpf must contain 11 numbers"
            value={user.cpf}
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
            required
          />
          {cpfError ? <p>Invalid cpf</p> : ""}
          <input
            placeholder="phone"
            type="tel"
            pattern="[0-9]{8,}"
            title="Minimum 8 digits"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            required
          />
          <input
            placeholder="password"
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$"
            title="Minimum eight characters, at least one letter, one number and one special character"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <input
            placeholder="confirm password"
            type="password"
            value={user.confirmPass}
            onChange={(e) => setUser({ ...user, confirmPass: e.target.value })}
            required
          />
          {passwordError ? <p>Password does not match</p> : ""}
          <button type="submit">
            {loading ? (
              <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
            ) : (
              "Sign Up"
            )}
          </button>
          <Link to="/sign-in">Switch back to log in</Link>
        </StyledForm>
      </InfoContainer>
    </Container>
  );
}
