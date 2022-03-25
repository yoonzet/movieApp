import PropTypes from 'prop-types';
import{Link}from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return ( 
    <div>
        <img src={coverImg} alt={title}/>
    <h2>
        <Link to ={`/movie/${id}`}>{title}</Link></h2> 
    <p>{summary}</p>
    <ul>
      {genres.map(g => <li key ={g}>{g}</li>)}
    </ul>
    </div>);  
}
//링크를 걸때 a태그를 사용하게되면 페이지 전체가 새로고침되는 현상이 생기므로 Link를 import 해서 쓴다.

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;