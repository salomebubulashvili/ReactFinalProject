// import { useEffect, useState } from "react";
// import { fetchData } from "../api/auth";

// const useFetch = (link) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchDataFromAPI = async () => {
//       try {
//         const result = await fetchData();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDataFromAPI();
//   }, [link]);

//   return [data, setData, error, isLoading];
// };

// export default useFetch;


// src/hooks/useFetch.js
import { useEffect, useState } from 'react';
import { fetchData } from '../api/auth';

const useFetch = (link) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData(link);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromAPI();
  }, [link]);

  return [data, setData, error, isLoading];
};

export default useFetch;
