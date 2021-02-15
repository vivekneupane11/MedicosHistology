import {ThemeColors as ReactNavigationThemeColors} from '@react-navigation/native';

export const ThemeColors = {
  primaryText: {
    light: 'black',
    dark: 'white',
  },
  secondaryText: {
    light: 'black',
    dark: 'lightgray',
  },
  contentParagraphTypography:{
    light:'black',
    dark:'lightgray'
  },
  subTitle:{
    light:'black',
    dark:'#d4c69e'
  },
  title:{
    light:'#156B9A',
    dark:'white'
  },
  primaryBackground: {
    light: '#F1F1F1',
    dark: '#1c1c1c',
  },
  primaryHeader: {
    light: '#3F3D56',
    dark: '#1c1c1c',
  },
  drawertopBackground: {
    dark: '#3c3c3c',
    light: '#f9f9f9',
  },
  secondaryHeader: {
    light: '#F1F1F1',
    dark: '#2C2C2C',
  },
  cardBox: {
    dark: '#1c1c1c',
    light: '#F1F1F1',
  },
  contentBackground: {
    light: 'lightgrey',
    dark: '#2C2C2C',
  },
  topCategoryText: {
    light: '#000000',
    dark: '#FFFFFF',
  },
 
  premiumContentBackground: {
    light: '#3F3D56',
    dark: '#2C2C2C',
  },
};

export const getTheme = (mode) => {
  let Theme = {};
  for (let key in ThemeColors) {
    Theme[key] = ThemeColors[key][mode];
  }
  console.log('Theme', Theme);
  return Theme;
};
