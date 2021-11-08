import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import GlobalStyle from "./shared/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
