import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider"; // ✅ Add this

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");

  const [authUser] = useAuth(); // ✅ use login state
  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/book/search?query=${searchTerm}`
        );
        const data = authUser
          ? response.data
          : response.data.filter((item) => item.category === "free"); // ✅ filter free-only for guest
        if (data.length === 0) {
          setNotFound(true);
        } else {
          setResults(data);
          setNotFound(false);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setNotFound(true);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm, authUser]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 dark:bg-slate-900 dark:text-white">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-6">
          Search Results for: <span className="text-blue-600">"{searchTerm}"</span>
        </h1>
        {notFound ? (
          <p className="text-lg text-red-600 mt-10">No results found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {results.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        )}

        <Link to={authUser ? "/course" : "/"}>
          <button className="mt-10 mb-10 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
            Back to All Books
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SearchResults;
