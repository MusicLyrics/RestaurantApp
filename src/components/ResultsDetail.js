import React from "react";
import { View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({ result }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        borderRadius: 6,
        height: 120,
        marginBottom: 4,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 12
    }
});

export default ResultsDetail;