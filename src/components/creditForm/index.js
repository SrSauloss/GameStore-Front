import Cards from "react-credit-cards";
import { useState } from "react";
import { FormPayment, Container } from "./style";
import dayjs from "dayjs";

function CreditForm() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");

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

    console.log(number);
    console.log(name);
    console.log(expiry);
    console.log(cvc);
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
          <button>make payment</button>
        </FormPayment>
      </Container>
    </>
  );
}

export default CreditForm;
