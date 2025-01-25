import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export default function Movies() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [found, setFound] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `http://localhost:3000/movies-api/search/?title=${searchParams.get("title")}`
      );
      console.log(res);
      if (res.status != 200 || !res.data.Search)
        setError(true)
      setFound(res.data.totalResults)
      setMovies(res.data.Search);
    };
    getMovies();
  }, [searchParams]);
  if (error)
    return (
      <div className="w-screen h-screen bg-black flex flex-col items-center justify-center" >
        <h1 className="text-white text-4xl pb-20">No Results</h1>
        <Link to={"/search"} className="p-4 rounded-md bg-gray-400 hover:bg-gray-500 cursor-pointer text-white">Go to Search</Link>
      </div>)
  return (
    <>
      <div className="flex py-6 bg-neutral-900 text-white px-10 justify-between">
        <h2 className="text-4xl text-center ">Results for {searchParams.get("title")} {found} Movies found</h2>
        <Link to={"/search"} className="p-4 rounded-md hover:bg-gray-500 cursor-pointer ">Go to Search</Link>
      </div>
      <div className="flex flex-wrap justify-between p-10 bg-gray-500">
        {movies.map((movie: IMovie) => (
          <MovieCard
            key={movie.imdbID}
            imdbID={movie.imdbID}
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie.Poster}
          />
        ))}
      </div>
    </>

  );
}
