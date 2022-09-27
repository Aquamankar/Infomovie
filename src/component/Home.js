import React ,{useContext}from 'react'
import { AppContext } from './conrext'
import { useGlobalContext } from './conrext'
import Header from './Header'
import Footer from './Footer'
import Movie from './Movie'
import Search from "./Search"
import Trend from './Trend'



const Home = () => {
  // const name = useContext(AppContext)
 
  

  return (
    <div className='conatiner home'>
      
      <Header></Header>
      {/* <Search></Search> */}
      <Trend></Trend>
      
      
      <Movie/>
     
     
    </div>
  )
}

export default Home