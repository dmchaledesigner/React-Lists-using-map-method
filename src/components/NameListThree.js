import React from "react";
import Person from "./Person";

function NameListThree() {
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
    <Person
      name={person.name}
      age={person.age}
      skill={person.skill}
      key={person.index}
    />
  ));

  return <div>{personList}</div>;
}

export default NameListThree;

// STEP ONE IS THE ABOVE
// STEP TWO IS TO REMOVE THE WHOLE <UL> AND PLACE IT INSIDE ANOTHER COMPONENT
// CALLED PERSON THEN USING PROPS, ADD THE PERSON COMPOENNT TO THE ABOVE MAP.
