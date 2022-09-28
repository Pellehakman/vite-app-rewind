import '../styles/AddMatch.scss'
import {Match} from '../models/data'
import {useState, useEffect} from 'react'
const LOCAL_STORAGE_KEY = 'Match';

interface Props{
    match: Match  
}

function AddMatch(){
 


    const [newMatch, setNewMatch] = useState<Match>({matchName: '', winner: '', playerOne: '', playerTwo: '', matchId: 0});

   
    const handleFormInput: (e:any) => void = (e:any) => {
        const {name, value } = e.target;
        setNewMatch((prevUser: Match) => ({...prevUser, [name]: value}));   
        
    };

    const handleSubmit: (e:any) => void = (e:any) => {
        e.preventDefault()
       
        
        setNewMatch((prevUser: Match) => ({...prevUser, matchId: Math.floor(Math.random() * 1000)})); 
       
        
    };





    return (<>
        <form className='add-match-container' onClick={handleSubmit}>

                <div className="input-container">

                    <label htmlFor="matchName">Matchname</label>
                    <input type="text" id='matchName' name='matchName' required onChange={(e) => handleFormInput(e)}/>
                    
                    <select id="winner" name="winner" onChange={(e) => handleFormInput(e)}>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                    </select>

                    <label htmlFor="playerOne">Player One:</label>
                    <input type="text" id='playerOne' name='playerOne' required onChange={(e) => handleFormInput(e)}/>

                    <label htmlFor="playerTwo">Player Two</label>
                    <input type="text" id='playerTwo' name='matchNplayerTwoame' required onChange={(e) => handleFormInput(e)}/>
                    


                
                    
                </div>

            <input type="submit" />

        

        </form>
        <div>
      {newMatch.matchName}
        </div>
        </>
    )
    
  
}

export default AddMatch