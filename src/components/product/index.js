import { Card, Image, BoxFooter } from "./style";
import BoxAdd from "../addBox";

function Product({ name, img, price, stock }) {
  return (
    <Card>
      <h2>{name}</h2>
      <Image src={img} alt={name} />
      <BoxFooter>
        <div>
          <h3>{`Price: R$ ${price.toString().substr(1)}`}</h3>
          <BoxAdd name={name} img={img} price={price} stock={stock} />
        </div>
        <h3>{`Stock: ${stock}`}</h3>
      </BoxFooter>
    </Card>
  );
}

export default Product;
