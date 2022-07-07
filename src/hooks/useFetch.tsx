import { useState, useEffect } from 'react'
import { FetchResponse } from '../lib/TypesAndInterfaces';

const useFetch = (url: string): FetchResponse => {
    const [data, setData] = useState<any>();
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        const abortCont = new AbortController();
        setIsPending(true)
          fetch(url, { signal: abortCont.signal })
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            }
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
            }
          });

        // abort the fetch
        return () => abortCont.abort();
      }, [url])

    return { data, isPending, error }
}

export default useFetch