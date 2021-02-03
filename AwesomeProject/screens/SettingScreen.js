import React,{useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Switch,
  Alert,
} from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import {colors} from '../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';
import {useLanguage} from '../src/utils/Language/LanguageManager';
import {usefontsize} from '../src/utils/FontSize/FontSizeManager';
const {width} = Dimensions.get('window');
import {Picker} from '@react-native-picker/picker';
const SettingScreen = ({navigation}) => {
 
//  My Custom Hooks
 
  const {languageMode,languageData, toogleLanguage} = useLanguage();
  const {  fontsizeMode ,fontsizeData, tooglefontsize} = usefontsize();
  const { mode, theme : themeforDarkMode , toggle } = useTheme();
   
console.log(fontsizeMode,fontsizeData,tooglefontsize);

  //My Custom Hooks Ends Here
  
  //State for font and language picker
  const [language,setlanguage] = useState({
    language:'eng'
  });
    
  const [fontsize,setfontsize] = useState({
    fontsize:'M'
  });
console.log("asasasasasasas",fontsize);
  //End state  for font and language picker
  const [isDarkMode, setisDarkMode] = useState(false);
  const toogleDarkMode = () => {
    setisDarkMode(previousState => !previousState);
    toggle();
  } 
  const [isPushNotification, setisPushNotification] = useState(false);
 
  const tooglePushNotification = () => setisPushNotification(previousState => !previousState);
  return (
    <ScrollView>
       <View style={{ backgroundColor: themeforDarkMode.primaryBackground}}>
        <Text style={{ color: themeforDarkMode.primaryText }}>
           Current themeforDarkMode: {mode}
           Current themeforDarkMode: {mode}
           Current themeforDarkMode: {mode}
           Current themeforDarkMode: {mode}
           Current themeforDarkMode: {mode}
           Current themeforDarkMode: {mode}
        </Text>
      </View>

      <View style={styles.settingsContainer}>
        <View style={[styles.settingsSection, styles.shadow]}>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon style={{flex: 1.5}} name="user" size={18} color="#ABB4BD" />
            <Text style={{flex: 9}}>{languageData.accounts}</Text>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <View style={[styles.list, styles.f_r_sb_c]}>
            <Icon style={{flex: 1.5}} name="bell" size={18} color="#ABB4BD" />
            <Text style={{flex: 7}}>{languageData.pushnotification}</Text>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
            <Switch
        trackColor={{ false: "#767577", true: colors.secondary }}
        thumbColor={isPushNotification ? colors.secondary : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={tooglePushNotification}
        value={isPushNotification}
      />
          </View>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon style={{flex: 1.5}} name="font" size={18} color="#ABB4BD" />
            <Text style={{flex: 6}}>{languageData.fontsize}</Text>

            <Picker  style={{flex: 6}}
  selectedValue={fontsize.fontsize}
  style={{height: 50, width: 90}}
  onValueChange={(itemValue, itemIndex) =>{
    console.log("ssss",itemValue);
     tooglefontsize(itemValue)
    setfontsize({fontsize: itemValue})
 
  }

  }>
  <Picker.Item label="12" value="S" />
  <Picker.Item label="14" value="M" />
  <Picker.Item label="18" value="L" />

</Picker>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon
              style={{flex: 1.5}}
              name="sticky-note-o"
              size={18}
              color="#ABB4BD"
            />
            <Text style={{flex: 9}}>{languageData.notes}</Text>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.endlist, styles.f_r_sb_c]}>
            <Icon
              style={{flex: 1.5}}
              name="language"
              size={18}
              color="#ABB4BD"
            />
            <Text style={{flex: 5 }}>{languageData.language}</Text>

            <Picker  style={{flex: 6}}
  selectedValue={language.language}
  style={{height: 50, width: 130}}
  onValueChange={(itemValue, itemIndex) =>{
    console.log("ssss",itemValue);
     toogleLanguage(itemValue)
    setlanguage({language: itemValue})
 
  }

  }>
  <Picker.Item label="English" value="eng" />
  <Picker.Item label="हिन्दी" value="ind" />
  <Picker.Item label="Española" value="spa" />
  <Picker.Item label="عربى" value="ara" />
  <Picker.Item label="русский" value="rus" />
</Picker>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <View style={[styles.endlist, styles.f_r_sb_c]}>
            <Icon
              style={{flex: 1.5}}
              name="fog-sun"
              size={18}
              color="#ABB4BD"
            />
            <Text style={{flex: 9}}>{languageData.darkmode}</Text>
            <Switch
             trackColor={{ false: "#767577", true: colors.secondary }}
             thumbColor={isDarkMode ? colors.secondary : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toogleDarkMode}
        value={isDarkMode}
      />
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </View>
        </View>
        {/* First Section */}
        <View style={[styles.settingsSection, styles.shadow]}>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon style={{flex: 1.5}} name="globe" size={20} color="#ABB4BD" />
            <Text style={{flex: 9}}>{languageData.joinourcommunity}</Text>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon style={{flex: 1.5}} name="docs" size={18} color="#ABB4BD" />
            <Text style={{flex: 9}}>{languageData.privacypolicy}</Text>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon
              onPress={() => navigation.navigate('TermsAndConditions')}
              style={{flex: 1.5}}
              name="book-open"
              size={18}
              color="#ABB4BD"
            />
            <Text style={{flex: 9}}>{languageData.termsofservices}</Text>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon style={{flex: 1.5}} name="export" size={18} color="#ABB4BD" />
            <Text style={{flex: 9}}>{languageData.invitemorefriends}</Text>
            {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.list, styles.f_r_sb_c]}>
            <Icon
              style={{flex: 1.5}}
              name="info-circled-alt"
              size={18}
              color="#ABB4BD"
            />
            <Text style={{flex: 9}}>{languageData.aboutus}</Text>
            <Icon name="right-open-big" size={18} color="#ABB4BD" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.endlist, styles.f_r_sb_c]}>
            <Icon
              style={{flex: 1.5}}
              name="star-empty"
              size={18}
              color="#ABB4BD"
            />
            <Text style={{flex: 9}}>{languageData.rateus}</Text>
            <Icon name="right-open-big" size={18} color="#ABB4BD" />
          </TouchableOpacity>
        </View>
        {/* Second Section */}
        <View style={[styles.settingsSection, styles.shadow]}>
          <TouchableOpacity style={[styles.endlist, styles.f_r_sb_c]}>
            <Icon style={{flex: 1.5}} name="logout" size={20} color="#ABB4BD" />
            <Text style={{flex: 9}}>{languageData.logout}</Text>
            {/* <Icon name="cog" size={18} color="#ABB4BD" /> */}
          </TouchableOpacity>
        </View>
        {/* Third Section */}
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: colors.lightWhite,
  },
  settingsSection: {
    // marginVertical: width / 30,
    // marginHorizontal: width / 17 - 5,
    backgroundColor: colors.lightWhite,
    // paddingVertical: 10,
    // paddingHorizontal:10,
    borderRadius: 15,
    marginVertical:heightPercentageToDP(1.7),
    marginHorizontal:widthPercentageToDP(4.8),
    paddingHorizontal:widthPercentageToDP(2.7),
    paddingVertical:heightPercentageToDP(1.2)
  },
  list: {
    borderBottomWidth: 0.3,
    // paddingVertical: 14,
    borderColor: 'lightgray',
    // marginHorizontal: 20,
    paddingVertical:heightPercentageToDP(1.7),
    marginHorizontal:widthPercentageToDP(4.8),
  },
  endlist: {
    // paddingVertical: 14,
    // marginHorizontal: 20,
    paddingVertical:heightPercentageToDP(1.7),
    marginHorizontal:widthPercentageToDP(4.8),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  f_r_sb_c: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // f_r_sb_c: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  // },
});
