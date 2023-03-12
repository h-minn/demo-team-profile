import React from "react";
import Entry from "./Entry";
import member from "../member";

function App() {
  return (
    <div>
      <h1>
        <span>chikuzenni</span>
      </h1>
      <dl className="member">{member.map(member =>
        <Entry
          key={member.id}
          img={member.imgURL}
          name={member.name}
          message={member.message}
        />
      )}</dl>
    </div>
  );
}

export default App;
