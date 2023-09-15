import Perfil from "./components/Perfil";
import Formulario from "./Components/Formulario";
import { useState } from "react";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  return (
    <>
      <Perfil nome="Mario Brito" endereco="https://github.com/britomario.png" />
      <ReposList />
      {/* {formularioVisivel && (
        <Formulario />
      )}
      <button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}>toggle form</button> */}
    </>
  )
}

export default App;