import React from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultDetail'

import { withNavigation } from 'react-navigation'

const ResultList = ({ title, results, navigation }) => {
    if(!results.length){
        return null
    }

    return (
        <View>
            <Text style={styles.titleStyles} >{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyles : {
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginBottom: 4,
        
    }
})

export default withNavigation(ResultList)