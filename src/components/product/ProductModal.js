import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { listProductInfo } from "../../services/API";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
import { ProductsContext } from "../../contexts/ProductsContext";
import Modal from "react-modal";
import Loader from "react-loader-spinner";

Modal.setAppElement(document.getElementById("root"));
export default function ProductModal({ id, gameModal, setGameModal }) {
  const [count, setCount] = useState(0);
  const [game, setGame] = useState({});
  const { products, setProducts } = useContext(ProductsContext);
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const customStyles = {
    overlay: { background: "rgba(255, 255, 255, 0.9)" },
    content: {
      top: "15vh",
      left: "10vw",
      width: "70vw",
      height: "70vh",
      background: "#333333",
      borderRadius: "12px",
      boxShadow: " 4px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  };

  function increment() {
    setCount(count + 1);
    let modify = products.filter((product) => product.name !== game.name);
    setProducts([
      ...modify,
      { name: game.name, price: game.price.substr(1), amount: count + 1 },
    ]);
  }

  function decrement() {
    if (count !== 0) {
      if (count === 1) {
        setProducts(products.filter((product) => product.name !== game.name));
        setCount(0);
        return;
      }

      let modify = products.filter((product) => product.name !== game.name);
      setProducts([
        ...modify,
        { name: game.name, price: game.price.substr(1), amount: count - 1 },
      ]);
      setCount(count - 1);
    }
  }

  function addToCart() {}

  function getGameInfo() {
    listProductInfo({ token: userInfo.token, id })
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
                  onClick={decrement}
                  className="icon"
                />
                <p>{count}</p>
                <AiOutlinePlusCircle
                  size="20px"
                  color="#1877f2"
                  onClick={increment}
                  className="icon"
                />
              </BoxAdd>
              <button>Add to cart</button>
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
  left: 10vw;
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
`;

const PurchaseBox = styled.div`
  text-align: center;
  font-family: "Oswald", sans-serif;
  color: #ffffff;

  h2 {
    font-size: 30px;
    padding-top: 15px;
  }

  h3 {
    font-size: 20px;
    padding: 20px 0;
  }

  button {
    width: 180px;
    height: 50px;
    background: ${(props) => (props.isLoading ? "#569bf5" : "#1877F2")};
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
