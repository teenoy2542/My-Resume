import React from "react"
import ValidationComponent from 'react-native-form-validator'
import {StyleSheet, View,Text,TextInput,Button} from 'react-native'

export default class ResumeForm extends ValidationComponent {
    state = {
        name : '',
        nickname: '',
        age: '',
        skill: ''
    }

    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text>Fullname</Text>
                    <TextInput style={styles.textInput} onChangeText={(text) => this.setState({name:text})} value={this.state.name}></TextInput>
                </View>

                <View>
                    <Text style={{marginTop:20}}>Nickname</Text>
                    <TextInput style={styles.textInput} onChangeText={(text) => this.setState({nickname:text})} value={this.state.nickname}></TextInput>
                </View>
                
                <View style={{marginTop:20}}>
                    <Text>Age</Text>
                    <TextInput style={styles.textInput} onChangeText={(text) => this.setState({age:text})} value={this.state.age}></TextInput>
                </View>

                <View style={{marginTop:20}}>
                    <Text>Skill</Text>
                    <TextInput style={styles.textAreaInput} onChangeText={(text) => this.setState({skill:text})} value={this.state.skill} multiline={true}></TextInput>
                </View>

                <View style={{marginTop:20}}>
                    <Button title="Create Resume"></Button>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:30,
        backgroundColor:'while',
        minHeight:"100%"
    },
    textInput:{
        height:30,
        borderColor:'gray',
        borderWidth:1

    },
    textAreaInput:{
        height:100,
        borderColor:'gray',
        borderWidth:1,
    }

})