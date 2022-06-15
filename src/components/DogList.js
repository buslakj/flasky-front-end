import React from "react";
import Dog from "./dog";

const DogList = () => {
  return (
    <ul>
      <h2>Dog count: 3</h2>
      <Dog></Dog>
      {Dog.map((dog) => {
        return (
          <Dog
            name={dog.name}
            favoriteToy={dog.favoriteToy}
            chipnumber={dog.chipnumber}
          />
        );
      })}
    </ul>
  );
};

export default DogList;
