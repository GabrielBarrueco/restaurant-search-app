import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.BarStyle}>
            <Feather name="search" style={styles.IconStyle}/>      
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.InputStyle}
                value={term}
                onChangeText={onTermChange}    
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    BarStyle :{
        backgroundColor: '#DDD',
        height: 50,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 6,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#DDD',
        borderColor: '#DDD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,



    },

    InputStyle: {
        fontSize: 18,
        flex: 1        
    },

    IconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 5
    }    
})

export default SearchBar