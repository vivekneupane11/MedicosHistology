import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Dimensions} from 'react-native';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
import {colors} from '../constants/theme';
import language from '../resources/language/index';
const Icon = createIconSetFromFontello(fontelloConfig);
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
import {useLanguage} from '../src/utils/Language/LanguageManager';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
export default function BackgroundHeader({navigation, ...props}) {
  const {languageMode, languageData, toogleLanguage} = useLanguage();
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  console.log('here', languageData.home, languageMode, toogleLanguage);
  console.log(themeforDarkMode);
  return (
    <SafeAreaView>
      <View style={{backgroundColor: themeforDarkMode.secondaryHeader}}>
        <View
          style={[
            styles.headercontainer,
            {backgroundColor: themeforDarkMode.primaryHeader},
          ]}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon
              style={{paddingHorizontal: 15}}
              name="menu-1"
              size={28}
              color={colors.gray}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Medicos Histology</Text>

          {/* <TouchableOpacity >  
                   <View style={styles.headertabiconGroup}>
                <Icon style={{paddingVertical:2}} name="search" size={24} color={colors.gray} />
               <Text style={{color:colors.gray,fontSize:10}}>{languageData.search}</Text>
                </View>
                </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Icon
              style={{paddingHorizontal: 15}}
              name="search"
              size={24}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.headerTabs,
            {backgroundColor: themeforDarkMode.primaryHeader},
          ]}>
          <View style={styles.headertabiconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View style={styles.headertabiconGroup}>
                <Icon
                  style={{paddingVertical: 2}}
                  name="home-outline"
                  size={24}
                  color={colors.gray}
                />
                <Text style={{color: colors.gray, fontSize: 10}}>
                  {languageData.home}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
              <View style={styles.headertabiconGroup}>
                <Icon
                  style={{paddingVertical: 2}}
                  name="bookmark-empty"
                  size={24}
                  color={colors.gray}
                />
                <Text style={{color: colors.gray, fontSize: 10}}>
                  {languageData.bookmarks}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notes');
              }}>
              <View style={styles.headertabiconGroup}>
                <Icon
                  style={{paddingVertical: 2}}
                  name="sticky-note-o"
                  size={24}
                  color={colors.gray}
                />
                <Text style={{color: colors.gray, fontSize: 10}}>
                  {languageData.notes}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <View style={styles.headertabiconGroup}>
                <Icon
                  style={{paddingVertical: 2}}
                  name="cog"
                  size={24}
                  color={colors.gray}
                />
                <Text style={{color: colors.gray, fontSize: 10}}>
                  {languageData.settings}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    height: W / 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.5)',
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    color: colors.white,
  },
  headerTabs: {
    height: W / 5.5,
    borderBottomLeftRadius: W / 10,
    borderBottomRightRadius: W / 10,
  },
  headertabiconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: W / 18,
    paddingTop: 10,
  },

  headertabiconGroup: {
    paddingVertical: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
