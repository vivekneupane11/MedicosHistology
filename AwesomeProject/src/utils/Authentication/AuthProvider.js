import React, {createContext, useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleError = (error, isFatal) => {
  // fetch
  console.log(error, isFatal);
  alert(error.name);
};

setJSExceptionHandler((error, isFatal) => {
  console.log('caught global error');
  handleError(error, isFatal);
}, false);
setNativeExceptionHandler((errorString) => {
  // do the things
});

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            await AsyncStorage.setItem('userinfo', JSON.stringify(1));
          } catch (err) {
            err.name =
              'Make sure Email and Password is correct. Also check your internet connection. ';
            console.log('Auth Login Error', err);
            handleError(err, false);
          }
        },
        register: async (email, password, confirmpassword) => {
          try {
            if (confirmpassword == password) {
              await auth().createUserWithEmailAndPassword(email, password);
              await AsyncStorage.setItem('userinfo', JSON.stringify(1));
            } else {
              let err = {};
              err.name = 'Make sure password and confirm password matches ';
              handleError(err, false);
            }
          } catch (err) {
            console.log('Auth register error', err);
            err.name =
              'Make sure email format is correct.And password contains more than 6 words. Also check your internet connection. ';
            handleError(err, false);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            await AsyncStorage.setItem('userinfo', JSON.stringify(0));
          } catch (err) {
            console.log('Authentication Login error', err);
            err.name = 'Check your internet connection. ';
            handleError(err, false);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
