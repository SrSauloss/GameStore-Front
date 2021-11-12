import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import GlobalStyle from "./shared/GlobalStyle";
import SignIn from "./pages/signIn/SignIn";
import Products from "./pages/products";
import { ProductsContext } from "./contexts/ProductsContext";
import { useState } from "react";
import Cart from "./pages/cart";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
