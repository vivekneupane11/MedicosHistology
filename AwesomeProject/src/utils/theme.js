import { ThemeColors as ReactNavigationThemeColors } from '@react-navigation/native'


export const ThemeColors = {
    primaryText: {
       light: 'black',
       dark: 'white',
    

    },
    primaryBackground: {
       light: 'white',
       dark: 'black',
    

    },
 

 };

 export const getTheme = (mode) => {
    let Theme = {};
    for (let key in ThemeColors) {
       Theme[key] = ThemeColors[key][mode];
    }
    console.log("Theme",Theme);
    return Theme;
 };