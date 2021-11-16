import styled from "styled-components";
import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { InfoCart } from "../../shared";
import Order from "../../components/order";

function Payment() {
  const { products, setProducts } = useContext(ProductsContext);

  let total = 0;

  products.forEach((item) => (total += item.amount * item.price));

  console.log(total);

  const history = useHistory();

  function back(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <>
      <InfoCart>
        <h1>Order Summary</h1>
        <AiOutlineRollback size="27" onClick={back} />
      </InfoCart>
      <Container>
        <Box>
          {products.length > 0 ? (
            <>
              {products.map((product, index) => (
                <Order
                  key={index}
                  name={product.name}
                  price={product.price}
                  img={product.image}
                  amount={product.amount}
                />
              ))}
              <h2>
                <span>Total purchase: </span>
                {`R$ ${total}`}
              </h2>
            </>
          ) : (
            <h6>You haven't added anything to your cart yet :(</h6>
          )}
        </Box>
        <FormPayment>
          <input placeholder="Number card" />
          <input placeholder="Name" />
          <input placeholder="Validate" />
          <input placeholder="CVC" />
          <button>make payment</button>
        </FormPayment>
      </Container>
    </>
  );
}

const FormPayment = styled.form`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  input {
    width: 325px;
    border: none;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-size: 22px;
    color: #9f9f9f;
    padding-left: 17px;
    background-color: ${({ loading }) => (loading ? "#F2F2F2" : "#FFFFFF")};
    pointer-events: ${({ loading }) => (loading ? "none" : "all")};
    margin-bottom: 5px;
    margin-right: 5px;
  }
  input:nth-child(4),
  input:nth-child(3) {
    width: 160px;
  }
  button {
    width: 325px;
    border: none;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: #fff;
    background-color: ${({ loading }) => (loading ? "#F2F2F2" : "green")};
    margin-bottom: 5px;
    margin-right: 5px;
  }
  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
  }
  span {
    margin-right: 5%;
  }
`;

const Box = styled.div`
  width: 90%;
  height: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  background: #000;
  overflow-y: scroll;
  overflow-x: hidden;
  h6 {
    margin: auto;
    width: 300px;
    font-family: "Oswald", sans-serif;
    font-size: 36px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    h2 {
      width: 300px;
      font-size: 20px;
    }
  }
`;

export default Payment;
