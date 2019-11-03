import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg';
import api from '../../service/api';

import './IndividualActivity.css';

export default function Activity({ history, match}) {
    const [ atividade, setAtividade ] = useState(Object);
    const [ questoes, setQuestoes ] = useState([]); 
    const [ user, setUser ] = useState(Object);
    const [ grupo, setGrupo ] = useState(Object);
    const [ grupos, setGrupos ] = useState([]);
    const [ questao1, setQuestao1 ] = useState(Object);
    const [ questao2, setQuestao2 ] = useState(Object);
    const [ questao3, setQuestao3 ] = useState(Object);
    const [ questao4, setQuestao4 ] = useState(Object);
    const [ questao5, setQuestao5 ] = useState(Object);
    const [ respostaFinal , setResposta ] = useState([]);
    const [ gabarito, setGabarito ] = useState([])
    var listaVar =[questao1, questao2, questao3, questao4, questao5]
    var resposta = respostaFinal;
    var listaAux = [];
    var letra = '';
    const alfabeto = ['a', 'b', 'c', 'd']
    const [icon, setIcon] = useState(Object)


    function postarAtividade() {
        var cont = 1;
        var nota = 0;
        var pontuacaoAluno = 0
        var ultimaPontucao = 0
        for (let g in gabarito){
            var gab = gabarito[g]
            var res = respostaFinal[g]
            if(gab[cont] === res[cont]){
                nota += 10
            }
            cont += 1
        }

        ultimaPontucao = (nota * (grupo.pontuacao/100))
        pontuacaoAluno = user.pontuacaoGeral + ultimaPontucao
    }

    function verificarVariavel(index, valor) {
        var aux = null;
        if(index == 0) {
            for (let r in resposta) {
                if(r == index) {
                    aux = resposta[r]
                }

            }
            if(aux != null) {
                resposta.splice(index, 1, {1:valor})
            } else {
                resposta.push({1:valor})
                setResposta(resposta)
            }
            
        } else if(index == 1){
            for (let r in resposta) {
                if(r == index) {
                    aux = resposta[r]
                }

            }
            if(aux != null) {
                resposta.splice(index, 1, {2:valor})
            } else {
                resposta.push({2:valor})
                setResposta(resposta)
            }
                
            
            
        } else if(index == 2){
            for (let r in resposta) {
                if(r == index) {
                    aux = resposta[r]
                }

            }
            if(aux != null) {
                resposta.splice(index, 1, {3:valor})
            } else {
                resposta.push({3:valor})
                setResposta(resposta)
            }
            
        } else if(index == 3){
            for (let r in resposta) {
                if(r == index) {
                    aux = resposta[r]
                }

            }
            if(aux != null) {
                resposta.splice(index, 1, {4:valor})
            } else {
                resposta.push({4:valor})
                setResposta(resposta)
            }
        } else if(index == 4){
            for (let r in resposta) {
                if(r == index) {
                    aux = resposta[r]
                }

            }
            if(aux != null) {
                resposta.splice(index, 1, {5:valor})
            } else {
                resposta.push({5:valor})
                setResposta(resposta)
            }
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
            setGabarito(response.data.gabarito)
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
        async function buscarTeam(){
            const response = await api.get('/buscar/grupo', {
                headers: {
                    id: user.grupo
                }
            })
            setGrupo(response.data)
        }
        
        async function buscarTeams() {
            const response = await api.get('/buscar/grupo/all')

            listaAux = response.data
            listaAux.sort(function (a, b) {
                return b.posicaoRanking - a.posicaoRanking
            })

            setGrupos(listaAux);
        }

        buscarTeam();
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
                <img src={icon.url} className='img-user' />
            </div>

            <div className='menu'>
                <a className='sitename' onClick={() => (history.push(`/${user._id}/main`))}>BattleClass</a>
                <a className='menu-item' onClick={() => (history.push(`/${match.params.idUser}/main`))}> Página Inicial </a>
                <a className='menu-item' onClick={() => (history.push(`/${match.params.idUser}/team/${user.grupo}`))}> Minha Equipe </a>
                <a className='menu-item' onClick={() => (history.push(`/${match.params.idUser}/activitys-student`))}> Atividades </a>
                <div className='menu-bottom'>
                    <a className='menu-item' onClick={() => (history.push(`/${match.params.idUser}/settings`))}> Configurações </a>
                    <a className='menu-item' href='/contacts'> Contatos </a>
                    <a className='menu-item' href='/about'> Sobre </a>
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
                <div>
                    <h4>{atividade.titulo}</h4>
                </div>
                <div>
                    {atividade.conteudo}
                </div>
                <br></br>
                <div className='cards-questions'>
                    {questoes.length > 0 ? (
                        <ul>
                            {questoes.map((questao, indexQ) => (
                                <li key={indexQ}>
                                    <form>
                                    <div className='card-individual'>
                                        <div className='str-question'>
                                            <strong> Questão {indexQ + 1}</strong>
                                        </div>
                                        <div className='activity-context'>
                                            {questao[indexQ + 1].texto}
                                        </div>
                                        {questao[indexQ + 1].alternativas.length > 0 ? (
                                            <div className='alternatives'>
                                                { questao[indexQ + 1].alternativas.map((alternativa, index) => (
                                                    <div className='individual-alternative' key={index} value={listaVar[index]} onChange={e => verificarVariavel(indexQ, e.target.value)}>
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
                                    </form>
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
