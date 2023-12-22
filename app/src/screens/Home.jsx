
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import RequestsScreen from "./Requests"
import FriendsScreen from "./Friends"
import ProfileScreen from "./Profile"
import { TouchableOpacity, View ,Image } from 'react-native'

import { useEffect, useLayoutEffect } from 'react'
import useGlobal from '../core/global'

const Tab = createBottomTabNavigator()

function HomeScreen({ navigation }) {
	const socketConnect = useGlobal(state => state.socketConnet)
	const socketClose = useGlobal(state => state.socketClose)
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, [])

	useEffect(()=>{
		socketConnect()
		return () => {

			socketClose()
		}

	},[])
	
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
				
				tabBarIcon: ({ focused, color, size }) => {
					const icons = {
						HERO: 'heart',
						Comics: 'book',
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
            <Tab.Screen name="HERO" component={RequestsScreen} />
			<Tab.Screen name="Comics"  component={FriendsScreen} />
			<Tab.Screen name="Profile"  component={ProfileScreen} />
    </Tab.Navigator>
	)
}

export default HomeScreen