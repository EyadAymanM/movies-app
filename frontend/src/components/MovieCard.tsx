import { Link } from "react-router-dom";

interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  addToFav:()=>{};
}


function MovieCard({ imdbID, Title, Year, Poster, addToFav }:IMovie) {
  return (
    <div className="flex flex-col justify-around items-center font-mono max-w-60 border rounded-xl p-4 mt-2 bg-gray-400 shadow-2xl hover:bg-gray-600">
      <img src={Poster} alt="" className="rounded" />
      <div className="text-md text-center">{Title}</div>
      <div className="text-md text-center">{Year}</div>
      <button onClick={addToFav} className="bg-red-300 py-2 px-4 rounded-2xl hover:bg-red-500 cursor-pointer mt-1">Add to Favourites</button>
    </div>
  )
}
export default MovieCard