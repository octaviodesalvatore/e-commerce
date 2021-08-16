import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import CustomProvider from "./Components/CustomProvider";

function App() {
  return (
    <div className="App">
      <CustomProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/productos/:categoryID">
              <ItemListContainer message={"Todos nuestros productos"} />
            </Route>
            <Route exact path="/productos/item/:productID">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/Order">
              <Order />
            </Route>
            <Redirect to="/productos" />
          </Switch>
        </BrowserRouter>
      </CustomProvider>
    </div>
  );
}

export default App;
