import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

function ReposList({ nomeUsuario }) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setLoading(false)
                    setRepos(resJson)
                }, 3000)
            })
    }, [nomeUsuario]);
    return (
        <div className="container">
            {loading ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map((repositorio => ())} - sem desestruturação */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome: </b> {name} <br />
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b>
                                {language}
                            </div>
                            <a className={styles.itemLink} href={html_url} target="_blank" rel="noreferrer">Visitar no Github</a>
                        </li>

                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;