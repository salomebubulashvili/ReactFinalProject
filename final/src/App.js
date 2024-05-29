import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <AppRoutes />
      <Navbar />
    </div>
  );
}

export default App;


// src/App.js
// import './App.css';
// import AppRoutes from './AppRoutes';
// import Navbar from './components/Navbar';
// import React from 'react';
// import useFetch from './hooks/useFetch';

// const TopMovies = () => {
//   const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
//   const [data, , error, isLoading] = useFetch(url);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Top 100 Movies</h1>
//       <ul>
//         {data.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//       <AppRoutes />
//       <Navbar />
//       <TopMovies />
//     </div>
//   );
// }

// export default App;
