import { View, StyleSheet, Text, SafeAreaView, ImageBackground, TouchableOpacity, TextInput} from "react-native"
import { editPlanet } from "../../Services/PlanetService";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Edit({route}){
    const {planet} = route.params; 
    const navigation = useNavigation();

    const [name, setName] = useState(planet.name);
    const [description, setDescription] = useState(planet.description);
    const [moons, setMoons] = useState(String(planet.moons));
    const [moonNames, setMoonNames] = useState(planet.moon_names.join(', ')); 
    const [image, setImage] = useState(planet.image); 

    async function modifyPlanet(){
        try {
            const editedPlanet = {
                name, 
                description, 
                moons: parseInt(moons), 
                moon_names: moonNames.split(',').map(moon => moon.trim()), 
            }
            console.log("planeta editado", editedPlanet); 
            await editPlanet(planet.id, editedPlanet);
            navigation.navigate(navigation.navigate('Details', { id: planet.id }));  
        } catch (error) {
            console.error('Error editando planeta', error)
        }
    }

    return (
        <ImageBackground 
            source={{uri: planet.image}}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>Edit {planet.name}</Text>

                    <View style={styles.infoContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Name</Text>
                            <TextInput 
                                value={name}
                                onChangeText={setName}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Image</Text>
                            <TextInput 
                                value={image}
                                onChangeText={setImage}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Description</Text>
                            <TextInput 
                                value={description}
                                onChangeText={setDescription}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Moon count</Text>
                            <TextInput 
                                value={moons} 
                                onChangeText={setMoons}
                                keyboardType="numeric"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.boldText, styles.text]}>Moons Names</Text>
                            <TextInput 
                                value={moonNames}
                                onChangeText={setMoonNames}
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details', { id: planet.id })}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={modifyPlanet}> 
                            <Text style={styles.buttonText}>Save changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>   
            </SafeAreaView>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        display: 'flex', 
        alignItems:'center',
        justifyContent: 'space-around', 
        width: '85%', 
        height: '85%', 
        gap: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        padding: 30
    },
    title: {
      fontWeight: 800,
      fontSize: 45,
    }, 
    boldText: {
        fontWeight: 'bold'
    }, 
    text: {
        fontSize: 20, 
    }, 
    infoContainer: {
        gap: 10,
        width: '100%'
    }, 
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row', 
        gap: 10
    }, 
    button: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15, 
        borderRadius: 50
    }, 
    buttonText: {
        alignSelf: 'center', 
        fontSize: 18
    }, 
    input: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10, 
        borderRadius: 50,
        fontSize: 18
    }, 
    inputContainer: {
        gap: 5
    }
});
  