import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BoxProducts, Container, Main } from "../../shared";
import Product from "../../components/product";
import { listProducts } from "../../services/API";
import Loader from "react-loader-spinner";
import Footer from "../../components/footer";
import Top from "../../components/header";
import { UserContext } from "../../contexts/UserContext";
import SideBar from "../../components/sideBar";

function Products() {
  const [games, setGames] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { category } = useParams();

  console.log(category);

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
    <Container>
      <Top />
      <SideBar />
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
  );
}

export default Products;
