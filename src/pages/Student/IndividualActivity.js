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
        buscarAtividadeIndividual(match.params.idAtividade);
    }, [])

    return (
        <div className='individual-activity'>

            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a href='/main'>
                            BATTLECLASS
                        </a>
                    </div>
                    <div className='student-data'>
                        <div className='activity-title'>
                            {atividade.titulo}
                        </div>
                        
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            [Nota]
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
                <a href='/main'> Página Inicial </a>
                <a href='/team'> Minha Equipe </a>
                <a href='/activitys-student'> Atividades </a>
                <div className='menu-bottom'>
                    <a href='/settings'> Configurações </a>
                    <a href='/contacts'> Contatos </a>
                    <a href='/about'> Sobre </a>
                </div>
            </div>

            <div className='rankings'>
                <div className='ranking-do-dia' >
                    <div className='ranking-name'>
                        <b> Ranking do Dia </b>
                    </div>
                    <ul>
                        <li>
                            <div className='team-ranking' onClick={dropdown}>
                                <div className='team-profile'>
                                    <img src={userProfile} alt='Imagem do time' />
                                </div>
                                <div className='team-name'>
                                    Bonde do Tigrãaaaaao
                                </div>
                                <div className='team-points'>
                                    75
                                </div>
                            </div>
                            <RcIf if={showMembers === "true"}>
                                teste
                            </RcIf>
                        </li>
                        <hr id='hr-ranking' />
                        <li>
                            <div className='team-ranking'>
                                <div className='team-profile'>
                                    <img src={userProfile} alt='Imagem do time' />
                                </div>
                                <div className='team-name'>
                                    Equipe 2
                            </div>
                                <div className='team-points'>
                                    60
                            </div>
                            </div>
                        </li>
                        <hr id='hr-ranking' />
                        <li>
                            <div className='team-ranking'>
                                <div className='team-profile'>
                                    <img src={userProfile} alt='Imagem do time' />
                                </div>
                                <div className='team-name'>
                                    Equipe 3
                            </div>
                                <div className='team-points'>
                                    57
                            </div>
                            </div>
                        </li>
                        <hr id='hr-ranking' />
                    </ul>
                </div>
            </div>

            <div className='cards-questions'>
                { questoes.length > 0 ? (
                    <ul>
                        { questoes.map( (questao, index) => (
                            
                            <li>
                                <div className='card-individual'>
                                    <div className='question'>
                                        <strong>{questao[index + 1].texto}</strong>
                                    </div>
                                    { questao[index + 1].alternativas.length > 0 ? (
                                        <div className='alternatives'>
                                            { questao[index + 1].alternativas.map((alternativa, index) => (
                                                <div className='alternative' key={index}>
                                                    {letra = alfabeto[index]}
                                                    {console.log(alfabeto[index])}
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
        </div>
    );
}
