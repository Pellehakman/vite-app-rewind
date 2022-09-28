import '../../../styles/BigCard.scss'
import { Match } from '../../models/data'

interface BigCardProps{
    match: Match
}
const BigCard = ({ match }: BigCardProps) => {
    
    // const handlePlayer:  () => void = () => {
    //     console.log('you clicked', playerOne)
       
    // }

// --------------- TEAM ONE START --------------- //

// const teamOne = match.teams[0].team
// const playerOne = match.teams[0].participants[0].player1[0] 





// // --------------- TEAM TWO START --------------- //

// const teamTwo = match.teams[1].team
// const playerTwo = match.teams[1].participants[0].player1[0] 






    return (
        <section className='big-match-card-container' >
            {/* <div>
            <p>{match.matchName}</p>
            <h1>
                {teamOne}
            </h1>
            <h2 onClick={handlePlayer}>/{playerOne.name}</h2>
            <h2>/{playerOne.kills}</h2>
            <h2>/{playerOne.deaths}</h2>
                
            </div>
           
            <div>
            
            <h1>
                {teamTwo}
            </h1>
            <h2>/{playerTwo.name}</h2>
            <h2>/{playerTwo.kills}</h2>
            <h2>/{playerTwo.deaths}</h2>
                
            </div> */}
            </section>
    )
};
export default BigCard