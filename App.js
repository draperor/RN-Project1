import React, { useState } from "react";
import { View,Text, StyleSheet } from "react-native";
import {Focus} from './src/features/focus/Focus'

export default function App() {
    const [focusSubject, setFocusSubject] = useState(1);
    
    return (
        <View style={styles.container}>
            {focusSubject ? (<Text> I have a subject </Text>
            ) : (
            <Text> I  dont have a subject </Text>)}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    }
});