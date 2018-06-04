import React from 'react';
import { View, StyleSheet } from 'react-native';

export const CardSection = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});