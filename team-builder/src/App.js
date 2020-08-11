import React, { useState } from "react";
import "./App.css";
import members from "./members";
import Form from "./Components/Form";
import MembersList from "./Components/MembersList";

function App() {
  const [member, setMember] = useState(members);
  console.log(members);

  const addNewMember = (e) => {
    setMember([...member, { ...e, id: Date.now() }]);
  };
  return (
    <div className="App">
      <header>
        <h1>Members List</h1>
      </header>
      <div>
        <Form addNewMember={addNewMember} />
        <MembersList member={member} />
      </div>
    </div>
  );
}

export default App;
