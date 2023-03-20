import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    //Testing for information we will get back
    //console.log(result);

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
            <Text style={styles.title}>{result.name}</Text>
            <FlatList data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item })=> {
                    return <Image style={styles.image} source={{ uri: item }}/>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 250,
        marginBottom: 10,
        borderRadius: 4,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default ResultsShowScreen;