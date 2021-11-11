import { useContext, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
import { Card, Image, BoxFooter, BoxAdd } from "./style";
import { ProductsContext } from "../../contexts/ProductsContext";

function Product({ name, img, price }) {
  const [count, setCount] = useState(0);
  const { products, setProducts } = useContext(ProductsContext);

  function increment() {
    setCount(count + 1);
    let modify = products.filter((product) => product.name !== name);
    setProducts([...modify, { name, price, amount: count + 1 }]);
  }

  function decrement() {
    if (count !== 0) {
      if (count === 1) {
        setProducts(products.filter((product) => product.name !== name));
        setCount(0);
        return;
      }

      let modify = products.filter((product) => product.name !== name);
      setProducts([...modify, { name, price, amount: count - 1 }]);
      setCount(count - 1);
    }
  }

  console.log(products);

  return (
    <Card>
      <h2>{name}</h2>
      <Image src={img} alt={name} />
      <BoxFooter>
        <h3>Price: R$ ${price}</h3>
        <BoxAdd>
          <SubtractCircle size="20px" color="#fff" onClick={decrement} />
          <p>{count}</p>
          <AiOutlinePlusCircle size="20px" color="#fff" onClick={increment} />
        </BoxAdd>
      </BoxFooter>
    </Card>
  );
}

export default Product;
