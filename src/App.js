import React from "react";
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message={"Bienvenidos"} />
      <ItemCount />
    </div>
  );
}

export default App;
