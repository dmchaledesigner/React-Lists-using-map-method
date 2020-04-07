import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "David",
      age: 42,
      skill: "react"
    },

    {
      id: 2,
      name: "Gary",
      age: 38,
      skill: "react"
    },

    {
      id: 3,
      name: "Shaun",
      age: 37,
      skill: "react"
    },

    {
      id: 4,
      name: "Stephen",
      age: 33,
      skill: "react"
    }
  ];

  const personList = persons.map(person => (
    <ul clasName="personslist">
      <li>
        <h3>{person.name}</h3>
        <h4>{person.age}</h4>
        <h4 className="skill">{person.skill}</h4>
      </li>
    </ul>
  ));

  return <div>{personList}</div>;
}

export default NameList;

// STEP ONE IS THE ABOVE
// STEP TWO IS TO REMOVE THE WHOLE <UL> AND PLACE IT INSIDE ANOTHER COMPONENT
// CALLED PERSON THEN USING PROPS, ADD THE PERSON COMPOENNT TO THE ABOVE MAP.
