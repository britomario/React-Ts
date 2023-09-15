import  './perfil.css';

function Perfil ({ nome, endereco }) {

    return (
        <>
            <img src={endereco} className='perfil-avatar'/>
            <h3 className='perfil-titulo'>{nome}</h3>
        </>
    )
}

export default Perfil;