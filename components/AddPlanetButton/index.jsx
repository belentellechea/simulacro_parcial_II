import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native"

export default function AddPlanetButton(){
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                {Platform.OS === 'ios' ? "Create planet" : "New planet"}
            </Text>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: Platform.select ({
        ios: {
            fontSize: 18,
            alignSelf: 'center',
        }, 
        android: {
            fontSize: 18,
            alignSelf: 'center', 
            color: 'white'
        }
      
    }), 
    button: Platform.select ({
        ios: {
            backgroundColor: '#b5e48c', 
            padding: '20', 
            flex: 1,
            width: '50%',
            borderRadius: 50
        }, 
        android: {
            backgroundColor: '#034078', 
            padding: '20', 
            flex: 1,
            width: '50%',
            borderRadius: 50
        }  
    }) 
});