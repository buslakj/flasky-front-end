import React from "react";

const Dog = ({ name, favoriteToy, chipNumber }) => {
  return (
    <li>
      <h3> {name} </h3>
      <span>chip #: {chipNumber}</span>
      <button>Add chip</button>
      <span>{favoriteToy}</span>
    </li>
  );
};
export default Dog;
