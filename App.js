import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Components/Home';

const Stack = createStackNavigator();

const StackNavigator = () => {

	return(
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
					animationEnabled:false,
					headerStyle: {
						elevation: 0,
						shadowOpacity: 0
					}
				}}
			>
				<Stack.Screen 
					name="Home" 
					component={Home}
					options={{
						title:'Home',
					}} 
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const App = () => {
 return (
		<StackNavigator/>
 )
}

export default App;
