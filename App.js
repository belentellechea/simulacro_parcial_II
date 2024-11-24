import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Details from './pages/Details';
import Edit from './pages/Edit';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{headerShown: false}}
        >
        
        </Stack.Screen>
        <Stack.Screen 
          name='Details'
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Edit'
          component={Edit}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


