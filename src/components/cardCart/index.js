import { Card, InfosCard } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

function CardCart({ name, price, stock, amount, img }) {
  const { products, setProducts } = useContext(ProductsContext);

  function deleteProduct(e) {
    e.preventDefault();
    setProducts(products.filter((product) => product.name !== name));
  }

  return (
    <Card>
      <img src={img} alt={name} />
      <InfosCard>
        <p>Title: {name}</p>
        <p>Price: R$ {price}</p>
        <p>Amount: {amount}</p>
        <button onClick={deleteProduct}>Excluir produto</button>
      </InfosCard>
    </Card>
  );
}

export default CardCart;
