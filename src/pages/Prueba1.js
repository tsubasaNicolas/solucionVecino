import React, { useState, useEffect } from "react";
let board = [
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

const dictionary = [
  "array",
  "arrays",
  "art",
  "arts",
  "bag",
  "bee",
  "bog",
  "dog",
  "fall",
  "fast",
  "fat",
  "fell",
  "fig",
  "fill",
  "fist",
  "gap",
  "hello",
  "hoop",
  "jack",
  "job",
  "jog",
  "keg",
  "kick",
  "lift",
  "lifts",
  "lire",
  "list",
  "load",
  "loaf",
  "loan",
  "loft",
  "log",
  "lost",
  "lure",
  "lust",
  "man",
  "mic",
  "mice",
  "milk",
  "opal",
  "pan",
  "pee",
  "pin",
  "polk",
  "poo",
  "pop",
  "rant",
  "rat",
  "rats",
  "rent",
  "rest",
  "rust",
  "sat",
  "soft",
  "sort",
  "soy",
  "start",
  "starts",
  "street",
  "tar",
  "tart",
  "tarts",
  "toy",
  "toys",
  "tray",
  "trays",
];
export function Prueba1() {
  const [matriz, setMatriz] = useState(board);
  const [word, setWord] = useState("");
  const [count, setCount] = useState("");
  const [dicc, setDicc] = useState(dictionary);
  board = board.sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (dicc.find((element) => element == word.toLowerCase()) == undefined) {
      console.log("palabra no encontrada");
    } else {
      alert("Palabra " + word + " encontrada. Busca una nueva palabra");

      const newDicc = dicc.filter((x) => x !== word.toLowerCase());
      console.log("newdicc " + newDicc);
      setDicc(newDicc);
      setWord("");
    }
    console.log("word " + word);
  }, [word]);

  // const Listar = matriz.map((x) => <h1>x</h1>);
  const listar = () => matriz.map((x) => console.log(x));

  const onPress2 = (y) => {
    setWord((prevCount) => prevCount + y);
    console.log(count);
  };

  return (
    <>
      <h2>prueba1</h2>
      <button
        style={{
          marginBottom: "20px",
          backgroundImage: "linear-gradient(yellow, red)",
          borderColor: "red",
        }}
        onClick={() => listar()}
      >
        click
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            background: "white",
            display: "grid",
            gridTemplateColumns: "10% 10% 10% 10%",
            gridTemplateRows: "44% 44% 44% 44%",
            columnGap: "3%",
            rowGap: "3%",
          }}
        >
          {matriz.map((x, i) => (
            <button
              style={{
                backgroundImage: "linear-gradient(#FAD15C, #F76F1F)",
                borderColor: "red",
                borderRadius: "20%",
              }}
              onClick={() => onPress2(x)}
              key={i}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <input onChange={() => alert("bien")} value={word} />
    </>
  );
}

const styles = {
  grid: {
    background: "tomato",

    display: "flex",
    flexDirection: "columns",
    //justifyContent: "wrap",
    // spaceBetween: "space-between",
    // gridTemplatColumns: "1000px",
    // gridTemplateRows: "1fr 1fr",
  },
};
