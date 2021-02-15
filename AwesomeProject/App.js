import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';
import {StatusBar, View, Text} from 'react-native';
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
import auth from '@react-native-firebase/auth';
import RegistrationScreen from './screens/RegistrationScreen';
import HomeScreen from './screens/HomeScreen';
import ContentScreen from './screens/ContenScreen';
import SearchScreen from './screens/SearchScreen';
import SettingScreen from './screens/SettingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent';
import BookmarkScreen from './screens/BookmarkScreen';
import NoteScreen from './screens/NoteScreen';
import TermsAndConditionsScreen from './screens/TermsAndConditionsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import {colors} from './constants/theme';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {enableScreens} from 'react-native-screens';
import {useTheme, ThemeManager} from './src/utils/DarkTheme/ThemeManager';
import {LanguageManager} from './src/utils/Language/LanguageManager';
import {FontsizeManager} from './src/utils/FontSize/FontSizeManager';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BackgroundHeader from './components/BackgroundHeader';
import ATipsScreen from './screens/ATipsScreen';
import SplashScreen from 'react-native-splash-screen';
import CollectionScreen from './screens/CollectionScreen';
import BasicHistologyScreen from './screens/BasicHistologyScreen';
import StainingScreen from './screens/StainingScreen';
import IntroductionScreen from './screens/IntroductionScreen';

import {AuthContext} from './src/utils/Authentication/AuthProvider';
import {AuthProvider} from './src/utils/Authentication/AuthProvider';
enableScreens();

const Tab = createMaterialTopTabNavigator();
const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
// const SearchStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
const AppStackScreen = () => {
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  return (
    <AppStack.Navigator>
      {/* MyTabs is rendered here so that content and search screen doesnot show the tabs */}
      {/* <AppStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
       <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      /> */}
      <AppStack.Screen
        options={{headerShown: false}}
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
                A+ Tips
              </Text>
            </View>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: themeforDarkMode.primaryHeader,
          },
          headerTintColor: '#fff',
        }}
        name="ATips"
        component={ATipsScreen}
      />
      <AppStack.Screen
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
                Introduction
              </Text>
            </View>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: themeforDarkMode.primaryHeader,
          },
          headerTintColor: '#fff',
        }}
        name="Introduction"
        component={IntroductionScreen}
      />
      <AppStack.Screen
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
                Basic Histology
              </Text>
            </View>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: themeforDarkMode.primaryHeader,
          },
          headerTintColor: '#fff',
        }}
        name="BasicHistology"
        component={BasicHistologyScreen}
      />
      <AppStack.Screen
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
                Staining
              </Text>
            </View>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: themeforDarkMode.primaryHeader,
          },
          headerTintColor: '#fff',
        }}
        name="Staining"
        component={StainingScreen}
      />
      <AppStack.Screen
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
                Collections
              </Text>
            </View>
          ),
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            backgroundColor: themeforDarkMode.primaryHeader,
          },
          headerTintColor: '#fff',
        }}
        name="Collections"
        component={CollectionScreen}
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

      <AppStack.Screen
        name="TermsAndConditions"
        component={TermsAndConditionsScreen}
        options={({navigation}) => ({
          headerTitle: (props) => (
            <Text
              {...props}
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                backgroundColor: colors.primary,
              }}>
              Terms and Conditions
            </Text>
          ),
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        })}
      />
      <AppStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={({navigation}) => ({
          headerTitle: (props) => (
            <Text
              {...props}
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                backgroundColor: colors.primary,
              }}>
              Privacy and Policy
            </Text>
          ),
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        })}
      />
      <AppStack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={({navigation}) => ({
          headerTitle: (props) => (
            <Text
              {...props}
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                backgroundColor: colors.primary,
              }}>
              About Us
            </Text>
          ),
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        })}
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
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'powderblue'},
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
const AppRoutes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [isuser, setisUser] = useState('');
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; //unsubscribe on onmount
  });
  useEffect(() => {
    AsyncStorage.getItem('userinfo').then((user) => {
      setisUser(JSON.parse(user));
      console.log(isuser, '//////////////////////');
    });
  }, [user]);
  const Drawer = createDrawerNavigator();

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

  if (initializing) return null;
  return (
    <AppearanceProvider>
      <ThemeManager>
        <LanguageManager>
          <FontsizeManager>
            <NavigationContainer>
              {user || isuser == 1 ? (
                <Drawer.Navigator
                  drawerContent={(props) => <DrawerContent {...props} />}>
                  <Drawer.Screen
                    name="HomeDrawerH"
                    component={AppStackScreen}
                  />
                </Drawer.Navigator>
              ) : (
                <AuthStackScreen />
              )}
            </NavigationContainer>
          </FontsizeManager>
        </LanguageManager>
      </ThemeManager>
    </AppearanceProvider>
  );
};
const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 500);
  }, []);
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
  // }
  // else{
  //   return  <LoginScreen/>;
  // }
};

export default App;
