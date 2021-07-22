import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Category from "./Components/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route exact path="/categoria/:categoryID">
            <Category />
          </Route>
        </Switch>
        <Redirect to="/productos" />
      </BrowserRouter>
    </div>
  );
}

export default App;
