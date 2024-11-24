import { StyleSheet, Text, TouchableOpacity} from "react-native";

export default function OrderPlanetsButton({planets, setPlanets}) {

    console.log("planetas", planets)
    const handleOrderPlanets = () => {
        const sortedPlanets = [...planets].sort((a, b) => {
            const moonsA = Number(a.moons);
            const moonsB = Number(b.moons);
            return moonsB - moonsA;
        });
        setPlanets(sortedPlanets);
    };
    
  
    return (
        <TouchableOpacity style={styles.button} onPress={handleOrderPlanets}>
            <Text style={styles.text}>
                Order planets
            </Text>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      alignSelf: 'center'
    }, 
    button: {
        backgroundColor: 'white', 
        padding: '20', 
        width: '50%',
        borderRadius: 50,
    }
});
