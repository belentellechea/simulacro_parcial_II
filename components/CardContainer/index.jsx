import { View, StyleSheet, FlatList } from "react-native";
import PlanetCard from "../PlanetCard";

export default function CardContainer({planets}){
    return (
        <FlatList
            style={styles.container}
            data={planets}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => 
                <PlanetCard
                    id={item.id}
                    name={item.name}
                    image={item.image}
                />
            }
        />

       
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        height: '100%',
        width: '100%',
        gap: 20
    }
});