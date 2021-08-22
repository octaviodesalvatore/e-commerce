import React, { useState } from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CustomProvider from "./Components/CustomProvider";

import { GlobalStytles } from "./Components/themes";
import { lightTheme, darkTheme } from "./Components/themes";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <CustomProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStytles />
            <NavBar themeToggler={themeToggler} theme={theme} />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/productos/:categoryID">
                <ItemListContainer />
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
              <Redirect to="/productos/todo" />
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </CustomProvider>
    </div>
  );
}

export default App;
