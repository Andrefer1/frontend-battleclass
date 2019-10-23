import React, { useState, useEffect } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './PrepararBatalha.css';
import api from '../../service/api'



const Container = styled.div`
    display: flex;
    justify-content: center;
`
var lista = [];

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: null, _id: null},
        'task-2': { id: 'task-2', content: null, _id: null},
        'task-3': { id: 'task-3', content: null, _id: null}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Personagens',
            taskIds: ['task-1', 'task-2', 'task-3']
        },
        'column-2':{
            id: 'column-2',
            title: 'Batalha',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2']
}




export default function PrepararBatalha({ history, match }) {
    
    const [ state, setState ] = useState(initialData);
    const [ grupo, setGrupo ] = useState(Object);
    const [ integrantes, setIntegrantes ] = useState([]);
    const [ icons, setIcons ] = useState([]);
    const listaP = [];
    var listaIcon = [];
    var tasks = {};
    const taskIds = []
    

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        if(start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
    
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
    
            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
    
            inicarBatalha(newColumn.taskIds, newColumn.id)
            setState(newState)
            return;
        
        };

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);

        const newStart = {
            ...start,
            taskIds: startTaskIds,
        }

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            },
        }

        inicarBatalha(finishTaskIds, newFinish.id)
        setState(newState)

    }

    useEffect(() => {
        async function buscarTeam(){
            const response = await api.get('/buscar/grupo', {headers: {
                id: match.params.idGrupo
            }})

            for (let u in response.data.integrantes) {
                buscarIntegrantes(response.data.integrantes[u])
            }
            //console.log(response.data)
            setGrupo(response.data)
        }
        
        async function buscarIntegrantes(id){
            const response = await api.get('/buscar/userId', {headers: {
                id:id
            }})

            await buscarIcon(response.data.icon)

            listaP.push(response.data)
            setIntegrantes(listaP)

        }

        async function buscarIcon(id) {
            const response = await api.get('/buscar/icon', {headers: {
                id: id
            }})

            await listaIcon.push(response.data);

            tasks[response.data.nomePersonagem] = {
                id:response.data.nomePersonagem,
                content: response.data.url
            }

            taskIds.push(response.data.nomePersonagem)

            console.log(tasks)
            console.log(state)
            

            
            setIcons(listaIcon);
            ajustarTask();
            
        }

        function ajustarTask() {
            const newState = {
                ...state,
                tasks,
                columns: {
                    ...state.columns,
                    'column-1':{
                        ...state.columns['column-1'],
                        taskIds: taskIds
                    }
                }
            }
            console.log(newState)
            setState(newState);
        }
        
        buscarTeam();

    }, [])

    function inicarBatalha(listaIcons, id){
        if (id == 'column-2'){
            lista = listaIcons;
        }
        
        
    }
    
    async function confirmaBatalha() {
        const equipe1 = { 
            idEquipe: match.params.idGrupo,
            posicoes: lista,
            verificado: []
        }

        const equipe2 = {
            idEquipe: match.params.idEnemy,
            posicoes: [],
            verificado: []
        }

        const response = await api.post('/preparar/batalha', {
            equipe1: equipe1,
            equipe2: equipe2
        })

        console.log(response.data)
    }
    

    return (
        <div className='team'>
            <nav>
                <div className='navbar'>
                    <div className='sitename'>
                        <a href='/main'>
                            BATTLECLASS
                        </a>
                    </div>
                    <div className='student-data'>
                        <div className='team-name-principal'>
                            {grupo.nome}
                        </div>
                        <div className='trace'>
                            -
                        </div>
                        <div className='team-points-principal'>
                            {grupo.pontuacao} PONTOS
                    </div>
                    </div>
                </div>

                <hr id='hr' />
            </nav>

            <div className='main-container'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Container>
                        {state.columnOrder.map(id => {
                            const column = state.columns[id];
                            const tasks = column.taskIds.map(taskId => state.tasks[taskId])

                            return <Column key={column.id} column={column} tasks={tasks}/>
                        })}
                    </Container>
                    
                </DragDropContext>
                <button onClick={confirmaBatalha}> BATALHAR! </button>
            </div>
            
        </div>
        
    )
    
};
       


