export interface Match {
    matchId: number; 
    winner: string;
    matchName: string;
    playerOne: string,
    playerTwo: string   
};

export type Task = {
    id: string
    label: string
    isComplete: boolean
}


export type TaskProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>

}
