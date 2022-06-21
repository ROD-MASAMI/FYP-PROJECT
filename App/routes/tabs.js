import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/TENANT/HomeScreen';
import UserProfile from '../screens/SHARED/userProfile';
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
     
        <Tab.Navigator
        >
            <Tab.Screen
                name ="Home"
                component={HomeScreen}
                options ={{
                    headerShown: false,
                }}                
            />
            <Tab.Screen
                name ="userProfile"
                component={UserProfile}
                options ={{
                    headerShown: false,
                }}                
            />
            
            
    </Tab.Navigator>
   
    )

}
export default Tabs;