import React, { useEffect, useState } from 'react';
import RcIf, { RcElse } from 'rc-if';
import './Batalha.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    { nomePersonagem:'Kirito', url: kirito, id:"5daf91e336f3b64848f0f635", vida:50},
    { nomePersonagem:'Edward Elric', url:ed, id:"5daf91e436f3b64848f0f636", vida:40},
    { nomePersonagem:'Gohan', url:gohan, id:"5daf91e436f3b64848f0f637", vida:30},
    { nomePersonagem:'O Mago', url:patolinoMago, id:"5daf91e436f3b64848f0f638", vida:60},
]

const team2 = [
    { nomePersonagem:'Akali', url: akali, id:"5daf91de36f3b64848f0f618", vida:55},
    { nomePersonagem:'Akame', url:akame, id:"5daf91de36f3b64848f0f619", vida:45},
    { nomePersonagem:'Alerquina', url:alerquina, id:"5daf91df36f3b64848f0f61a", vida:35},
    { nomePersonagem:'All Might', url:allMight, id:"5daf91df36f3b64848f0f61b",vida:65},
]
export default function Batalha() {
    const [ equipe1, setEquipe1 ] = useState([])
    const [ equipe2, setEquipe2 ] = useState([])
    const listaVencedores = []

    function exibirVencedores() {
        var t1 = 0, t2 = 0
        for (let v in listaVencedores) {
            if (listaVencedores[v].vencedor == 'team1'){
                t1 += 1
            } else if (listaVencedores[v].vencedor == 'team2') {
                t2 +=1 
            }
        }
        console.log(t1)
        console.log(t2)
        if (t1 > t2) {
            console.log('team1 é o vencedor')
        } else if ( t2 > t1 ){
            console.log('team2 é o vencedor')
        } else {
            console.log('EMPATE')
        }
    }


/*
    const [currentCount, setCount] = useState(10);
    const timer = () => setCount(currentCount - 1);
    useEffect(() => {
        if (currentCount <= 0) {
            return;
        }
        const id = setInterval(timer, 1000);
        console.log(currentCount)
        return () => clearInterval(id);
    }, [currentCount]);
*/
    useEffect(() => {
        function batalha() {
            for (let e in team1) {
                if(team1[e].vida > team2[e].vida) {
                    const duelo = {
                        time1: team1[e],
                        time2: team2[e],
                        vencedor: 'team1'
                    }

                    listaVencedores.push(duelo)
                } else if (team1[e].vida < team2[e].vida) {
                    const duelo = {
                        time1: team1[e],
                        time2: team2[e],
                        vencedor: 'team2'
                    }
                    listaVencedores.push(duelo)
                } else {
                    const duelo = {
                        time1: team1[e],
                        time2: team2[e],
                        vencedor: null
                    }
                    listaVencedores.push(duelo)
                }
            }
        }
        batalha();
        console.log(listaVencedores)
    }, [])
    return(
        <div className='main-container'>
            <div className='retangle1'>
                { team1.length > 0 ? (
                    <ul  className='imgs'>
                        {team1.map((integrantes,index) => (
                            <li>
                                <img className='circle' src={integrantes.url} />
                            </li>
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
                                <li>
                                    <img className='circle' src={integrantes.url} />
                                    <p>50</p>
                                </li>
                            ))}
                        </ul>
                    ): (
                        <div>Sem time</div>
                    )}
            </div>
            <div>
                <button onClick={exibirVencedores}> EXIBIR VENCEDOR !</button>
            </div>
        </div>
    );
}