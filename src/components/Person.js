import React from "react";

function Person(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
      <h4 className="skill">{props.skill}</h4>
    </React.Fragment>
  );
}

export default Person;
