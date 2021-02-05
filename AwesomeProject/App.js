import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
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
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { enableScreens } from 'react-native-screens';
import { useTheme, ThemeManager } from './src/utils/DarkTheme/ThemeManager';
import { LanguageManager } from './src/utils/Language/LanguageManager';
import { FontsizeManager } from './src/utils/FontSize/FontSizeManager';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BackgroundHeader from './components/BackgroundHeader';
import ATipsScreen from './screens/ATipsScreen';
import SplashScreen from 'react-native-splash-screen'


const Tab = createMaterialTopTabNavigator();
const AppStack = createStackNavigator();
// const SearchStack = createStackNavigator();

const AppStackScreen = () => {


  const { mode, theme: themeforDarkMode, toggle } = useTheme();
  return (
    <AppStack.Navigator>
      {/* MyTabs is rendered here so that content and search screen doesnot show the tabs */}

      <AppStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={MyTabs}
      />
      <AppStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Content"
        component={ContentScreen}
      />
      <AppStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ATips"
        component={ATipsScreen}
      />
      <AppStack.Screen
        name="Search"
        options={{
          headerTitle: (props) => (
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                {...props}
                style={{
                  color: 'white',
                  fontSize: 18,
                }}>
                Search
              </Text>
            </View>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: themeforDarkMode.primaryHeader,
          },
          headerTintColor: '#fff',
        }}
        component={SearchScreen}
      />
    </AppStack.Navigator>
  );
};
// const SearchStackScreen = ()=>{
//   return(
//     <SearchStack.Navigator>
//          <SearchStack.Screen   name="Search" component={SearchScreen} />
//       </SearchStack.Navigator>
//   )
// }

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BackgroundHeader {...props} />}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarkScreen} />
      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
      /> */}
      <Tab.Screen name="Notes" component={NoteScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

// const HomeStack = createStackNavigator();
// const HomeStackScreen = () => {
//   return (
//     <HomeStack.Navigator>
//       {/* <HomeStack.Screen
//         name="Onboarding"
//         component={OnboardingScreen}
//         options={{ headerShown: false }}
//       />
//       <HomeStack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerShown: false }}
//       />
//       <HomeStack.Screen
//         name="Register"
//         component={RegistrationScreen}
//         options={{ headerShown: false }}
//       />  */}
//       <HomeStack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//      <HomeStack.Screen
//         name="Setting"
//         component={SettingScreen}
//         options={{ headerShown: false }}
//       />
//        <HomeStack.Screen name="Content" component={ContentScreen} />
//        <HomeStack.Screen
//         name="Search"
//         component={SearchScreen}
//         options={({ navigation }) => ({
//           headerTitle: (props) => (
//             <Text
//               {...props}
//               style={{
//                 color: 'white',
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 backgroundColor: colors.primary,
//               }}>
//               Search
//             </Text>
//           ),
//           headerStyle: {
//             backgroundColor: colors.primary,
//           },
//           headerTintColor: '#fff',
//         })}
//       />
//       <HomeStack.Screen
//         name="Notes"
//         component={NoteScreen}
//         options={{ headerShown: false }}
//       />
//       <HomeStack.Screen
//         name="Bookmarks"
//         component={BookmarkScreen}
//         options={{ headerShown: false }}
//       />
//     <HomeStack.Screen
//         name="TermsAndConditions"
//         component={TermsAndConditionsScreen}
//         options={({ navigation }) => ({
//           headerTitle: (props) => (
//             <Text
//               {...props}
//               style={{
//                 color: 'white',
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 backgroundColor: colors.primary,
//               }}>
//               Terms and Conditions
//             </Text>
//           ),
//           headerStyle: {
//             backgroundColor: colors.primary,
//           },
//           headerTintColor: '#fff',
//         })}
//       />
//        <HomeStack.Screen
//         name="PrivacyPolicy"
//         component={PrivacyPolicyScreen}
//         options={({ navigation }) => ({
//           headerTitle: (props) => (
//             <Text
//               {...props}
//               style={{
//                 color: 'white',
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 backgroundColor: colors.primary,
//               }}>
//               Privacy and Policy
//             </Text>
//           ),
//           headerStyle: {
//             backgroundColor: colors.primary,
//           },
//           headerTintColor: '#fff',
//         })}
//       />
//        <HomeStack.Screen
//         name="AboutUs"
//         component={AboutUsScreen}
//         options={({ navigation }) => ({
//           headerTitle: (props) => (
//             <Text
//               {...props}
//               style={{
//                 color: 'white',
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 backgroundColor: colors.primary,
//               }}>
//               About Us
//             </Text>
//           ),
//           headerStyle: {
//             backgroundColor: colors.primary,
//           },
//           headerTintColor: '#fff',
//         })}
//       />
//     </HomeStack.Navigator>
//   );
// };

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => SplashScreen.hide());
  const scheme = useColorScheme();
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
    <AppearanceProvider>
      <ThemeManager>
        <LanguageManager>
          <FontsizeManager>
            <NavigationContainer>
              <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawerH" component={AppStackScreen} />
              </Drawer.Navigator>
            </NavigationContainer>
          </FontsizeManager>
        </LanguageManager>
      </ThemeManager>
    </AppearanceProvider>
  );
  // }
  // else{
  //   return  <LoginScreen/>;
  // }
};

export default App;
