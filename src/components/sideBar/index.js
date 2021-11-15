import styled from "styled-components";

function SideBar() {
  return (
    <Container>
      <h4>Categories</h4>
      <CardCategory>
        <h5>All Games</h5>
      </CardCategory>
      <CardCategory>
        <h5>Fps Games</h5>
      </CardCategory>
      <CardCategory>
        <h5>War Games</h5>
      </CardCategory>
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

export default SideBar;
