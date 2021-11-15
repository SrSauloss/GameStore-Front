import { useState, useEffect } from "react";
import { BoxProducts, Container } from "../../shared";
import Product from "../../components/product";
import { listProducts } from "../../services/API";
import Loader from "react-loader-spinner";
import Footer from "../../components/footer";
import Top from "../../components/header";

function Products() {
  const [games, setGames] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("user"));

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

  return (
    <>
      <Container>
        <Top />
        <BoxProducts>
          {games ? (
            games.map((game) => (
              <Product
                key={game.id}
                id={game.id}
                name={game.name}
                img={game.image}
                price={game.price}
                stock={game.stock}
                token={userInfo.token}
              />
            ))
          ) : (
            <Loader type="ThreeDots" color="#FFFFFF" size="400" />
          )}
        </BoxProducts>
        <Footer />
      </Container>
    </>
  );
}

export default Products;
