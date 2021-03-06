import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { purple } from '../utils/colors';

const TextButton = ({ children, onPress, style = {} }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.reset, style]}>{children}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    reset: {
        textAlign: 'center',
        color: purple
    }
})
export default TextButton;