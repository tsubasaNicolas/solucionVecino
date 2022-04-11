import React from "react";

function Prueba2() {
  var matrix = listToMatrix(
    [
      "L",
      "I",
      "S",
      "T",
      "O",
      "F",
      "A",
      "T",
      "S",
      "T",
      "R",
      "S",
      "O",
      "R",
      "A",
      "Y",
    ],
    4
  );

  function listToMatrix(list, elementsPerSubArray) {
    var matrix = [],
      i,
      k;

    for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }

      matrix[k].push(list[i]);
    }

    return console.log(matrix[0][0]);
  }

  return (
    <div>
      <button>click</button>
    </div>
  );
}

export default Prueba2;
