import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer";
import { listProducts } from "../../services/API";
import { ContainerHome, Describe, HeaderHome } from "../../shared";

function Home() {
  const [examples, setExamples] = useState(null);
  const history = useHistory();

  function loadExamples() {
    listProducts()
      .then((res) => {
        setExamples(res.data.data.slice(0, 6));
      })
      .catch((err) => {
        alert("Erro ao acessar pagamentos");
      });
  }

  useEffect(loadExamples, []);
  console.log(examples);

  return (
    <>
      <HeaderHome>
        <h1>GameStore</h1>
        <div>
          <Link to="/sign-in">SignIn</Link>
          <Link to="/sign-up">SignUp</Link>
        </div>
      </HeaderHome>
      <Describe>
        <h1>
          The best and most affordable games across the internet, see all our
          products without obligation ;)
        </h1>
      </Describe>
      <ContainerHome>
        {examples?.length > 0 ? (
          <>
            <CardHome>
              <img src={examples[0].image} alt={examples[0]?.name} />
            </CardHome>
            <CardHome>
              <img src={examples[0].image} alt={examples[0]?.name} />
            </CardHome>
            <CardHome>
              <img src={examples[0].image} alt={examples[0]?.name} />
            </CardHome>
            <CardHome>
              <img src={examples[0].image} alt={examples[0]?.name} />
            </CardHome>
          </>
        ) : (
          ""
        )}
      </ContainerHome>
      <Footer />
    </>
  );
}

const CardHome = styled.div`
  background: red;
  margin-left: 10px;
  img {
    width: 400px;
    height: 400px;
  }
`;

export default Home;
