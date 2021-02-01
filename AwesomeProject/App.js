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
import NoteScreen from './screens/NoteScreen';
import TermsAndConditionsScreen from './screens/TermsAndConditionsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import { colors } from './constants/theme';
const HomeStack = createStackNavigator();


const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator >
            {/* <HomeStack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} />  */}
            {/* <HomeStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  /> */}
            {/* <HomeStack.Screen name="Register" component={RegistrationScreen} options={{headerShown:false}} />  */}
            <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Content" component={ContentScreen} />
            <HomeStack.Screen name="Search" component={SearchScreen} options={({ navigation }) => ({
                headerTitle: (props) => (
                    <Text {...props} style={{ color: 'white', fontSize: 18, fontWeight: 'bold', backgroundColor: colors.primary }}>Search</Text>
                ),
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: '#fff'
            })} />
            <HomeStack.Screen name="Notes" component={NoteScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Bookmarks" component={BookmarkScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} options={({ navigation }) => ({
                headerTitle: (props) => (
                    <Text {...props} style={{ color: 'white', fontSize: 18, fontWeight: 'bold', backgroundColor: colors.primary }}>Terms and Conditions</Text>
                ),
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: '#fff'
            })} />
            <HomeStack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={({ navigation }) => ({
                headerTitle: (props) => (
                    <Text {...props} style={{ color: 'white', fontSize: 18, fontWeight: 'bold', backgroundColor: colors.primary }}>Privacy and Policy</Text>
                ),
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: '#fff'
            })} />
            <HomeStack.Screen name="AboutUs" component={AboutUsScreen} options={({ navigation }) => ({
                headerTitle: (props) => (
                    <Text {...props} style={{ color: 'white', fontSize: 18, fontWeight: 'bold', backgroundColor: colors.primary }}>About Us</Text>
                ),
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: '#fff'
            })} />

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