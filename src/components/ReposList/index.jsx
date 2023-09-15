import { useEffect, useState } from "react";

function ReposList () {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/britomario/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setLoading(false)
                setRepos(resJson)
            }, 3000)
        }) 
    }, []);
    return (
        <>
        {loading && (
        <h1>Carregando...</h1>
        )}
        <ul>
            {/* {repos.map((repositorio => ())} - sem desestruturação */} 
            {repos.map(({ id, name, language, html_url }) => (
                <li key={id}>
                    <b>Nome: </b> {name} <br />
                    <b>Linguagem: </b> {language} <br />
                    <a href={html_url} target="_blank">Visitar no Github</a> <br />
                </li>

            ))}
        </ul>
        </>
    )
}

export default ReposList;