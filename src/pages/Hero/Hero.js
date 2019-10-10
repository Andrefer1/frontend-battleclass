import React, { useEffect, useState } from 'react';
import md5 from 'js-md5';
import './Hero.css';

export default function Hero(){

    const [ state, setState ] = useState([]);
    const [ req, setReq ] = useState('');

    const PUBLIC_KEY = 'db77255fa55d127ed2993fe7a6641896'
    const PRIVATE_KEY = '574229772ebb009c395684a0c2f401b6502e5d5c'


    useEffect(() => {
        async function loadUsers(){
            const timestamp = Number(new Date())
            const hash = md5.create()
            hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

            const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
            const responseJson = await response.json()
            setReq("ok")
            setState(responseJson.data.results)
        }
        if (req !== "ok"){
            loadUsers();
        } else {
            return state;
        }
        
    })


    return(
        <div className='main-container'>
           
            <ul>
                {state.map(user => (
                    <li key={user.id}>
                        <img src={user.thumbnail.path + '.' + user.thumbnail.extension} alt={user.name} />
                        <footer>
                            <strong>{user.name}</strong>
                            <p> {user.bio} </p>
                        </footer>
                    </li>   
                ))}
                </ul>
 
     </div>
    );
}