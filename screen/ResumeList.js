import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, FlatList, View, TouchableOpacity, Button, Image } from 'react-native'
import axios from 'axios'

export default (props) => {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    const setHeader = () => {
        props.navigation.setOptions({
            headerRight: () => <Button
                title="Create"
                onPress={() => { props.navigation.push('ResumeForm') }}
            />,
        })
    }

    useEffect(() => {
        setHeader()
        axios.get('https://movie-api.igeargeek.com/users')
            .then((res) => {
                setList(res.data.data)
            }).catch((error) => {
                console.log('error', error)
            }).finally(() => {
                setLoading(false)
            })
    }, []);

    if (loading) {
        return <Text>Loading...</Text>
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png' }} style={styles.logo} />
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => item.ID}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => props.navigation.push('ResumeDetail', { id: item.ID })}>
                        <Text style={styles.itemText}>{`${item.name} : ${item.nickname} (${item.age} years)`}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        minHeight: '100%',
        paddingTop: 30,
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
    },
    list: {
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 150,
    },
    item: {
        height: 44,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    itemText: {
        paddingTop: 10,
        fontSize: 18,
    }
})