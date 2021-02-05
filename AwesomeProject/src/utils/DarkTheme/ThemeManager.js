import React from 'react';
import {Appearance} from 'react-native-appearance';
import {getTheme} from './theme';

// set default colour scheme from OS
const osTheme = Appearance.getColorScheme();
console.log('lets check os theme',typeof osTheme);
let ostheme = (osTheme == "no-preference") ? "light" : osTheme;
 
// initiate context
export const ManageThemeContext = React.createContext({
  mode: ostheme,
  theme: getTheme(ostheme),
  toggle: () => {},
});

// define useTheme hook for functional components
export const useTheme = () => React.useContext(ManageThemeContext);

// initiate context provider
export class ThemeManager extends React.Component {
  state = {
    mode: ostheme,
  };

  componentDidUpdate() {
    console.log('theme updated');
  }

  toggleTheme = async () => {
    this.state.mode === 'light'
      ? this.setState({
          mode: 'dark',
        })
      : this.setState({
          mode: 'light',
        });
  };

  render() {
    return (
      <ManageThemeContext.Provider
        value={{
          mode: this.state.mode,
          theme: getTheme(this.state.mode),
          toggle: this.toggleTheme,
        }}>
        {this.props.children}
      </ManageThemeContext.Provider>
    );
  }
}

export default ThemeManager;
