import React, { useState, useEffect } from 'react';
import yelp from '../Api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term:searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMsg('Request failed with status code 400');
        } 
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMsg];
};