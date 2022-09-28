
import '../../styles/DisplayMatchList.scss'
import SmallCard from './SmallCard'


import { useState, useEffect } from 'react'
import AddMatch from './AddMatch/AddMatch'
import jsonData from '../../data/data.json'
import {Match, Task, TaskProps} from '../../models/data'
import { nanoid } from 'nanoid'



type Props = TaskProps


function DisplayMatchList(){

    const [tasks, setTasks] = useState<Task[]>([])
    const TaskProps = {tasks, setTasks}
    const [newTaskLabel, setNewTaskLabel] = useState('')
    console.log(newTaskLabel)
 


const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id))


}

const [overlay, setOverlay] = useState<boolean>(false);

    const handleAddMatch:  () => void = () => {
        setOverlay(!overlay);
    }

    
return(
        <div className='matchlist-container'>
            <section className='matches-container'>
                <div className='header-container'>
                    <header>MATCHES</header>
                    <button onClick={handleAddMatch} className='add-btn'>ADD MATCH</button>
                </div>
                {overlay && <AddMatch {...TaskProps}  />}

           

               {tasks.map((task) => (
                <div key={task.id}>
            
              
            
           
            {task.label}
            
            <button onClick={handleTaskDeleteClick(task)}>RADERA</button>
              
          </div>
        ))}

                
            </section>
            
            <section className='stats-container'>
                <header className='alltime-header'>ALL TIME</header>
                <div>PLAYER</div>
            </section>
        </div>
    )
}

export default DisplayMatchList