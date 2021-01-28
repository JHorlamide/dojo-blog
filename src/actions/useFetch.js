import { useState, useEffect } from "react";
import * as api from "../api";
import axios from "axios";

/* GET All Blogs Post */
export const useFetch = (url) => {
  const [data, setDate] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchDate = async () => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    try {
      const { data } = await api.fetchBlog(url, source);
      setIsPending(false);
      setDate(data);
      setError(null);
    } catch (error) {
      setIsPending(false);
      setError(error.message);
      console.log(`Error: ${error.message}`);
    }

    return () => {
      source.cancel("Request Cancelled.");
    };
  };

  useEffect(() => {
    fetchDate();

    // eslint-disable-next-line
  }, []);

  return { data, isPending, error };
};