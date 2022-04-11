import React, { useState } from "react";

function Prueba3() {
  const [mamatrix, setMamatrix] = useState();
  const board = [
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
  ];
  var matrixify = function (board, rows, cols) {
    var matrix = [];
    if (rows * cols === board.length) {
      for (var i = 0; i < board.length; i += cols) {
        matrix.push(board.slice(i, cols + i));
      }
    }
    setMamatrix(matrix);

    return console.log(mamatrix);
  };

  return (
    <div>
      <h2>Prueba3</h2>
      <h5>hi</h5>
      <button onClick={() => matrixify(board, 4, 4)}>Matriz</button>
      {mamatrix.map((x) => (
        <h2>{x}</h2>
      ))}
    </div>
  );
}

export default Prueba3;
