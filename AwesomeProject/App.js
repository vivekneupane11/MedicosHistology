import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import HomeScreen from './screens/HomeScreen';
import ContentScreen from './screens/ContenScreen';
import SearchScreen from './screens/SearchScreen';
import SettingScreen from './screens/SettingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent';
import BookmarkScreen from './screens/BookmarkScreen';
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
<<<<<<< HEAD
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name="Onboarding" component={OnboardingScreen} /> 
            <HomeStack.Screen name="Login" component={LoginScreen} />
            <HomeStack.Screen name="Register" component={RegistrationScreen} />
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Setting" component={SettingScreen} />
            <HomeStack.Screen name="Content" component={ContentScreen} />
            <HomeStack.Screen name="Search" component={SearchScreen} />
            <HomeStack.Screen name="Bookmarks" component={BookmarkScreen} />
=======
        <HomeStack.Navigator >
            <HomeStack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} /> 
            <HomeStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  />
            <HomeStack.Screen name="Register" component={RegistrationScreen} options={{headerShown:false}} /> 
            <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}  />
            <HomeStack.Screen name="Setting" component={SettingScreen} options={{headerShown:false}} />
            <HomeStack.Screen name="Content" component={ContentScreen} />
            <HomeStack.Screen name="Search" component={SearchScreen} />
            <HomeStack.Screen name="Bookmarks" component={BookmarkScreen} options={{headerShown:false}} />
>>>>>>> 3c2d9bf1954a94c706fb27bb5e9fd26ca45665a6

        </HomeStack.Navigator>
    );
}


const Drawer = createDrawerNavigator();

const App = () => {
    // const [isFirstLaunch,setisFirstLaunch] = useState(null);
    // useEffect(()=>{
    //     AsyncStorage.getItem('isalreadylaunch').then(value=>{
    //         if(value == null){
    //             AsyncStorage.setItem('isalreadylaunch','true');
    //             setisFirstLaunch(true);
    //         }else{
    //             setisFirstLaunch(false);
    //         }
    //     });
    // });

    // if(isFirstLaunch == null){
    //     return null;
    // }
    // else if(isFirstLaunch==true){
    return (

        <NavigationContainer>


            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
                <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />

            </Drawer.Navigator>

        </NavigationContainer>
    )
    // }
    // else{
    //   return  <LoginScreen/>;
    // }

}


export default App;