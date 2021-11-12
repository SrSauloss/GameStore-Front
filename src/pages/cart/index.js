import { AiOutlineRollback } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ContainerCart, InfoCart, BoxCart, ButtonsCart } from "../../shared";
import CardCart from "../../components/cardCart";
import Footer from "../../components/footer";

function Cart() {
  const { products, setProducts } = useContext(ProductsContext);

  const history = useHistory();

  function back(e) {
    e.preventDefault();
    history.goBack();
  }

  function clearCart(e) {
    e.preventDefault();
    setProducts([]);
  }

  return (
    <>
      <InfoCart>
        <h1>Itens Cart</h1>
        <AiOutlineRollback size="27" onClick={back} />
      </InfoCart>
      {
        <ContainerCart>
          <BoxCart>
            {products.length > 0 ? (
              <>
                {products.map((product, index) => (
                  <CardCart
                    key={index}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.image}
                    stokc={product.stock}
                    amount={product.amount}
                  />
                ))}
                <ButtonsCart>
                  <button>finalize order</button>
                  <button onClick={clearCart}>clear cart</button>
                </ButtonsCart>
              </>
            ) : (
              <h6>You haven't added anything to your cart yet :(</h6>
            )}
          </BoxCart>
        </ContainerCart>
      }
      <Footer />
    </>
  );
}

export default Cart;
