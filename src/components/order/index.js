import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Container, Infos, Box } from "./style";

function Order() {
  const { products } = useContext(ProductsContext);
  let total = 0;
  products.forEach((item) => (total += item.amount * item.price));

  return (
    <>
      <Box>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <Container key={product.id}>
                <img src={product.image} alt={product.name} />
                <Infos>
                  <p>Title: {product.name}</p>
                  <p>Price: R$ {product.price}</p>
                  <p>Amount: {product.amount}</p>
                  <p>Total: {(product.amount * product.price).toFixed(2)}</p>
                </Infos>
              </Container>
            ))}
            <h2>
              <span>Total purchase: </span>
              {`R$ ${total.toFixed(2)}`}
            </h2>
          </>
        ) : (
          <h6>You have no products to buy :(</h6>
        )}
      </Box>
    </>
  );
}

export default Order;
