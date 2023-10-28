
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import RequestsScreen from "./Requests"
import FriendsScreen from "./Friends"
import ProfileScreen from "./Profile"

const Tab = createBottomTabNavigator()

function HomeScreen({ navigation }) {
	
	return (
		<Tab.Navigator 
			screenOptions={({ route, navigation }) => ({	
				tabBarIcon: ({ focused, color, size }) => {
					const icons = {
						Requests: 'bell',
						Friends: 'inbox',
						Profile: 'user'
					}
					const icon = icons[route.name]
					return (
						<FontAwesomeIcon icon={icon} size={28} color={color} />
					)
				},
				tabBarActiveTintColor: '#202020',
				tabBarShowLabel: false
			})}
		>
            <Tab.Screen name="Requests" component={RequestsScreen} />
			<Tab.Screen name="Friends"  component={FriendsScreen} />
			<Tab.Screen name="Profile"  component={ProfileScreen} />
    </Tab.Navigator>
	)
}

export default HomeScreen