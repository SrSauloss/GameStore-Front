import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Container, Info, Box } from "./style";
import CardCart from "../../components/cardCart";
import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Footer from "../../components/footer";

function Cart() {
  const { products } = useContext(ProductsContext);
  const history = useHistory();

  function back(e) {
    e.preventDefault();
    history.goBack();
  }
  return (
    <>
      <Info>
        <h1>Itens Cart</h1>
        <AiOutlineRollback size="27" onClick={back} />
      </Info>
      <Container>
        <Box>
          {products.map((product, index) => (
            <CardCart
              key={index}
              name={product.name}
              price={product.price}
              img={product.image}
              stokc={product.stock}
              amount={product.amount}
            />
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
