import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity, TextInput, Button } from "react-native";

import styles from './styles';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    
    function navigateToSignup() {
        navigation.navigate('Signup');
    }

    return (

        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                value={email}
                onChangeText={email => this.setState({ email })}
                placeholder='Email'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.inputBox}
                value={password}
                onChangeText={password => this.setState({ password })}
                placeholder='Password'
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigateToSignup}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Button
                title="Don't have an account yet? Sign up"
                onPress={() => navigateToSignup()}
            />
        </View>
        
    );
}