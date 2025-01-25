import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate()
  const [title,setTitle] = useState("")
  const handleSearch = ()=>{
    navigate(`/movies/?title=${title}`)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value)
  }
  
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col justify-center items-center" >
      <div className="max-w-lg w-full mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search Movies..."
            required
            onChange={handleChange}
          />
          <button
            onClick={handleSearch}
            className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Search;
