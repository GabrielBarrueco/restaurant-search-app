import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import yelp from '../api/yelp'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')  

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null
    }

    return (
        <View>
            <Text style={styles.nameStyle} >{result.name}</Text>  
            <View style={styles.infoContainer}>                
                <Text style={styles.infoStyle}> <Feather name="map-pin" style={styles.iconStyle}/> {result.location.display_address}</Text>
                <Text style={styles.infoStyle}> <Feather name="phone" style={styles.iconStyle}/> {result.display_phone}</Text>                
                <Text style={styles.infoStyle}> <Feather name="star" style={styles.iconStyle}/> {result.rating}</Text>
            </View>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }}/>
                }}
                horizontal
                scrollEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        height: 200,
        width: 350,
        marginHorizontal: 10,
        marginVertical: 4,
        borderRadius: 4,
        alignSelf: 'center'
    }, 

    nameStyle: {
        justifyContent: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf:'center',
        color: '#4d4d4d',
        marginTop: 15
    },

    infoContainer : {
        margin: 10,
        padding: 4,
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#DDD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
    },

    infoStyle : {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 2
    },
    
})

export default ResultShowScreen