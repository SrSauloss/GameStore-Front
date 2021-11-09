import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signIn } from "../../services/API";
import Loader from "react-loader-spinner";
import {
  SignUpContainer,
  Banner,
  InfoContainer,
  StyledForm,
} from "../../shared/SignInUpStyle";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      email,
      password,
    };

    signIn({ body })
      .then((res) => {
        const user = JSON.stringify(res.data);
        localStorage.setItem("user", user);

        setEmail("");
        setPassword("");
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Usuário não encontrado. Email ou senha inválidos");
        }
        if (err.response.status === 403) {
          alert("Campos inválidos!");
        }
        setLoading(false);
      });
  };

  return (
    <SignUpContainer>
      <Banner>
        <h1>GameStore</h1>
        <h2>The best and most affordable games on all internet</h2>
      </Banner>
      <InfoContainer>
        <StyledForm onSubmit={login} loading={loading}>
          <input
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {loading ? (
              <Loader type="ThreeDots" color="#FFFFFF" height={13} width={51} />
            ) : (
              "Sign In"
            )}
          </button>
          <Link to="/sign-in">Switch back to log in</Link>
        </StyledForm>
      </InfoContainer>
    </SignUpContainer>
  );
}
