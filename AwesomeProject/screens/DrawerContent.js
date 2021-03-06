import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {colors} from '../constants/theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
import {useLanguage} from '../src/utils/Language/LanguageManager';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
import {AuthContext} from '../src/utils/Authentication/AuthProvider';

const Icon = createIconSetFromFontello(fontelloConfig);

const DrawerContent = (props) => {
  const {user} = useContext(AuthContext);
  const {languageMode, languageData, toogleLanguage} = useLanguage();
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: themeforDarkMode.cardBox}]}>
      <View
        style={[
          styles.drawerTop,
          // { backgroundColor: themeforDarkMode.drawertopBackground },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.9,
            alignItems: 'center',
            paddingLeft: 18,
          }}>
          <Image
            style={{height: 55, width: 56}}
            source={require('../assets/images/medicos.png')}
          />
          <View style={{paddingLeft: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
              Vivek Neupane
            </Text>
            <Text style={{color: 'white', fontSize: 10}}>
              {user ? user.email : 'vivekneuapane11@gmail.com'}
            </Text>
          </View>
        </View>
        <Text style={{color: '#9DA3B4', fontSize: 14, paddingHorizontal: 15}}>
          You are 5 share away from becoming our premium user.
        </Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <View style={styles.drawerLinks}>
            <Icon
              style={{
                paddingVertical: 2,
                paddingHorizontal: 6,
                fontWeight: 'bold',
              }}
              name="home-outline"
              size={18}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>{languageData.home}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerLinks}>
            <Icon
              style={{paddingVertical: 2, paddingHorizontal: 6}}
              name="bookmark-empty"
              size={18}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>{languageData.bookmarks}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerLinks}>
            <Icon
              style={{paddingVertical: 2, paddingHorizontal: 6}}
              name="sticky-note-o"
              size={18}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>{languageData.notes}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerLinks}>
            <Icon
              style={{paddingVertical: 2, paddingHorizontal: 6}}
              name="info-circled-alt"
              size={18}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>
              {languageData.invitemorefriends}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerLinks}>
            <Icon
              style={{paddingVertical: 2, paddingHorizontal: 6}}
              name="star-empty"
              size={18}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>{languageData.rateus}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerLinks}>
            <Icon
              style={{paddingVertical: 2, paddingHorizontal: 6}}
              name="globe"
              size={18}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>
              {languageData.joinourcommunity}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.drawerLinks}>
            <Icon
              style={{paddingVertical: 2, paddingHorizontal: 6}}
              name="award"
              size={22}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>Premium Contents</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 5}}>
          <View style={[styles.drawerLinks, styles.drawerLinkBottom]}>
            <Icon
              style={{paddingVertical: 1, paddingHorizontal: 6}}
              name="logout"
              size={18}
              color={colors.gray}
            />
            <Text style={styles.drawerLink}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  drawerTop: {
    paddingVertical: 10,
    height: W / 2.4,
    backgroundColor: colors.primary,
    borderBottomRightRadius: W / 7,
    justifyContent: 'center',
    marginBottom: 15,
    // alignItems:'center'
  },
  drawerLinks: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',

    alignItems: 'center',
    // borderColor: 'lightgray',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  //   drawerLinkBottom: {
  //     borderBottomWidth: 1,
  //   },
  drawerLink: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray,
  },
});
