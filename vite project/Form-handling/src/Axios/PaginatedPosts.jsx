import React, { useState, useEffect } from "react";
import axios from "axios";

const PaginatedPosts = () => {
  const [posts, setPosts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 

  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_page=${currentPage}`
        );
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  
  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Paginated Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        {posts.map((post) => (
          <div key={post.id} className="mb-2 p-4 border rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedPosts;
