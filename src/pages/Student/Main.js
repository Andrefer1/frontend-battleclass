import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import userProfile from '../../assets/user-profile.svg'

import './Main.css';
import api from '../../service/api';

export default function MainStudent({ history, match }) {

    const [user, setUser] = useState('');
    const [ grupos, setGrupos ] = useState([])
    const [ atividades, setAtividades ] = useState([])


    useEffect(() => {
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
            setGrupos(response.data.filter(t => t._id !== match.params.idGrupo));
        }

        async function buscarAtividades(){
            const response = await api.get('/buscar/atividade/all')
            setAtividades(response.data)
        }

        buscarUser();
        buscarTeams();
        buscarAtividades();

        console.log(user)
    }, [])
    

    return (
    <div className='main-student'>
    
        <nav>
            <div className='navbar'>
                <div className='sitename'>
                    <a onClick={() => (history.push(`/${user._id}/main`))}> 
                        BATTLECLASS
                    </a>
                </div>
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
            </div>
           
            <hr id='hr' />
        </nav>

        <div className='menu'>
            <a onClick={() => (history.push(`/${user._id}/main`))}> Página Inicial </a>
            <a onClick={() => (history.push(`/${user._id}/team/${user.grupo}`))}> Minha Equipe </a>
            <a onClick={() => (history.push(`/${user._id}/activitys-student`))}> Atividades </a>
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
                { grupos.length > 0 ? (
                    <ul>
                        { grupos.map(grupo => (
                            <div>
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

        { atividades.length > 0 ? (
            <ul>
                <div className='tasks'>
                    <div className='task'>
                        { atividades.map(atividade => (
                            <a onClick={()=> (history.push(`/${match.params.idUser}/activitys-student/individual-activity/${atividade._id}`))}>
                                <li key={atividade._id}>
                                    <div className='task-content'>
                                        <div className='task-title'>
                                            <b>{atividade.titulo}</b>
                                        </div>
                                        <div className='task-description'>
                                            {atividade.conteudo}
                                        </div>
                                    </div>
                                    <div className='task-points'>
                                        <div className='task-points-notes'>
                                            <b>Nota</b>
                                        </div>
                                        <div className='task-pontuation'>
                                            50
                                        </div>
                                    </div>
                                </li>
                            </a>
                        ))}
                        
                    </div>
                </div>
            </ul>
        ) : (
            <div> Sem atividades à realizar </div>
        )}            
        

    </div>

    );
}
