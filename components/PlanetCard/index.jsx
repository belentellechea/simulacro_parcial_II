import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PlanetCard({name, image, id}){
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Details', { id })}
        >
            <Image 
                source={{uri: image}}
                style={styles.image}
            />
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        display: 'flex', 
        flexDirection: 'row', 
        gap: 50,
        borderRadius: 30,
        marginTop: 20
    },
    image: {
        height: 90,
        width: 90
    }, 
    title: {
        fontWeight: '800', 
        fontSize: 25
    }
});