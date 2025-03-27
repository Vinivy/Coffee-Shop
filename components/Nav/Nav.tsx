import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './StylesNav';
import { Ionicons } from '@expo/vector-icons';


type NavOption = 'Home' | 'Favoritos' | 'Shop' | 'Perfil';

export default function Nav() {
    const [selectedOption, setSelectedOption] = useState<NavOption>('Home');

    const handleNavClick = (option: NavOption) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.nav}>
            <View style={styles.content}>
                {selectedOption === 'Home' && <Text>Home Content</Text>}
                {selectedOption === 'Favoritos' && <Text>Favoritos Content</Text>}
                {selectedOption === 'Shop' && <Text>Shop Content</Text>}
                {selectedOption === 'Perfil' && <Text>Perfil Content</Text>}
            </View>
            <View style={styles.navList}>
                <TouchableOpacity onPress={() => handleNavClick('Home')} style={styles.navItem}>   
                    <Ionicons name={selectedOption == 'Home' ? 'home' : 'home-outline'} size={24} color={selectedOption === 'Home' ? '#422110' : '#000'} />
                    <Text style={selectedOption === 'Home' ? styles.Marrom : styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavClick('Favoritos')} style={styles.navItem}>
                    <Ionicons name={selectedOption == 'Favoritos' ? 'heart' : 'heart-outline'} size={24} color={selectedOption === 'Favoritos' ? '#422110' : '#000'} />
                    <Text style={selectedOption === 'Favoritos' ? styles.Marrom : styles.text}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavClick('Shop')} style={styles.navItem}>
                    <Ionicons name={selectedOption == 'Shop' ? 'cart' : 'cart-outline'} size={24} color={selectedOption === 'Shop' ? '#422110' : '#000'} />
                    <Text style={selectedOption === 'Shop' ? styles.Marrom : styles.text}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavClick('Perfil')} style={styles.navItem}>
                    <Ionicons name={selectedOption == 'Perfil' ? 'person' : 'person-outline'} size={24} color={selectedOption === 'Perfil' ? '#422110' : '#000'} />
                    <Text style={selectedOption === 'Perfil' ? styles.Marrom : styles.text}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

