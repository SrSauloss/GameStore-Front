import styled from "styled-components";

function Order({ name, price, img, amount }) {
  return (
    <>
      <Card>
        <img src={img} alt={name} />
        <InfosCard>
          <p>Title: {name}</p>
          <p>Price: R$ {price}</p>
          <p>Amount: {amount}</p>
          <p>Total: {(amount * price).toFixed(2)}</p>
        </InfosCard>
      </Card>
    </>
  );
}

const Card = styled.div`
  width: 100%;
  margin: 10px 0 1px 10px;
  display: flex;
  border-radius: 5px;
  img {
    width: 80px;
    height: 80px;
  }
`;

const InfosCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  p {
    width: 200px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default Order;
