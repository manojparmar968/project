import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../Component/SearchBar';
import useResults from '../Hooks/useResults';
import ResultList from '../Component/ResultList';

const SearchScreen = () => {
    const [term, setTerm ] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.restaurant.price_range === price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>we found {results.length} results.</Text>
            <ScrollView>
                <ResultList results={filterResultsByPrice(2)} title='Cost Effective' />
                <ResultList results={filterResultsByPrice(3)} title='Bit Pricier' />
                <ResultList results={filterResultsByPrice(4)} title='Big Spender' />
            </ScrollView>
        </>
    );
};

export default SearchScreen;