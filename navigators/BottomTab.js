import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import Home from './../screens/home';
 import Profile from './../screens/profile';
 import Planner from './../screens/planner';
 import Reports from './../screens/reports';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="home" component={Home}/>
            {/* <Tab.Screen name="profile" component={Profile}/>
            <Tab.Screen name="planner" component={Planner}/>
            <Tab.Screen name="reports" component={Reports}/> */}
        </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabs;