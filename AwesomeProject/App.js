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
import BookmarkScreen from './screens/BookmarkScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent';
import {AuthProvider, AuthContext }  from './src/AuthProvider'
const HomeStack = createStackNavigator();
import LoadingPage from './screens/LoadingPage';

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator >
        <HomeStack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />  
        <HomeStack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} /> 
       <HomeStack.Screen name="Register" component={RegistrationScreen} options={{ header: () => null }} />  
       <HomeStack.Screen name="Home" component={HomeScreen}   options={{ header: () => null }} />
       <HomeStack.Screen name="Setting" component={SettingScreen} options={{ header: () => null }} />
       <HomeStack.Screen name="Content" component={ContentScreen} />
       <HomeStack.Screen name="Search" component={SearchScreen}  />
       <HomeStack.Screen name="Bookmarks" component ={BookmarkScreen}/>
               </HomeStack.Navigator>
    );
}
const Stack = createStackNavigator();
// const AuthStackScreen = ()=>{
//     return (
//         <AuthProvider>
//         <Stack.Navigator initialRouteName='Login'>
//           <Stack.Screen
//             name='Login'
//             component={LoginScreen}
//             options={{ header: () => null }}
//           />
//           <Stack.Screen name='Register' component={RegistrationScreen} />
//         </Stack.Navigator>
//         </AuthProvider>
//       );
// }

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