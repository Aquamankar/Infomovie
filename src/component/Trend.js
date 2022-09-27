import React from 'react'
import "./Trend.css"
import { newmovie } from './dummy'
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons"
 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom'


const Trend = () => {
  // const PreviousBtn = (props) => {
  //   // console.log(props);
  //   const { className, onClick } = props;
  //   return (
  //     <div className={className} onClick={onClick}>
  //       <ArrowBackIos style={{background:"#2c292985",height:"3rem",width:"3rem",padding:".4rem",borderRadius:"2rem", position:"absolute",top:"1rem",right:"0rem",color: "white", fontSize: "30px" }} />
  //     </div>
  //   );
  // };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{position:"absolute",top:"0rem",background:"#2c292985",
        height:"2rem",width:"2rem",padding:".4rem",borderRadius:"2rem",left:"-3rem", color: "white", fontSize: "30px" }} />
      </div>
    );
  };



  const config = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    prevArrow:false,
    nextArrow:<NextBtn/>,
  };
  return (<>
  <div className='trendingSec'>
  <Slider {...config}>
  {
      newmovie.map((tre)=>{
        const {imdbID,Title,Poster}=tre;
        return <div  className={'cardslide'}  key={imdbID}>
        <img className='imgslider' src={Poster} alt=""  />

        <div className="info">
        <div className="holo">{Title}</div>
        <NavLink to={`movie/${imdbID}`} key={imdbID} className="btn-of-nav" >click here</NavLink>
        </div>
    </div>
         
          
        
    
      })
    }

  </Slider>
    
    

  </div>
  </>

  )
  
  
}

export default Trend