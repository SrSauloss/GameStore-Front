import { Card, InfosCard } from "./style";
import { useState } from "react";
import ProductModal from "../product/ProductModal";

function CardCart({ name, price, id, amount, img }) {
  const [gameModal, setGameModal] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Card onClick={() => setGameModal(true)}>
        <img src={img} alt={name} />
        <InfosCard>
          <p>Title: {name}</p>
          <p>Price: R$ {price}</p>
          <p>Amount: {amount}</p>
        </InfosCard>
      </Card>
      <ProductModal
        id={id}
        gameModal={gameModal}
        setGameModal={setGameModal}
        token={userInfo.token}
        amount={amount}
      />
    </>
  );
}

export default CardCart;
