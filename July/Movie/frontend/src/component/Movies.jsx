import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");
  const api = import.meta.env.VITE_IMDB_API;

  const navigate = useNavigate();

  const getMovies = async (s = "all") => {
    try {
      const url = api + "&s=" + s;
      const result = await axios.get(url);

      if (result.data.Response === "True") {
        setMoviesData(result.data.Search);
      } else {
        setMoviesData([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handelSearch = () => {
    getMovies(search);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">SEARCH MOVIES</h1>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            value={search}
            placeholder="Enter movie name"
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition"
            onClick={handelSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {moviesData?.length > 0 ? (
          moviesData.map((ele) => (
            <div
              key={ele.imdbID}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
              onClick={() => navigate(`/movie/${ele.imdbID}`)}
            >
              <img
                src={ele.Poster !== "N/A" ? ele.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                alt={ele.Title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{ele.Title}</h2>
                <p className="text-sm text-gray-600">{ele.Year}</p>
                <p className="text-sm text-gray-500 capitalize">{ele.Type}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
