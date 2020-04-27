import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultDetail = ({ result }) => {
    return(
        <View style={styles.viewcontainer} >            
            <Image style={styles.ImageStyle} source={{ uri: result.image_url }} />     
            <Text style={styles.nameStyle} >{result.name}</Text>       
            <Text style={styles.ratingStyle} >{result.rating} Stars {result.review_count} Reviews </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewcontainer : {
        marginLeft: 10,
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#DDD',
        borderColor: '#DDD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
    },

    ImageStyle : {
        margin: 5,
        borderRadius: 4,
        height: 120,
        width: 220
    },

    nameStyle : {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 4,
        maxWidth: 220,
        maxHeight: 25
    },

    ratingStyle : {
        fontWeight: '500',
        justifyContent: 'center'
    }
})

export default ResultDetail