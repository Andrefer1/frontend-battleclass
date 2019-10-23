import React, { useState } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './Batalha.css';
import kirito from '../../assets/icons/jv.png';
import ed from '../../assets/icons/manel.png';
import gohan from '../../assets/icons/andre.png';


const Container = styled.div`
    display: flex;
    justify-content: center;
`
var lista = [];

const initialData ={
    tasks: {
        'task-1': { id: 'task-1', content: kirito},
        'task-2': { id: 'task-2', content: ed},
        'task-3': { id: 'task-3', content: gohan}
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


function inicarBatalha(listaIcons, id){
    if (id == 'column-2'){
        console.log("lista: " + listaIcons)
        lista = listaIcons;
    }
    
    console.log("id: " + id)
}

function confirmaBatalha() {
    console.log(lista)
}

class Batalha extends React.Component {
    
    state = initialData;

    
    

    onDragEnd = result => {
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

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if(start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
    
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
    
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };
    
            inicarBatalha(newColumn.taskIds, newColumn.id)
            this.setState(newState)
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
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            },
        }

        inicarBatalha(finishTaskIds, newFinish.id)
        this.setState(newState)
    }

    render() {
        return (
            <div className='battle'>

                <nav>
                    <div className='navbar'>
                        <div className='sitename'>
                            <a href='/main'>
                                BATTLECLASS
                            </a>
                        </div>
                        <div className='student-data'>
                            <div className='team-name-principal'>
                                Bonde do Tigrãaaaaao
                            </div>
                            <div className='trace'>
                                -
                            </div>
                            <div className='team-points-principal'>
                                75 PONTOS
                        </div>
                        </div>
                    </div>

                    <hr id='hr' />
                </nav>

                <div className='container-battle'>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Container>
                            {this.state.columnOrder.map(id => {
                                const column = this.state.columns[id];
                                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

                                return <Column key={column.id} column={column} tasks={tasks}/>
                            })}
                        </Container>
                        
                    </DragDropContext>
                    <button className='btn btn-primary battle-button' onClick={confirmaBatalha}> BATALHAR! </button>
                </div>
                
            </div>
            
        )
        
    };
       
}

export default Batalha;