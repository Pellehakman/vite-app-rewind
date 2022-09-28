
import '../../styles/DisplayMatchList.scss'
import SmallCard from './SmallCard'


import { useState, useEffect } from 'react'
import AddMatch from '../AddMatch'
import jsonData from '../../data/data.json'
import {Match} from '../../models/data'




interface Props{
    match: Match
    
}



function DisplayMatchList(){
    const [tasks, setTasks] = useState([])

   


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
               
                {overlay && <AddMatch />}
                {/*{matches.map(match => ( <SmallCard key={match.matchId} match={match} /> ))} */}

                
            </section>
            
            <section className='stats-container'>
                <header className='alltime-header'>ALL TIME</header>
                <div>PLAYER</div>
            </section>
        </div>
    )
}

export default DisplayMatchList