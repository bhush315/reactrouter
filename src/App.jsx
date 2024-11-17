// App.js
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

// Movie data with description and trailer link
const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Matrix",
    description:
      "A hacker discovers a dystopian reality controlled by machines.",
    trailerLink: "https://www.youtube.com/embed/m8e-FF8MsqU",
  },
];

// MovieCard Component
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}

// MovieDetails Component
function MovieDetails({ movies }) {
  const navigate = useNavigate();
  const movieId = window.location.pathname.split("/")[2]; // Extract movie ID from the URL
  const movie = movies.find((m) => m.id === parseInt(movieId));

  if (!movie) return <div>Movie not found!</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

// App Component with Routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

// Home Component (Movie List)
function Home() {
  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
