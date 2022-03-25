import { useEffect, useState } from "react";
import Movie from "../components/Movie";


function Home(){
    const [loading, setLoading] = useState(true); // useState 함수를 실행하면 rerender됨
  const [movies, setMovies] = useState([]);
  const getMovies = async() =>{ //요즘엔 .then 보단 await async가 자주쓰인다.
    const json = await (
     await fetch(
       'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
     )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
    };
  useEffect(()=>{
    getMovies()
  },[])//끝에 오는 빈 배열([])은 어떤 것도 주시하거나 의존하지 않고 있다는것을 의미한다.
  return (
    <div >
      {loading ? <h1>Loading...</h1> :
      movies.map((movie) => (
       <Movie 
       key={movie.id} //Key는 react.js에서만, map안에서 컴포넌트들을 render할 때 사용한다
       id={movie.id}
       coverImg={movie.medium_cover_image} 
       title={movie.title} 
       summary={movie.summary} 
       genres={movie.genres}/>
      ))}
    </div>
  );
}

export default Home;