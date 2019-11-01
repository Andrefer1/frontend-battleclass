import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg';
import api from '../../service/api';

import './IndividualActivity.css';

export default function Activity({ history, match}) {
    const [ atividade, setAtividade ] = useState(Object);
    const [ questoes, setQuestoes ] = useState([]); 
    const [ user, setUser ] = useState(Object);
    const [ grupos, setGrupos ] = useState([]);
    const [ questao1, setQuestao1 ] = useState(Object);
    const [ questao2, setQuestao2 ] = useState(Object);
    const [ questao3, setQuestao3 ] = useState(Object);
    const [ questao4, setQuestao4 ] = useState(Object);
    const [ questao5, setQuestao5 ] = useState(Object);
    var listaVar =[questao1, questao2, questao3, questao4, questao5]
    var resposta = []
    var listaAux = [];
    var letra = '';
    const alfabeto = ['a', 'b', 'c', 'd']
    const [icon] = useState(Object)


    function postarAtividade() {
        console.log('POSTADO')
    }

    function verificarVariavel(index, valor) {
        console.log(valor)
        if(listaVar[index] == 0) {
            setQuestao1({1:valor})
            resposta.push({1:valor})
        } else if(listaVar[index] == 1){
            setQuestao2({2:valor})
            resposta.push({2:valor})
        } else if(listaVar[index] == 2){
            setQuestao3({3:valor})
            resposta.push({3:valor})
        } else if(listaVar[index] == 3){
            setQuestao4({4:valor})
            resposta.push({4:valor})
        } else if(listaVar[index] == 4){
            setQuestao5({5:valor})
            resposta.push({5:valor})
        }

        console.log(resposta)
    }

    useEffect(() => {
        async function buscarAtividadeIndividual(id) {
            const response = await api.get('/buscar/atividade', {
                headers: {
                    id: id
                }
            });
            //heros = response.data;
            setAtividade(response.data)
            setQuestoes(response.data.questoes)
        }

        async function buscarUser() {
            const response = await api.get('/buscar/userId', {
                headers: {
                    id: match.params.idUser
                }
            })

            if (response.data != null) {
                setUser(response.data);
            }

        }

        async function buscarTeams() {
            const response = await api.get('/buscar/grupo/all')

            listaAux = response.data
            listaAux.sort(function (a, b) {
                return b.pontuacao - a.pontuacao
            })

            setGrupos(listaAux);
        }

        buscarTeams();
        buscarUser();
        buscarAtividadeIndividual(match.params.idAtividade);
    }, [])

    return (
        <div className='individual-activity'>

            <div className='student-data'>
                <div className='student-name'>
                    {user.nome}
                </div>
                <div className='trace'>
                    -
            </div>
                <div className='student-points'>
                    {user.pontuacao} PONTOS
            </div>

            </div>
            <div className='div-img-user'>
                <img src={icon.url} className='img-user' alt='Ícone do usuário' />
            </div>

            <div className='menu'>
                <div className='menu-item sitename' onClick={() => (history.push(`/${user._id}/main`))}>BattleClass</div>
                <div className='menu-item' onClick={() => (history.push(`/${match.params.idUser}/main`))}> Página Inicial </div>
                <div className='menu-item' onClick={() => (history.push(`/${match.params.idUser}/team/${user.grupo}`))}> Minha Equipe </div>
                <div className='menu-item selected' onClick={() => (history.push(`/${match.params.idUser}/activitys-student`))}> Atividades </div>
                <div className='menu-bottom'>
                    <div className='menu-item disabled' > Configurações </div> {/*onClick={() => (history.push(`/${match.params.idUser}/settings`))}*/}
                    <div className='menu-item disabled' > Contatos </div> {/*href='/contacts'*/}
                    <div className='menu-item disabled' > Sobre </div> {/*href='/about'*/}
                </div>
            </div>

            <div className='ranking'>
                <div className='str-ranking'>
                    <b> Ranking </b>
                </div>
                {grupos.length > 0 ? (
                    <ul>
                        {grupos.map(grupo => (
                            <div key={grupo._id}>
                                <li key={grupo._id}>
                                    <div className='team-ranking'>
                                        <div className='team-profile'>
                                            <img src={userProfile} alt='Imagem do time' />
                                        </div>
                                        <div className='team-name'>
                                            {grupo.nome}
                                        </div>
                                        <div className='team-points'>
                                            {grupo.pontuacao}
                                        </div>
                                    </div>
                                </li>
                            </div>

                        ))}

                    </ul>
                ) : (
                        <div> Sem grupos </div>
                    )}

            </div>

            <div className='content2'>
                <div className='cards-questions'>
                    {questoes.length > 0 ? (
                        <ul>
                            {questoes.map((questao, index) => (
                                <li key={index}>
                                    <div className='card-individual'>
                                        <div className='str-question'>
                                            <strong> Questão {index + 1}</strong>
                                        </div>
                                        <div className='activity-context'>
                                            {questao[index + 1].texto}
                                        </div>
                                        {questao[index + 1].alternativas.length > 0 ? (
                                            <div className='alternatives'>
                                                { questao[index + 1].alternativas.map((alternativa, index) => (
                                                    <div className='individual-alternative' key={index} value={listaVar[index]} onChange={e => verificarVariavel(index, e.target.value)}>
                                                        <div className='div-radio-input'>
                                                            <input type='radio' name='radio-question' value={alfabeto[index]} className='radio-input' />
                                                        </div>
                                                        <div className='alphabet-letter'>
                                                            {letra = alfabeto[index]})
                                                        </div>
                                                        <div className='div-alternative-text'>
                                                            <label for='radio-input' className='alternative-text' > 
                                                                {alternativa[letra].texto} 
                                                                {/*
                                                                iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                                                non proident, sunt in culpa qui officia des
                                                                */}
                                                            </label>
                                                        </div>
                                                    </div>

                                                ))}

                                            </div>
                                        ) : (
                                                <div> Sem questões </div>
                                            )}

                                    </div>
                                </li>
                            ))}

                        </ul>
                    ) : (
                            <div> Sem questões </div>
                        )}

                </div>

                <div className='div-button'>
                    <button className='btn btn-primary button' onClick={postarAtividade}>
                        Publicar
                    </button>
                </div>
            </div>
        </div>

    );
}
