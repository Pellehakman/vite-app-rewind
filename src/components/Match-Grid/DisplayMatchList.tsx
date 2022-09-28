
import '../../styles/DisplayMatchList.scss'
import SmallCard from './SmallCard'


import { useState, useEffect } from 'react'
import AddMatch from '../AddMatch'
import jsonData from '../../data/data.json'



console.log(jsonData)



export default function DisplayMatchList(){
   
    const LOCAL_STORAGE_KEY = 'matches';


    const [tasks, setTasks] = useState([]);


    function loadSavedTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(saved) {
          setTasks(JSON.parse(saved));
        }
        console.log(saved)
      }
    
    
    function setSavedMatches(){
        if (localStorage.length > 0){
        }else{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonData));
        }
    }

    
    
    useEffect(() => {
        loadSavedTasks();
      }, [])









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