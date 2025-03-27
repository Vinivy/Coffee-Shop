import React, { useEffect, useState } from "react";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import { Image } from 'expo-image';


interface ScreenProps {
    onFinish: () => void;
}

export default function Screen({ onFinish }: ScreenProps) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 6700);  // 7 segundos
        
        return () => clearTimeout(timer);  // Limpa o timer se o componente desmontar
    }, [onFinish]);
      
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#422110' }}>
            <Image
            source={require("../assets/images/Slogan.gif")}
            style={{ position: "absolute", width: "50%", height: "50%" }}
            />
            <StatusBar backgroundColor={'#422110'} />
        </View>
    );
}