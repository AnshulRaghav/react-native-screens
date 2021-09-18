import React from 'react';
import {  TouchableOpacity } from 'react-native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Home from './src/Components/Home';
import Settings from './src/Components/Settings';

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
						shadowOpacity: 0,
					},
          headerTitleAlign: 'center'
				}}
			>
				<Stack.Screen 
					name="Home" 
					component={Home}
					options={{
						title:'Home',
					}} 
				/>
        <Stack.Screen 
					name="Settings" 
					component={Settings}
					options={{
						title:'Settings',
            headerBackImage: () => (
							<SimpleLineIcons 
							name="arrow-left" 
							size={18} />
						)
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
