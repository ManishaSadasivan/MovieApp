import {React,useState} from 'react';
import './Movie.css'
export default function Movie(a) {
    
    const [checkedState,setCheckedState]=useState(false);
    const display= {display: checkedState===true ?"block":"none"}
     
    return (
     
        <div className="Movie-container">

              <img id="movie" src={a.poster}  className="movieposter"/>
                <div className="moviespecs">
                 <h3 className="Moviename">{a.name}</h3>
                 <p className="Movierating">⭐{a.rating}</p>
                  </div>
              
                <p className="MovieDirector"><strong>Director:</strong>{a.director}</p>
                <div>StoryLine<input type="checkbox" id="standard-basic" onClick={(event)=>setCheckedState(event.target.checked)}/></div>
                <p className="MovieSummary" style={display}><strong>Story Line:</strong>{a.summary}</p>
               
       
        </div>
 
       
       
        

    
            
     
    )
}
