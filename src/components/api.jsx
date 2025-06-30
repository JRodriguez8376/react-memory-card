import {useState, useEffect} from 'react';

const fetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {   
        const getData = async () => {
            
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.log("error:", error + ' ' + url)
                setError(error);
                setLoading(false);
            }
        };
        getData();

    }, [url]);

    return {data, loading, error};
};
export default fetchData;