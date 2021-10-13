import { useState, useEffect } from "react";
import getMovies from "../helper/getMovies";

const useFetchMovies = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getMovies(category).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

export default useFetchMovies;
