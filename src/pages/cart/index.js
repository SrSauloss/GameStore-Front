import styled from "styled-components";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Container } from "./style";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
function Cart() {
  const { products, setProducts } = useContext(ProductsContext);
  console.log(products);
  const ga = products[0];
  const [count, setCount] = useState(ga.amount);

  function increment() {
    setCount(count + 1);
    /*let modify = products.filter((product) => product.name !== name);
    setProducts([
      ...modify,
      { name, price: price.substr(1), image: img, amount: count + 1 },
    ]);*/
  }

  function decrement() {
    /* if (count !== 0) {
      if (count === 1) {
        setProducts(products.filter((product) => product.name !== name));
        setCount(0);
        return;
      }

      let modify = products.filter((product) => product.name !== name);
      setProducts([
        ...modify,
        { name, price: price.substr(1), image: img, amount: count - 1 },
      ]);*/
    setCount(count - 1);
    //}
  }

  console.log(count);
  return (
    <Container>
      <h1>Itens Cart</h1>
      <CardCart>
        <img src={ga.image} alt={ga.name} />
        <InfosCard>
          <p>Title: {ga.name}</p>
          <p>Price: {ga.price}</p>
          <p>Amount: {ga.amount}</p>
          <BoxAdd>
            <SubtractCircle size="20px" color="red" onClick={decrement} />
            <p>{count}</p>
            <AiOutlinePlusCircle
              size="20px"
              color="green"
              onClick={increment}
            />
          </BoxAdd>
          <button>Excluir produto</button>
        </InfosCard>
      </CardCart>
    </Container>
  );
}

const CardCart = styled.div`
  background: #000;
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  img {
    width: 130px;
    height: 130px;
  }
`;

const InfosCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 5px 0 5px 0;
  button {
    width: 120px;
    background: red;
    border: none;
    border-radius: 5px;
    color: #fafafa;
  }
`;

const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;
  p {
    color: #fff;
    min-width: 20px;
    text-align: center;
  }
`;

export default Cart;
