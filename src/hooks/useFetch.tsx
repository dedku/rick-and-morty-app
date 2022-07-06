import { useState, useEffect } from 'react'

export type FetchResponse = {
    data: any;
    statusContent: String;
    isPending: Boolean;
    error: any;
}

const useFetch = (url: string): FetchResponse => {
    const [data, setData] = useState<any>();
    const [statusContent, setStatusContent] = useState<String>('');
    const [isPending, setIsPending] = useState<Boolean>(false);
    const [error, setError] = useState<any>();

    const fetchData = async () => {
        setIsPending(true)
        try{
            const apiResponse = await fetch(url);
            const json = await apiResponse.json();
            setStatusContent(apiResponse.statusText);
            setData(json)
        } catch(error) {
            setError(error)
        }
        setIsPending(false)
    };

    useEffect(() => {
        fetchData();
    }, [])

    return { data, statusContent, isPending, error}
}

export default useFetch