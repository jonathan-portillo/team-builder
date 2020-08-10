import React, { useState } from "react";
import "./App.css";
import members from "./members";

function App() {
  const [data, setData] = useState(members);
  console.log(useState(members));

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
      </header>
    </div>
  );
}

export default App;
