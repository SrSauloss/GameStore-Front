import styled from "styled-components";
import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { InfoCart } from "../../shared";
import Order from "../../components/order";
import Footer from "../../components/footer";
import CreditForm from "../../components/creditForm";

function Payment() {
  const history = useHistory();
  const { products } = useContext(ProductsContext);

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
        <Order />
        {products.length > 0 ? <CreditForm /> : ""}
      </Container>
      <Footer />
    </>
  );
}

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

export default Payment;
