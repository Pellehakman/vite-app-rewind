import { nanoid } from 'nanoid'
import { useState } from 'react'
import { Task, TaskProps } from '../../../models/data'
import '../../../styles/AddMatch.scss'

type Props = TaskProps

const AddMatch: React.FC<Props> = ({ tasks, setTasks }) => {
    
    const [newTaskLabel, setNewTaskLabel] = useState('')

    const handleFormInput: (e: any) => void = (e: any) => {
        setNewTaskLabel(e.target.value)

    }

    const handleNewTaskKeyPress: (e:any) => void = (e:any) => {
        if(e.key === 'Enter' && newTaskLabel !== '') {
                setTasks(tasks => [...tasks, { id: nanoid(), label: newTaskLabel, isComplete: false }])
                setNewTaskLabel('')
            }
    };







    return (
        <div className='add-match-container'>
            <input value={newTaskLabel} onChange={(e) => handleFormInput(e)} onKeyPress={handleNewTaskKeyPress} />
        </div>

    )
}

export default AddMatch