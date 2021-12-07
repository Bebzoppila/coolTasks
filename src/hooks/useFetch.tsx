import { useEffect, useState } from "react";

type useFetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: [] | object | string | number;
};
type useFetchType = (url: string, options: useFetchOptions) => void;

const useFetch: useFetchType = (url, options = { method: "GET" }) => {
  const [fetchInf, setFetchInf] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const createOptions = () => ({
    method: options.method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(options.body),
  });

  const fetchOptions = options.method == "GET" ? {} : createOptions();

  const fetchData = () => {
    setFetchInf({ ...fetchInf, loading: true });
    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((data) => setFetchInf({ ...fetchInf, loading: false, data: data }))
      .catch((erorr) => setFetchInf({ ...fetchInf, error: erorr }));
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return [fetchInf, fetchData];
};

export default useFetch;
