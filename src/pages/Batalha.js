import React from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const initialData ={
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage'},
        'task-2': { id: 'task-2', content: 'Watch my favorite show'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2']
        },
    },
    columnOrder: ['column-1']
}
class Batalha extends React.Component {
    
    state = initialData;

    onDragEnd = result => {
        //
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map(id => {
                    const column = this.state.columns[id];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
                
                    return <Column key={column.id} column={column} tasks={tasks}/>
                })}
            </DragDropContext>
            
        )
        
    };
       
}

export default Batalha;