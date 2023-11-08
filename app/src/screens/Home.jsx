
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import RequestsScreen from "./Requests"
import FriendsScreen from "./Friends"
import ProfileScreen from "./Profile"
import { TouchableOpacity, View ,Image } from 'react-native'

import { useLayoutEffect } from 'react'

const Tab = createBottomTabNavigator()

function HomeScreen({ navigation }) {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, [])
	
	return (
		<Tab.Navigator 
			screenOptions={({ route, navigation }) => ({
				headerLeft: () => (

					<View style={{marginLeft:16}}>
						<Image 
						source={require('../../assets/profile.png')}
						style={{width:30,height:30,borderRadius:14,backgroundColor:'#e0e0e0'}}/>
						
					</View>
				),
				headerRight: () => (
					<TouchableOpacity>
						<FontAwesomeIcon 
							style={{ marginRight: 16 }}
							icon='magnifying-glass' 
							size={22} 
							color='#404040'
						/>
					</TouchableOpacity>
				),
				tabBarIcon: ({ focused, color, size }) => {
					const icons = {
						Request: 'bell',
						Friends: 'inbox',
						Profile: 'user'
					}
					const icon = icons[route.name]
					return (
						<FontAwesomeIcon icon={icon} size={28} color={color} />
					)
				},
				tabBarActiveTintColor: '#9900FF',
				tabBarShowLabel: false
			})}
		>
            <Tab.Screen name="Request" component={RequestsScreen} />
			<Tab.Screen name="Friends"  component={FriendsScreen} />
			<Tab.Screen name="Profile"  component={ProfileScreen} />
    </Tab.Navigator>
	)
}

export default HomeScreen