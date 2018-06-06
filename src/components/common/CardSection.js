import React from 'react';
import { View, StyleSheet } from 'react-native';

export const CardSection = ({ children, style }) => {
    return (
        //style override : style on the right override style on the left
        <View style={[styles.containerStyle, style]}>
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