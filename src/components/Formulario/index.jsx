import { useState, useEffect } from "react";

function Formulario() {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");

  //mount
  //update
  //unmount
  useEffect(() => {
    console.log("O componente iniciou");

    return () => {
      console.log("o componente finalizou");
    };
  }, []);

  function changeName({ target }) {
    setNome(target.value);
  }

  function renderResult() {
    const sum = materiaA + materiaB + materiaC;
    const media = sum / 3;

    if (media >= 7) {
      return <p>Olá {nome}, você foi aprovado</p>;
    } else {
      return <p>Olá {nome}, você não foi aprovado</p>;
    }
  }

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input type="text" placeholder="Seu nome" onChange={changeName} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={({ target }) => setMateriaB(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={({ target }) => setMateriaC(parseInt(target.value))}
      />
      {renderResult()}
    </form>
  );
}

export default Formulario;
