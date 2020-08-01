import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import yelp from '../Api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult ] = useState(null);            
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    },
    text: {
        fontWeight: 'bold'
    }
});

export default ResultShowScreen;