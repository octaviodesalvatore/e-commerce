import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Category from "./Components/Category";
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
            <Route exact path="/productos">
              <ItemListContainer message={"Todos nuestros productos"} />
            </Route>
            <Route exact path="/productos/item/:productID">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/categoria/:categoryID">
              <Category />
            </Route>
            <Route exatch path="/cart">
              <Cart />
            </Route>
            <Redirect to="/productos" />
          </Switch>
        </BrowserRouter>
      </CustomProvider>
    </div>
  );
}

export default App;
