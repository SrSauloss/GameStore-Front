import { Infos, Container } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function Top() {
  const { products, setProducts } = useContext(ProductsContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const history = useHistory();

  function logout(e) {
    e.preventDefault();
    if (window.confirm("Are you sure you want to logout?")) {
      setProducts([]);
      localStorage.removeItem("user");
      setUserInfo(null);
      history.push("/sign-in");
    }
  }

  function cart(e) {
    e.preventDefault();
    history.push("/cart");
  }

  return (
    <Container>
      <h1>GameStore</h1>
      <Infos color={products.length > 0 ? "#0f0" : "#fff"}>
        <h2>Hello, {userInfo.name}</h2>
        <AiOutlineShoppingCart size="30" onClick={cart} />
        <p>{products.length}</p>

        <BiLogOut size="30" onClick={logout} />
      </Infos>
    </Container>
  );
}

export default Top;
