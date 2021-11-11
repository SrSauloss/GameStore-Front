import { AiOutlinePlusCircle } from "react-icons/ai";
import { SubtractCircle } from "grommet-icons";
import styled from "styled-components";

import { BoxProducts, Container } from "../../shared";

function Products() {
  return (
    <>
      <Container>
        <BoxProducts>
          <Card>
            <h2>Call of Duty</h2>
            <Image
              src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/vgd/VGD_SEE_THEM_RISE.jpg"
              alt="game"
            />
            <BoxFooter>
              <h3>Price: R$ 25.98</h3>
              <BoxAdd>
                <SubtractCircle size="20px" color="#fff" />
                <p></p>
                <AiOutlinePlusCircle size="20px" color="#fff" />
              </BoxAdd>
            </BoxFooter>
          </Card>
        </BoxProducts>
      </Container>
    </>
  );
}

const Card = styled.div`
  background: red;
  width: 250px;
  height: 320px;
  border-radius: 5px;
  margin-left: 5px;

  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  margin: 5px 0 5px 0;
`;

const BoxFooter = styled.div`
  display: flex;
  background: blueviolet;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 15px;
    padding-left: 5px;
    color: #fff;
  }
`;

const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  p {
    min-width: 20px;
    text-align: center;
  }
`;

export default Products;
