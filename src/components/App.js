import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // function onDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }
const togleDarkMode=()=>{
  setIsDarkMode(prevMode=> !prevMode)
}
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> */}
       <Header onDarkModeClick={togleDarkMode} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData} />
     
    </div>
  );
}

export default App;
