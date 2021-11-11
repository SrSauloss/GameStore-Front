import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import GlobalStyle from "./shared/GlobalStyle";
import SignIn from "./pages/signIn/SignIn";
import Products from "./pages/products";

function App() {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
