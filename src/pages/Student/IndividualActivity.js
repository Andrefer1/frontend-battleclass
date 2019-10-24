import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RcIf from 'rc-if'
import userProfile from '../../assets/user-profile.svg';
import api from '../../service/api';

import './IndividualActivity.css';

export default function Activity({ history, match}) {
    const [ showMembers, setShowMembers ] = useState('')
    const [ atividade, setAtividade ] = useState(Object);
    const [ questoes, setQuestoes ] = useState([]); 
    const [ user, setUser ] = useState(Object);
    const [ grupos, setGrupos ] = useState([]);
    var listaAux = [];
    var letra = '';
    const alfabeto = ['a','b','c','d']

    function dropdown() {
        setShowMembers('true')
    }
    

    useEffect(() => {
        async function buscarAtividadeIndividual(id) {
            const response = await api.get('/buscar/atividade', {headers: {
                id: id
            }});
            //heros = response.data;
            setAtividade(response.data)
            setQuestoes(response.data.questoes)
        }

        async function buscarUser(){
            const response = await api.get('/buscar/userId', {headers: {
                id: match.params.idUser
            }})
            
            if (response.data != null){
                setUser(response.data);
            }

        }

        async function buscarTeams(){
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

            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a className='' onClick={() => (history.push(`/${match.params.idUser}/main`))}> BATTLECLASS </a>
                    </div>
                    <div className='student-data'>
                        <div className='activity-title'>
                            {atividade.titulo}
                        </div>
                        
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            [aluno]/50
                        </div>
                    </div>
                    <div className='dates'>
                        <div className='trace'>
                            Postagem: {atividade.dataPostagem}
                        </div>
                        <div className='team-points-principal'>
                            Entrega: {atividade.dataEntrega}
                        </div>
                    </div>
                </div>

                <hr id='hr' />
            </nav>

            <div className='menu'>
                <a onClick={() => (history.push(`/${match.params.idUser}/main`))}> Página Inicial </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/team/${user.grupo}`))}> Minha Equipe </a>
                <a onClick={() => (history.push(`/${match.params.idUser}/activitys-student`))}> Atividades </a>
                <div className='menu-bottom'>
                    <a onClick={() => (history.push(`/${match.params.idUser}/settings`))}> Configurações </a>
                    <a href='/contacts'> Contatos </a>
                    <a href='/about'> Sobre </a>
                </div>
            </div>

            <div className='rankings'>
                <div className='ranking-do-dia' >
                    <div className='ranking-name'>
                        <b> Ranking do Dia </b>
                    </div>
                    { grupos.length > 0 ? (
                        <ul>
                            { grupos.map(grupo => (
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
                                    <hr className='hr-ranking' />
                                </div>
                                
                            ))}
                            
                        </ul>
                    ): (
                        <div> Sem grupos </div>
                    )}
                    
                </div>
            </div>

            <div className='cards-questions'>
                { questoes.length > 0 ? (
                    <ul>
                        { questoes.map( (questao, index) => (
                            <li key={index}>
                                <div className='card-individual'>
                                    <div className='question'>
                                        <strong>{questao[index + 1].texto}</strong>
                                    </div>
                                    { questao[index + 1].alternativas.length > 0 ? (
                                        <div className='alternatives'>
                                            { questao[index + 1].alternativas.map((alternativa, index) => (
                                                <div className='individual-alternative' key={index}>
                                                    {letra = alfabeto[index]}
                                                    <div>
                                                        <input type='radio' name='radio-question' className='radio-input' />
                                                    </div>
                                                    <div>
                                                        <label for='radio-input' className='radio-input-text'> 
                                                            {alternativa[letra].texto}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                        </div>
                                    ): (
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
            <div className={'card-questions'}>
                <button onClick={() => console.log('eae')}>Publicar Atividade</button>
            </div>
            
        </div>
        
    );
}
