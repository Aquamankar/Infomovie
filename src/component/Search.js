import React,{useState} from 'react'
import { useGlobalContext } from './conrext'
import { NavLink } from 'react-router-dom'

import "./Seacrh.css"

const Search = () => {
    
    const [proxy, setproxy] = useState("")
     const {query, setquery, isError}=useGlobalContext()
     const getSearchon = (e)=>{
        setquery(e.target.value)
        // return(
        // <NavLink to={`/`}/>
        // )
        

     }
    //  const backtohome =()=>{
    //     return (<>
    //     <NavLink to="/">hello return</NavLink>
    //     </>)
    //  }
    const errorIsBox =()=>{
        if(isError.show){
            return(
                <p >{isError.show && isError.msg}</p>

            )
        }
    }
    
  return (
    <div className='flexcol'>
        <div className='searchbox'>
            {/* <h2 className='serach-head'>search</h2> */}
            <form action="#" onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <div className='searchinfo'>
                    <input type="text"  placeholder='search movies'
                     value={query} onChange={(e)=> getSearchon(e)}/>
                     
                     <NavLink  className="searchbtn" to="/">search</NavLink>
                    
                </div>
            </form>
           
        </div>
        <div className="card-error" >
            {errorIsBox()}
                
            </div>
    </div>
  )
}

export default Search