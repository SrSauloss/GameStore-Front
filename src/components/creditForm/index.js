import Cards from "react-credit-cards";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { FormPayment, Container, ScreenSucess, BoxMessage } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import dayjs from "dayjs";
import { postTransaction } from "../../services/API";

function CreditForm() {
  const history = useHistory();
  const { products, setProducts } = useContext(ProductsContext);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("user"));

  function makePayement(e) {
    e.preventDefault();
    let pattern =
      "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$";

    if (!number.match(pattern)) {
      alert("Insert a valid card");
      return;
    }

    if (!expiry.match("^(0[1-9]|1[0-2])/(1[4-9]|[2-9][0-9]|20[1-9][1-9])$")) {
      alert("Insert a valid date expiry");
      return;
    }

    if (!cvc.match("^[0-9]{3,4}$")) {
      alert("Insert a valid cvc");
      return;
    }

    setLoading(true);
    let total = 0;
    products.forEach((item) => (total += item.amount * item.price));
    const games_ids = products.map((product) => ({
      id: product.id,
      amount: product.amount,
    }));

    const body = {
      price: total,
      games_ids: games_ids,
      date: dayjs().format("YYYY-MM-DD"),
    };

    postTransaction({ token: userInfo.token, body })
      .then((res) => {
        setSucess(true);
        setTimeout(() => {
          setSucess(false);
          setProducts([]);
          history.push("/products");
        }, 2000);
        setLoading(false);
      })
      .catch((err) => {
        alert("Erro ao realizar pagamento");
        setLoading(false);
      });
  }

  return (
    <>
      <Container>
        <Cards number={number} name={name} expiry={expiry} cvc={cvc} />
        <FormPayment onSubmit={makePayement}>
          <input
            placeholder="Number card"
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="MM/YY"
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
          <input
            placeholder="CVC"
            onChange={(e) => setCvc(e.target.value)}
            required
          />
          <button disabled={loading}>
            {loading ? (
              <Loader
                type="ThreeDots"
                color="#fff"
                width="202px"
                height="20px"
              />
            ) : (
              "make payment"
            )}
          </button>
        </FormPayment>
        {sucess ? (
          <ScreenSucess>
            <BoxMessage>
              <h1>successful payment</h1>
              <p>Please wait you will be redirected to the product page</p>
              <Loader
                type="ThreeDots"
                color="#00a000"
                width="300px"
                height="400px"
              />
            </BoxMessage>
          </ScreenSucess>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default CreditForm;
