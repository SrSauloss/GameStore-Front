import { BoxProducts, Container } from "../../shared";
import Product from "../../components/product";

function Products() {
  return (
    <>
      <Container>
        <BoxProducts>
          <Product name="Call of duty" price={26.98} />
          <Product name="FIFA 2022" price={56.98} />
        </BoxProducts>
      </Container>
    </>
  );
}

export default Products;
