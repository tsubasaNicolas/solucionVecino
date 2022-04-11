import React, { useEffect, useRef, useState } from "react";

function Prueba4() {
  const [first, setFirst] = useState();
  const [vecinos2, setVecinos2] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    setFirst(matrix);
  }, []);

  var matrix = [
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

  var i, j, t;
  var positionarray1 = 0;
  var array2 = new Array(4);

  for (t = 0; t < 4; t++) {
    array2[t] = new Array(3);
  }

  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      //    array2[i][j] = matrix[i * 3 + j]; //here was the error
      array2[i][j] = matrix.sort(() => Math.random() - 0.5)[i * 4 + j];
    }

    positionarray1 = positionarray1 + 1; //I do this to know which value we are taking
  }

  var result2 = [];

  // console.log(array2);
  const itemEls = useRef(new Array());

  function getNeighbours(col, row) {
    var w = 4;

    var start = (row > 0 ? row * w - w : row * w) + (col > 0 ? col - 1 : col);
    var rowSpan = ((row > 0 ? 2 : 1) + (row < w - 1 ? 1 : 0)) * w;
    var colSpan = (col > 0 ? 2 : 1) + (col < w - 1 ? 1 : 0);

    var center = col + row * w;
    var result = [];

    var vecinos = [];

    // setBloquear(true);

    for (var r = start; r < start + rowSpan; r += w)
      for (var i = r; i < r + colSpan; i++) vecinos.push(itemEls.current[i]);
    // console.log(vecinos);

    if (!(i === center)) result.push(matrix[i]);

    console.log("vecinos ", vecinos);
    console.log("medio");

    itemEls.current.filter((el) => el != null && i < 16);
    console.log("itemEls", itemEls);
    result2 = itemEls.current.filter((el) => !vecinos.includes(el)); // limpio los null
    // aparecen datos  null //  console.log("result2", result2);
    var vecinosbloqueados = result2.filter((el, i) => el != null && i < 16);

    console.log("vecinosbloqueados", vecinosbloqueados);

    vecinos.map((x) => {
      if (x.style.backgroundColor !== "green") {
        x.disabled = false;
      } else {
        x.disabled = true;
      }
    });

    vecinosbloqueados.map((x) => (x.disabled = true));

    return console.log(result);
  }

  return (
    <div>
      <h3>Prueba4</h3>
      <button onClick={() => console.log(array2)}>MATRIX</button>

      {array2.map((x, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: 2,
          }}
        >
          {array2[i].map((y, j) => (
            <button
              key={j}
              ref={(element) => itemEls.current.push(element)}
              disabled={false}
              style={{
                backgroundColor: "lightskyblue",
                width: 80,
                height: 80,
                margin: 5,
              }}
              onClick={(e) => {
                e.target.style.backgroundColor = "green";
                e.target.style.color = "blue";
                e.target.disabled = true;
                //  e.style.disabled = true;
                // setColor();

                // e.target.style.disabled = "true";

                getNeighbours(j, i);

                //  console.log([i, j]);
                //console.log((e.target.style.backgroundColor = "green"));
              }}
            >
              {y}
            </button>
          ))}
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default Prueba4;
