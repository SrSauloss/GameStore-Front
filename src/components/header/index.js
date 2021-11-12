import { Infos, Container } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useHistory } from "react-router-dom";

function Top() {
  const { products, setProducts } = useContext(ProductsContext);
  const history = useHistory();

  function logout(e) {
    e.preventDefault();
    setProducts([]);
    localStorage.removeItem("user");
    history.push("/sign-in");
  }

  return (
    <Container>
      <h1>GameStore</h1>
      <Infos color={products.length > 0 ? "#0f0" : "#fff"}>
        <AiOutlineShoppingCart size="30" />
        <p>{products.length}</p>
        <h6 onClick={logout}>Logout</h6>
      </Infos>
    </Container>
  );
}

export default Top;
