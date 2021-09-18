import React from 'react';
import {  TouchableOpacity } from 'react-native';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Home from './src/Components/Home';
import Settings from './src/Components/Settings';
import FaceVerification from './src/Components/FaceVerification';
import AboutUs from './src/Components/AboutUs';
import UploadPoster from './src/Components/UploadPoster';
import EditProfile from './src/Components/EditProfile';

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
        <Stack.Screen 
					name="Face Verification" 
					component={FaceVerification}
					options={{
						title:'Face Verification',
            headerStyle:{
              backgroundColor:'#CA16FE',
              elevation:0
            },
            headerTitleStyle:{
              color:'#ffffff'
            },
            headerBackImage: () => (
							<SimpleLineIcons 
							name="arrow-left" 
							size={18}
              color="#ffffff" />
						)
					}} 
				/>
        <Stack.Screen 
					name="About Us" 
					component={AboutUs}
					options={{
						title:'About Us',
            headerBackImage: () => (
							<SimpleLineIcons 
							name="arrow-left" 
							size={18} />
						)
					}} 
				/>
        <Stack.Screen 
					name="Upload Poster" 
					component={UploadPoster}
					options={{
						title:'',
					}} 
				/>
        <Stack.Screen 
					name="Edit Profile" 
					component={EditProfile}
					options={{
						title:'Edit Profile',
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
