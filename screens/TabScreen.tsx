import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from './tabs/HomeScreen';
import QuoteScreen from './tabs/QuoteScreen';
import TaskCompletionScreen from './tabs/TaskCompletionScreen';

const Tab = createMaterialBottomTabNavigator();


const MyTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" style={styles.container}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Quote" component={QuoteScreen} />
            <Tab.Screen name="TaskCompletion" component={TaskCompletionScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
});

export default MyTabs;