
import '../../styles/SmallMatchCard.scss'
import  { Match } from '../../models/data'
import { useState } from 'react';


import { matchRoutes } from 'react-router-dom';
import BigCard from '../BigCard/BigCard'


interface Props{
    match: Match
}
const SmallCard = ({ match }: Props) => {

    const [overlay, setOverlay] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(true);


const handleOverlay:  () => void = () => {
    setHide(!hide)
    setOverlay(!overlay);
   
}

return(<>

    {/* <section className="match" key={match.matchId} >
    {hide &&
        <div className='small-overlay'>
            <div className='match-date-container'>
                <p> {match.date} </p>
                <p> {match.time} </p>
            </div>
                <p> {match.matchName} </p>
                <p> {match.winner} </p>
            
        </div>
    }
    {overlay && 
        <BigCard match={match}/>
    }
    


    
    </section> */}
    <button onClick={handleOverlay}>OPEN/CLOSE</button>
       
    </>)
}

export default SmallCard