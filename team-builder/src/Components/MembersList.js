import React from "react";

const MembersList = (props) => {
  return (
    <div>
      {props.data.map((e) => (
        <div>
          <h1>{e.name}</h1>
          <p>Email: {e.email}</p>
          <p>Role: {e.role}</p>
        </div>
      ))}
    </div>
  );
};

export default MembersList;
