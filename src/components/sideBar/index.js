import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { UserContext } from "../../contexts/UserContext";
import { listCategories } from "../../services/API";
import { Container, CardCategory, BoxLoading } from "./style";

function SideBar({ id }) {
  const { userInfo } = useContext(UserContext);
  const [categories, setCategories] = useState(null);
  const history = useHistory();

  function loadCategories() {
    listCategories({ token: userInfo.token })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        alert("Erro ao acessar pagamentos");
      });
  }

  useEffect(loadCategories, []);

  return (
    <Container>
      <h4>Categories</h4>
      {categories ? (
        <>
          <CardCategory
            color={id === "all" ? "green" : "#fff"}
            onClick={() => history.push(`/products/all`)}
          >
            <h5>All Games</h5>
          </CardCategory>
          {categories.map((category) => (
            <CardCategory
              key={category.id}
              color={id === category.id.toString() ? "green" : "#fff"}
              onClick={() => history.push(`/products/${category.id}`)}
            >
              <h5>{category.name} Games </h5>
            </CardCategory>
          ))}
        </>
      ) : (
        <BoxLoading>
          <Loader type="ThreeDots" color="#FFFFFF" size="200" />
        </BoxLoading>
      )}
    </Container>
  );
}

export default SideBar;
