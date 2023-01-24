import "./App.css";
import { Home, Detail, Form, Landing } from "./views/index";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/" component={Landing} />

      <Route path="/Home" render={() => <Home />} />

      <Route path="/Detail" render={() => <Detail />} />

      <Route path="/Form" render={() => <Form />} />
    </div>
  );
}

export default App;
