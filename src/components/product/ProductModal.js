import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { listProductInfo } from "../../services/API";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
import { ProductsContext } from "../../contexts/ProductsContext";
import Modal from "react-modal";
import Loader from "react-loader-spinner";

Modal.setAppElement(document.getElementById("root"));
export default function ProductModal({ id, gameModal, setGameModal, token }) {
  const [count, setCount] = useState(0);
  const [game, setGame] = useState({});
  const { products, setProducts } = useContext(ProductsContext);

  const customStyles = {
    overlay: { background: "rgba(255, 255, 255, 0.9)" },
    content: {
      top: "15vh",
      left: "14vw",
      width: "70vw",
      height: "70vh",
      background: "#333333",
      borderRadius: "12px",
      boxShadow: " 4px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  };

  function increment() {
    if (count !== game.stock) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function addToCart() {
    if (count === 0) {
      setProducts(products.filter((product) => product.name !== game.name));
    } else {
      let modify = products.filter((product) => product.name !== game.name);
      setProducts([
        ...modify,
        { name: game.name, price: game.price.substr(1), amount: count },
      ]);
    }
    setGameModal(false);
  }

  function getGameInfo() {
    listProductInfo({ token, id })
      .then((res) => {
        setGame(res.data.data);
      })
      .catch((err) => {
        alert("Erro ao acessar pagamentos");
      });
  }

  useEffect(getGameInfo, []);

  return (
    <Modal isOpen={gameModal} style={customStyles}>
      <Container>
        {!game.name ? (
          <Loader type="ThreeDots" color="#FFFFFF" size="400" />
        ) : (
          <>
            <img src={game.image} alt={game.name} />
            <Border />
            <InfoBox>
              <h1>{game.name}</h1>
              <p>{game.description}</p>
              <p>Category: {game.categoryName}</p>
            </InfoBox>
            <Border />
            <PurchaseBox>
              <h2>R{game.price}</h2>
              <h3>Stock: {game.stock}</h3>
              <BoxAdd>
                <SubtractCircle
                  size="20px"
                  color="#1877f2"
                  cursor="pointer"
                  onClick={decrement}
                />
                <p>{count}</p>
                <AiOutlinePlusCircle
                  size="20px"
                  color="#1877f2"
                  cursor="pointer"
                  onClick={increment}
                />
              </BoxAdd>
              <button onClick={addToCart}>Add to cart</button>
            </PurchaseBox>
            <CloseButton onClick={() => setGameModal(false)}>x</CloseButton>
          </>
        )}
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 7;
  top: 15vh;
  left: 14vw;
  width: 70vw;
  height: 70vh;
  background-color: #333333;
  border-radius: 12px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(800px);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 21vw;
    height: 55vh;
    border-radius: 8px;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    overflow-y: scroll;

    img {
      width: 180px;
      height: 260px;
      margin-top: 280px;
      margin-bottom: 20px;
    }
  }
`;

const Border = styled.div`
  height: 100%;
  width: 10px;
  background-color: #1877f2;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 0 30px;
`;

const InfoBox = styled.div`
  height: 55vh;
  color: #ffffff;

  h1 {
    font-size: 40px;
    font-family: "Passion One", cursive;
  }
  p {
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    margin-top: 30px;
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const PurchaseBox = styled.div`
  text-align: center;
  font-family: "Oswald", sans-serif;
  color: #ffffff;

  h2 {
    font-size: 30px;
    padding-top: 15px;
    font-weight: 700;
  }

  h3 {
    font-size: 20px;
    padding: 20px 0;
  }

  button {
    width: 180px;
    height: 50px;
    background: #1877f2;
    border: none;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-weight: bold;
    font-size: 22px;
    line-height: 33px;
    color: #ffffff;

    :hover {
      opacity: 0.8;
    }
    :active {
      transform: translateY(-3px);
    }
  }
`;

const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  p {
    color: #fff;
    min-width: 30px;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #1877f2;
  border-radius: 35px;
  color: #ffffff;
  font-size: 20px;

  :hover {
    opacity: 0.8;
  }
`;
