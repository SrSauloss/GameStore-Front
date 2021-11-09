import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import GlobalStyle from "./shared/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
