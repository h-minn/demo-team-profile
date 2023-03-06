import React from "react";
import Avatar from "./Avatar";

function Entry(props) {
  return (
    <div className="detail">
      <dt>
        <span className="profile" role="img" aria-label="Team Chikuzenni">
        <Avatar img={props.img} />
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.message}</dd>
    </div>
  );
}

export default Entry;
