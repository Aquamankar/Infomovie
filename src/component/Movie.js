import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './conrext';
import Footer from './Footer'

const Movie = () => {
    const {movie,isLoad} = useGlobalContext();
    // console.log(movie)
    
    
    return(
      <>
      <section className='movieSec'>
        
        <div className="grid grid-4-col">
          
          {
            
            
            movie.map((curMovie) =>{
                // console.log(curMovie)
              const {imdbID,Title,Poster}=curMovie;
              const movieTits=Title.substring(0,13);
              
             
              return <NavLink to={`movie/${imdbID}`} key={imdbID}>
                 
                <div className="card">
                  <div className="cardinfo">
                    
                    <img className='posterimg' src={Poster} alt={imdbID}  />
                    <h2 className='movieTitle'>{movieTits.length >= 13 ? `${movieTits}...` : movieTits}</h2>
                  </div>
                </div>
              </NavLink>
            })
          }
        </div>
        
      </section>
      <Footer></Footer>
      </>
    )
 
}

export default Movie