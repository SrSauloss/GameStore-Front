import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { UserContext } from "../../contexts/UserContext";
import { listCategories } from "../../services/API";

function SideBar() {
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
          <CardCategory onClick={() => history.push(`/products/all`)}>
            <h5>All Games</h5>
          </CardCategory>
          {categories.map((category) => (
            <CardCategory
              key={category.id}
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

const Container = styled.div`
  position: absolute;
  width: 280px;
  background: #000;
  right: 10px;
  top: 100px;
  border-radius: 5px;
  color: #fff;
  h4 {
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-size: 25px;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    margin: 40px 0 0 20px;
    width: 92%;
    position: static;
  }
`;

const CardCategory = styled.div`
  width: 270px;
  background: #333;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 0;
  margin: 0 5px 3px 5px;
  h5 {
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-size: 23px;
  }
  @media (max-width: 900px) {
    width: 97%;
    position: static;
  }
`;

const BoxLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default SideBar;
