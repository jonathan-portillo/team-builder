import React, { useState } from "react";
import "./App.css";
import members from "./members";
import Form from "./Components/Form";
import MembersList from "./Components/MembersList";

function App() {
  const [member, setMember] = useState(members);
  console.log(members);

  return (
    <div className="App">
      <header className="App-header">
        <Form data={member} />
        <MembersList data={member} />
      </header>
    </div>
  );
}

export default App;
