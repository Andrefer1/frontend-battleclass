import React, { useEffect, useState } from 'react';
import RcIf, { RcElse } from 'rc-if';
import './Batalha.css'

import akali from '../../assets/icons/akali.png';
import akame from '../../assets/icons/akame.png';
import alerquina from '../../assets/icons/alequina.png';
import allMight from '../../assets/icons/allMight.png';
import kirito from '../../assets/icons/jv.png';
import ed from '../../assets/icons/manel.png';
import gohan from '../../assets/icons/andre.png';
import patolinoMago from '../../assets/icons/patolinoMago.png';
import api from '../../service/api';



const team1 = [
    { nomePersonagem:'Akali', url: akali},
    { nomePersonagem:'Akame', url:akame},
    { nomePersonagem:'Alerquina', url:alerquina},
    { nomePersonagem:'All Might', url:allMight},
]

const team2 = [
    { nomePersonagem:'Kirito', url: kirito},
    { nomePersonagem:'Edward Elric', url:ed},
    { nomePersonagem:'Gohan', url:gohan},
    { nomePersonagem:'O Mago', url:patolinoMago},
]

export default function Batalha() {
    const [ equipe1, setEquipe1 ] = useState([])
    const [ equipe2, setEquipe2 ] = useState([])

    useEffect(() => {
        async function validar() {
            const response = await api.post('/validar/batalha')
        }
    },);
    return(
        <div className='main-container'>
            <div className='retangle1'>
                { team1.length > 0 ? (
                    <ul  className='imgs'>
                        {team1.map((integrantes,index) => (
                            <RcIf if={integrantes.url === equipe1[index]}>
                                <li>
                                    <img className='circle' src={integrantes.url} />
                                </li>
                                <RcElse>
                                    <RcIf if={integrantes.url !== equipe1[index]}>
                                        <li className='img2'>
                                            <img className='circle' src={integrantes.url} />
                                        </li>
                                    </RcIf>
                                </RcElse>
                            </RcIf>
                        ))}
                        
                    </ul>
                ): (
                    <div>Sem time</div>
                )}
                
                
            </div>
            <div className='retangle2'>
                { team2.length > 0 ? (
                        <ul  className='imgs'>
                            {team2.map((integrantes,index) => (
                                <RcIf if={integrantes.url === equipe1[index]}>
                                    <li>
                                        <img className='circle' src={integrantes.url} />
                                    </li>
                                    <RcElse>
                                        <RcIf if={integrantes.url !== equipe2[index]}>
                                            <li className='img2'>
                                                <img className='circle' src={integrantes.url} />
                                            </li>
                                        </RcIf>
                                    </RcElse>
                                </RcIf>
                            ))}
                        </ul>
                    ): (
                        <div>Sem time</div>
                    )}
            </div>
        </div>
    );
}