import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [takePictureMode, setTackPictureMode] = useState(false);
    const [picture, setPicture] = useState('')

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePhoto = async () => {
        let photo = await this.camera.takePictureAsync();
        setPicture(photo.uri)
        props.onTakePicture(photo.uri)
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    if (picture) {
        return <Image style={styles.avatar} source={{ uri: picture }} />
    } else if (takePictureMode) {
        return (
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => { this.camera = ref }}
                    type={Camera.Constants.Type.front}
                    style={styles.camera}
                />
                <Button onPress={takePhoto} title="Take Photo" />
            </View>
        )
    } else {
        return <Button
            onPress={() => setTackPictureMode(true)}
            title="Take Picture"
        />
    }
}

const styles = StyleSheet.create({
    avatar: { width: '100%', height: 360, marginBottom: 20 },
    cameraContainer: { width: '100%', height: 400, marginBottom: 20 },
    camera: { width: '100%', height: 360 },
})