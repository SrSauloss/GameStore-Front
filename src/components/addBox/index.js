import { useContext, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
import { Container, BoxAdd } from "./style";
import { ProductsContext } from "../../contexts/ProductsContext";

function AddBox({ name, img, price, stock }) {
  const { products, setProducts } = useContext(ProductsContext);
  const prod = products.filter((product) => {
    return product.name === name;
  });

  const amount = prod.length > 0 ? prod[0].amount : 0;
  const [count, setCount] = useState(amount);

  function increment() {
    setCount(count + 1);
    let modify = products.filter((product) => product.name !== name);
    setProducts([
      ...modify,
      {
        name,
        price: price.substr(1),
        image: img,
        stock: stock,
        amount: count + 1,
      },
    ]);
  }

  function decrement() {
    if (count !== 0) {
      if (count === 1) {
        setProducts(products.filter((product) => product.name !== name));
        setCount(0);
        return;
      }

      let modify = products.filter((product) => product.name !== name);
      setProducts([
        ...modify,
        {
          name,
          price: price.substr(1),
          image: img,
          stock: stock,
          amount: count - 1,
        },
      ]);
      setCount(count - 1);
    }
  }

  return (
    <Container>
      <BoxAdd>
        <SubtractCircle size="20px" color="red" onClick={decrement} />
        <p>{count}</p>
        <AiOutlinePlusCircle size="20px" color="green" onClick={increment} />
      </BoxAdd>
    </Container>
  );
}

export default AddBox;
