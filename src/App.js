import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/productos">
            <ItemListContainer message={"Todos nuestros productos"} />
          </Route>
          <Route exact path="/productos/item/:productID">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
