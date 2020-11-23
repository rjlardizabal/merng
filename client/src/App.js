import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { setContext } from "apollo-link-context";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import MenuBar from "./components/MenuBar";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
