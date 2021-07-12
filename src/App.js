import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message={"Bienvenidos a SkinHub"} />
    </div>
  );
}

export default App;
