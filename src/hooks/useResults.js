import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san rose'
                }
            })
                setResults(response.data.businesses)
            } catch (error) {
                setErrorMsg('Something went wrong :(')
        }        
    }

    useEffect(() => {
        searchApi('pasta')
    } , [])

    return [searchApi, results, errorMsg]
}

