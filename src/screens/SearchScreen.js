import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultList'
import { LinearGradient } from 'expo-linear-gradient'

import useResults from '../hooks/useResults'
import { ScrollView } from 'react-native-gesture-handler'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMsg] = useResults();

    const filterPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    
    return (
        <View style={styles.viewStyle}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />            
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList results={filterPrice('$')} title="Cost Effective" />
                <ResultsList results={filterPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterPrice('$$$')} title="Big Spender" />
            </ScrollView>            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        flex: 1,
        backgroundColor: '#ddd'
    }
})

export default SearchScreen