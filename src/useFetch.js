import { useState, useEffect } from "react";
// "http://localhost:8000/blogs"
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {

    const abortCont = new AbortController();


    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("could not fetch the data for that resource!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === 'AbortError'){
            console.log('fetch aborted!')
          } else{
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
          }
        });
      console.log("use effect ran");
    }, 1000);

    return () => abortCont.abort();

  }, [url]);

  return { data, isPending, error}
};

export default useFetch