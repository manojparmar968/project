import React , { useState, useEffect } from 'react';
import Zomato from '../Api/Zomato';

export default () => {
    const [results, setResults ] = useState([]);
    const [errorMsg, setErrorMsg] =useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await Zomato.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`);
            // const response = await Zomato.get('/search');
            setResults(response.data.restaurants);
        } catch(err) {
            setErrorMsg('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('chinese')
    }, [])

    return [searchApi, results, errorMsg];

}