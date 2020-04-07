import React from "react";

function ListOne() {
  const array1 = [1, 4, 7, 16];
  const map1 = array1.map(item => item * 2);

  return <div>{map1}</div>;
}

export default ListOne;
