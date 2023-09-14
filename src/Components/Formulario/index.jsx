import { useState } from 'react';
import InputMask from 'react-input-mask';
import './formulario.css';
import axios from 'axios';

function Formulario() {


    const [cep, setCep] = useState('')
    const [cepData, setCepData] = useState(null)

    const handleCepChange = ({ target }) => {
        setCep(target.value)
    }


    const searchCep = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
            setCepData(response.data);
        } catch (error) {
            alert('Erro ao buscar CEP, verifique os dados inseridos!')
            setCepData(null)
        }
        setCep('')
    }

    return (
        <div className='main-container'>
            <div className='container-search-cep'>
                <h2>Busca CEP</h2>
                <label htmlFor='cep'>Digite um CEP<span>*</span></label>
                <InputMask
                    mask='99999-999'
                    maskChar='_'
                    type='text'
                    placeholder='000000-000'
                    value={cep}
                    onChange={handleCepChange}
                    name='cep'
                    id='cep'
                />
                <button onClick={searchCep}>Buscar</button>
            </div>
            {cepData && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Logradouro/Nome</th>
                                <th>Bairro/Distrito</th>
                                <th>Localidade/UF</th>
                                <th>CEP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{cepData.logradouro}</td>
                                <td>{cepData.bairro}</td>
                                <td>{cepData.localidade}/{cepData.uf}</td>
                                <td>{cepData.cep}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default Formulario;