import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
// import { useGlobalContext } from './conrext'
import { NavLink } from 'react-router-dom'
 import {API_URL} from './conrext'
 import Footer  from './Footer'

const Singleele = () => {
  const {id} = useParams()
  const [isLoad, setisLoad] = useState(true);
    const [movie, setmovie] = useState("");
    
  //  const { API_URL} = useGlobalContext();
  const getmovie=async (url)=>{
    try {
        const res =await fetch(url);
        const data =await res.json();
        
        if(data.Response==="True"){
            setisLoad(false);
            
            setmovie(data);
            // console.log(data)
        }
       
        
    } catch (error) {
        console.log(error)
        
    }

}
useEffect(() => {
    let timeron= setTimeout(()=>{
        getmovie(`${API_URL}&i=${id}`);

    },1000);
  return ()=>{clearTimeout(timeron);}

  
},[id])
  
  if (isLoad) {
    return (
     <div className="loadong">loading</div>
    )
  }
  
  return (
    <>
    <Header></Header>
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="card-content">
        <p className="title card-text"><span>Movie Name:</span>{movie.Title}</p>
        <p className=""></p>
        <p className="card-text"><span>Release:</span>{movie.Released}</p>
        <p className="card-text"><span>Genre:</span>{movie.Genre}</p>
        <p className="card-text"><span>Rating:</span>{movie.imdbRating} / 10</p>
        <p className="card-text"><span>Country:</span>{movie.Country}</p>
        <p className="card-text"><span>Cast:</span>{movie.Actors}</p>
        <p className="card-text"><span>Stoy Line:</span>{movie.Plot}</p>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  </section>
  <Footer></Footer>
    </>
  )
}

export default Singleele