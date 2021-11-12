import { useState } from "react";
import { Card, Image, BoxFooter } from "./style";
import ProductModal from "./ProductModal";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Product({ id, name, img, price, stock, token }) {
  const [gameModal, setGameModal] = useState(false);

  return (
    <>
      <Card>
        <h2>{name}</h2>
        <Image src={img} alt={name} />
        <BoxFooter>
          <div>
            <h3>{`Price: R$ ${price.toString().substr(1)}`}</h3>
            <h3>{`Stock: ${stock}`}</h3>
          </div>
          <button onClick={() => setGameModal(true)}>
            <span>Buy</span>
            <AiOutlineShoppingCart size="25" />
          </button>
        </BoxFooter>
      </Card>
      <ProductModal
        id={id}
        gameModal={gameModal}
        setGameModal={setGameModal}
        token={token}
      />
    </>
  );
}

export default Product;
