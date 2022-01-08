
import {React,useState} from 'react'
import { TextField,Button} from '@mui/material';
import { teal } from '@mui/material/colors';
import"./AddNewMovie.css"
import Movie from "./Movie.js"
import './Movie.css'
export default function AddNewMovie() {

   const movie= [
        {
          name: "Thupakki",
          poster: "https://flxt.tmsimg.com/assets/p9561344_p_v10_ab.jpg",
          rating: "4.5",
          director: " A.R.Murugadoss",
          summary:"In a bomb blast, an army officer apprehends a sleeper agent who confesses that more bomb attacks are planned around the city; the officer impedes the subsequent blasts and devices a plan to capture the mastermind behind these attacks."
        },
        {
          name: "spiderman",
          poster:
            "https://media.vanityfair.com/photos/592592596736887ada186bcd/master/w_1600%2Cc_limit/spider-man-homecoming-SMH_DOM_Online_FNL_1SHT_3DRD3DIMX_AOJ_300dpi_01_rgb.jpg",
          rating: "4.9",
          director: " Jon Watt",
          summary:"Spider-Man centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: With great power comes great responsibility."
        },
        {
          name: "Red Notice",
          poster:
            "https://xl.movieposterdb.com/21_11/2021/7991608/xl_7991608_9cc62c28.jpg",
          rating: "4",
          
          director: "Steve Jablonsky",
          summary:"In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief."
        },
        {
          name: "Karnan",
          poster:
            "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/7/28/original/karnan.jpg",
          rating: "3.5",
          
          director: "Mari Selvaraj",
          summary:"A small village in Tamil Nadu is inhabited by people belonging to a lower caste. Karnan, a young man, is revolted by the inhuman treatment given to his villagers and fights for their rights."
          
        },
        {
          name: "Dear zindagi",
          poster:
            "https://image.songsuno.com/movie-images/original/movie/dear-zindagi/dear-zindagi-poster-shah-rukh-khan-alia-bhatt-image.jpg",
          rating: "4.5",
          director: "Gauri Shinde",
          summary:"After a series of career and relationship downturns, Kaira begins suffering from insomnia. She contacts Dr Jehangir Khan, a psychologist, who uses unconventional methods to treat her."
        }
      ];

      const [movieList,setmovieList]=useState([...movie])

    const[name,setName]=useState("");
    const[poster,setPoster]=useState("");
    const[rating,setRating]=useState("");
    const[director,setDirector]=useState("");
    const[summary,setSummary]=useState("");


    return (
        <div >
    <header className="header">Add Movie to the list</header>
<ul className="AddNewMovie">

<li className="ListItem"><TextField id="standard-basic"  label="MovieName" variant="standard" value={name}onChange={(event)=>{setName(event.target.value)}}/></li>
<li className="ListItem"><TextField id="standard-basic"  label="Poster" variant="standard" value={poster} onChange={(event)=>{setPoster(event.target.value)}}/></li>
<li className="ListItem"><TextField id="standard-basic" label="Rating" variant="standard" value={rating}onChange={(event)=>{setRating(event.target.value)}}/></li>
<li className="ListItem"><TextField id="standard-basic" label="Director" variant="standard" value={director}onChange={(event)=>{setDirector(event.target.value)}}/></li>
<li className="ListItem"><TextField id="standard-basic" label="StoryLine" variant="standard" value={summary}onChange={(event)=>{setSummary(event.target.value)}}/></li>

</ul>
<div className="buttonDiv">
<Button className="button" variant="contained" 

onClick={()=>{
const newMovie={
    name:name,
    poster:poster,
    rating:rating,
    director:director,
    summary:summary
}
setmovieList([...movieList,newMovie])
}}>Add</Button><br></br>
</div>

<section className="Movielist">{movieList.map((data)=>< Movie  name={data.name} poster={data.poster} rating={data.rating} director={data.director} summary={data.summary}/>)}</section>
        </div>
    )
}

