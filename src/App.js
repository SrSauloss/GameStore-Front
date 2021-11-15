import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import GlobalStyle from "./shared/GlobalStyle";
import SignIn from "./pages/signIn/SignIn";
import Products from "./pages/products";
import { ProductsContext } from "./contexts/ProductsContext";
import { useState } from "react";
import Cart from "./pages/cart";
import Home from "./pages/home";

function App() {
  const [products, setProducts] = useState([]);

  const loggedIn = () => {
    const islogged = JSON.parse(localStorage.getItem("user"));
    return islogged;
  };

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            {loggedIn() ? <Redirect to="/products" /> : <Home />}
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/sign-in">
            {loggedIn() ? <Redirect to="/products" /> : <SignIn />}
          </Route>
          <Route exact path="/products">
            {loggedIn() ? <Products /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/cart">
            {loggedIn() ? <Cart /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
