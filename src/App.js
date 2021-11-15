import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import GlobalStyle from "./shared/GlobalStyle";
import SignIn from "./pages/signIn/SignIn";
import Products from "./pages/products";
import { ProductsContext } from "./contexts/ProductsContext";
import { useState } from "react";
import Cart from "./pages/cart";
import Home from "./pages/home";
import { UserContext } from "./contexts/UserContext";
import Payment from "./pages/payment";

function App() {
  const [products, setProducts] = useState([]);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <ProductsContext.Provider value={{ products, setProducts }}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              {userInfo ? <Redirect to="/products" /> : <Home />}
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/sign-in">
              {userInfo ? <Redirect to="/products" /> : <SignIn />}
            </Route>
            <Route exact path="/products/:category">
              {userInfo ? <Products /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/cart">
              {userInfo ? <Cart /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/payment">
              {userInfo ? <Payment /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </ProductsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
