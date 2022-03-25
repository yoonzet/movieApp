import { useEffect } from "react";
import {useParams} from "react-router-dom"; //id 와 매치해주는 역할
function Detail(){
    const id = useParams();
    useEffect(()=>{
     const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
     }
    },[])
    return <h1>Detail</h1>;
    
}


export default Detail;