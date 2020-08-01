import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../Component/SearchBar';
import useResult from '../Hooks/useResult';
import ResultList from '../Component/ResultList';

const SearchScreen = () => {
    const [term, setTerm ] = useState('');
    const [searchApi, results, errorMsg] = useResult();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmited={() => searchApi(term)}
            />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>
                <ResultList 
                    results={filterResultsByPrice('$')} 
                    title='Cost Effective' 
                />
                <ResultList 
                    results={filterResultsByPrice('$$')} 
                    title='Bit Pricier' 
                />
                <ResultList 
                    results={filterResultsByPrice('$$$')} 
                    title='Big Spender' 
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;