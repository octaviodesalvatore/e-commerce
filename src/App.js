import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message={"Bienvenidos a SkinHub"} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
