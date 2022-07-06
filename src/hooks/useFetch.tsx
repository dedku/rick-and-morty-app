import { useState, useEffect } from 'react'
import { FetchResponse } from '../lib/Types';

const useFetch = (url: string): FetchResponse => {
    const [data, setData] = useState<any>();
    const [statusContent, setStatusContent] = useState<String>('');
    const [isPending, setIsPending] = useState<Boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        const abortCont = new AbortController();
        setIsPending(true)
        setTimeout(() => {
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
          })
        }, 1000);

        // abort the fetch
        return () => abortCont.abort();
      }, [url])

    return { data, statusContent, isPending, error }
}

export default useFetch