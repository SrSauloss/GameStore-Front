import { Card } from "./style";

function CardHome({ image, name }) {
  return (
    <Card>
      <img src={image} alt={name} />
    </Card>
  );
}

export default CardHome;
