import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Firebase from '../config/Firebase'


class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Profile thing'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
 
})

export default Profile