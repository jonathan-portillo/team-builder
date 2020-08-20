import React, { useState } from "react";

const Form = (props) => {
  console.log(props);
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  const handleChanges = (e) => {
    console.log("change", e.target.value);
    const newStateObj = { ...member, [e.target.name]: e.target.value };
    console.log("new state object", newStateObj);
    setMember(newStateObj);
  };
  const submitForm = (e) => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };
  console.log("member", member);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter New Member"
        value={member.name}
        onChange={handleChanges}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Enter Email"
        value={member.email}
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Enter Position"
        value={member.role}
        onChange={handleChanges}
      />

      <button type="submit">Add Member To List</button>
    </form>
  );
};

export default Form;
