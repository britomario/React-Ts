import Perfil from "./components/Perfil";
import { useState } from "react";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
    <div className="container">
      <h2>Insira o nome de usuário do GitHub para pesquisar</h2>
      <input placeholder="nomeusuario" className="input-search" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App;