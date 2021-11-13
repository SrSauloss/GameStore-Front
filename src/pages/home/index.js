import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer";
import { listProducts } from "../../services/API";
import { Banner } from "../../shared/SignInUpStyle";

function Home() {
  const [games, setGames] = useState(null);
  const history = useHistory();

  function loadGames() {
    listProducts()
      .then((res) => {
        setGames(res.data.data);
      })
      .catch((err) => {
        alert("Erro ao acessar pagamentos");
      });
  }

  useEffect(loadGames, []);
  console.log(games);

  return (
    <>
      <HeaderHome>
        <h1>GameStore</h1>
        <LinksHome>
          <Link>SignIn</Link>
          <Link>SignUp</Link>
        </LinksHome>
      </HeaderHome>
      <Describe>
        <h1>
          The best and most affordable games across the internet, see all our
          products without obligation ;)
        </h1>
      </Describe>
      <Container>
        <CardHome>
          <img src={games[0].image} alt={games[0]?.name} />
        </CardHome>
        <CardHome>
          <img src={games[0].image} alt={games[0]?.name} />
        </CardHome>
        <CardHome>
          <img src={games[0].image} alt={games[0]?.name} />
        </CardHome>
        <CardHome>
          <img src={games[0].image} alt={games[0]?.name} />
        </CardHome>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 400px;
  background: yellow;
  overflow-x: scroll;
`;

const CardHome = styled.div`
  background: red;
  margin-left: 10px;
  img {
    width: 400px;
    height: 400px;
  }
`;

const Describe = styled.div`
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  margin-right: 20px;
  text-align: center;
  margin-top: 20px;
`;

const HeaderHome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #000;
  h1 {
    font-size: 100px;
    font-family: "Passion One", cursive;
    margin-left: 20px;
  }
  a {
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 35px;
    margin-right: 20px;
  }
  @media (max-width: 900px) {
    height: 50px;
    h1 {
      font-size: 30px;
    }
    a {
      font-size: 20px;
    }
  }
`;

const LinksHome = styled.div``;
export default Home;
