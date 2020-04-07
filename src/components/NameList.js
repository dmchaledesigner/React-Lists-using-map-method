import React from "react";

function ListTwo() {
  const Names = ["David", "Gary", "Shaun", "Stephen"];
  const namesList = Names.map(name => <h2>{name}</h2>);

  return (
    <div>
      {/* Calling by index
    =====================
    <h2>{Names[0]}</h2>
    <h2>{Names[1]}</h2>
    <h2>{Names[2]}</h2>
    <h2>{Names[3]}</h2>
    */}

      {/* Using the Map method*/}

      {/* {
        Names.map((name) => <h2>{name}</h2>)
      } */}

      {/* clean up code - assigning the array with map() to a var */}

      {namesList}
    </div>
  );
}

export default ListTwo;
