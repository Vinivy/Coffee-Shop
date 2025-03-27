import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import mysql from 'mysql2/promise';
import { useNavigation } from '@react-navigation/native';

const connectToDatabase = async (username: string, password: string) => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: username,
            password: password,
            database: 'yourDatabaseName'
        });

        console.log('Connected to MySQL database');
        return connection;
    } catch (error) {
        console.error('Connection failed', error);
        return null;
    }
};

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        const connection = await connectToDatabase(username, password);
        if (connection) {
            navigation.navigate('NextScreen'); // Substitua 'NextScreen' pelo nome do seu próximo componente
        } else {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }}
            />
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;