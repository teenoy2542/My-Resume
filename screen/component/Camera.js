import React, {useState,useEffect } from 'react'
import {StyleSheet, Text, View, Button, Image} from 'react-native'
import {Camera} from 'expo-camera'

export default () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [trackPictureMode, setTrackPictureMode] = useState(false)
    const [picture, setPicture] = useState('')

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })();
    },[])
    if(hasPermission === null){
        return <View></View>
    }else if(hasPermission === false){
        return <Text>no access to camera</Text>
    }
    return (
        <View style={styles.container}>
            <Camera ref={ref => {this.camera = ref}}
            type={Camera.Constants.Type.front}
            style={styles.camera}
            >
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    camera: {
        width:'100%',
        height:360,

    },
    container: {
        width:'100%',
        height: 400,
        marginBottom:20,
    }
})
