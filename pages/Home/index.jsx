import { View, ImageBackground, Text, StyleSheet, SafeAreaView, Platform} from "react-native";
import CardContainer from "../../components/CardContainer";
import { useEffect, useState } from "react";
import AddPlanetButton from "../../components/AddPlanetButton";
import OrderPlanetsButton from "../../components/OrderPlanetsButton";
import { getAllPlanets } from "../../Services/PlanetService";

export default function Home(){
    const [planets, setPlanets] = useState([]); 

    async function getPlanets() {
        try {
           const data = await getAllPlanets(); 
           setPlanets(data); 
        } catch (error) {
            console.error("Error obteniendo planetas", error); 
        }
    }

    useEffect(() => {
        getPlanets(); 
    }, []); 


    return (
        <ImageBackground
        source={require('../../assets/background.jpg')}
        style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.homeContainer}>
                <Text style={styles.title}>UCU PLANETARIUM</Text>
                <CardContainer 
                    planets={planets} 
                />
                {Platform.OS === "ios" ? (
                    <View style={styles.buttonContainer}>
                        <OrderPlanetsButton></OrderPlanetsButton>
                        <AddPlanetButton></AddPlanetButton>
                    </View>
                ):(
                    <View style={styles.buttonContainer}>
                        <AddPlanetButton></AddPlanetButton>
                        <OrderPlanetsButton
                            planets={planets}
                            setPlanets={setPlanets}
                        />
                    </View>   
                )}   
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
    homeContainer: {
      alignItems:'center',
      width: '85%', 
      height: '85%', 
      gap: 20
    },
    title: {
      fontWeight: 700,
      fontSize: 38,
      color: 'white'
    }, 
    buttonContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: 20
    }
});
  