import { Infos, Container } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
function Top() {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      <h1>GameStore</h1>
      <Infos color={products.length > 0 ? "#4ee44e" : "#fff"}>
        <AiOutlineShoppingCart size="30" />
        <p>{products.length}</p>
        <h6>Logout</h6>
      </Infos>
    </Container>
  );
}

export default Top;
