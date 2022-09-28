
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

return(

    <section className="match" key={match.matchId} >
    {hide &&
        <div className='small-overlay'>
            <div className='match-date-container'>
               
            </div>
               
            
        </div>
    }
    {overlay && 
        <BigCard match={match}/>
    }
    


    
    </section>
    
       
   )
}

export default SmallCard