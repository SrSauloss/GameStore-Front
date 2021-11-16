import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { BoxProducts, Container } from "../../shared";
import Product from "../../components/product";
import { listProducts, listProductsCategory } from "../../services/API";
import Loader from "react-loader-spinner";
import Footer from "../../components/footer";
import Top from "../../components/header";
import { UserContext } from "../../contexts/UserContext";
import SideBar from "../../components/sideBar";

function Products() {
  const [games, setGames] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  function loadGames() {
    if (id === "all") {
      listProducts()
        .then((res) => {
          setGames(res.data.data);
        })
        .catch((err) => {
          alert("Erro ao acessar produtos");
        });
    } else {
      listProductsCategory({ token: userInfo.token, id })
        .then((res) => {
          setGames(res.data);
        })
        .catch((err) => {
          alert("Erro ao acessar produtos");
        });
    }
  }

  useEffect(loadGames, [id]);

  return (
    <Container>
      <Top />
      <SideBar id={id}/>
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
