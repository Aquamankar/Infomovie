import React,{useContext,useEffect,useState} from "react";

const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext=React.createContext();
const AppProvider =({children})=>{

    const [isLoad, setisLoad] = useState(true);
    const [movie, setmovie] = useState([]);
    const [query, setquery] = useState('spider man')
    const [isError, setisError] = useState({show:'false',msg:""});
    
    // console.log("contert movie",movie)

    const getmovie=async (url)=>{
        try {
            const res =await fetch(url);
            const data =await res.json();
            // console.log(data.Search[0].Title);
            if(data.Response==="True"){
                setisLoad(false);
                setmovie(data.Search);
            }
            else{
                setisError({
                    show:true,
                    msg:data.Error,
                })
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }
    useEffect(() => {
        let timeron= setTimeout(()=>{
            getmovie(`${API_URL}&s=${query}`);

        },1000);
      return ()=>{clearTimeout(timeron);}
    
      
    }, [query])
    
    return <AppContext.Provider value={{isLoad,isError,setisError,setmovie,movie,setquery,query,API_URL}}>
        
        {children}

    </AppContext.Provider>

};

const useGlobalContext =()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider, useGlobalContext,API_URL};