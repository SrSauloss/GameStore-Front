import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import CardHome from "../../components/cardHome";
import Footer from "../../components/footer";
import { listProducts } from "../../services/API";
import { ContainerHome, Describe, HeaderHome, Loading } from "../../shared";

function Home() {
  const [examples, setExamples] = useState(null);

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
        {examples ? (
          <>
            {examples.map((example) => (
              <Link to="sign-in" key={example.id}>
                <CardHome image={example.image} name={example.name} />
              </Link>
            ))}
          </>
        ) : (
          <Loading>
            <Loader
              type="ThreeDots"
              color="#FFF"
              width="300px"
              height="400px"
            />
          </Loading>
        )}
      </ContainerHome>
      <Footer />
    </>
  );
}

export default Home;
