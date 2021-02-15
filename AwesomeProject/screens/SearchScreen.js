import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
import { usefontsize } from '../src/utils/FontSize/FontSizeManager';
const Icon = createIconSetFromFontello(fontelloConfig);
import { mocks } from '../constants';
import { colors } from '../constants/theme';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../src/utils/responsive';
import InputTextField from '../components/InputTextField';
import { useTheme } from '../src/utils/DarkTheme/ThemeManager';
const SearchScreen = ({ navigation }) => {
  const { mode, theme: themeforDarkMode, toggle } = useTheme();
  const [searchText, setSearchText] = useState('Search');

  const { fontsizeMode } = usefontsize();

  let filteredContent = mocks.topics.map(
    (content) => {
      return content.subtopics.filter((content) => {
        return content.title.toLowerCase().startsWith(searchText.toLowerCase());
      })
    }
  )
  let searchContent = filteredContent.filter(item => item.length > 0)
  return (

    <ScrollView
      style={[
        styles.wrapper,
        { backgroundColor: themeforDarkMode.secondaryHeader },
      ]}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          styles.header,
          { backgroundColor: themeforDarkMode.primaryHeader },
        ]}>
        <View style={styles.search}>
          {/* <Icon style={{padding:4}} name="search" size={24} color={colors.gray} /> */}
          <InputTextField
            iconname="search"
            style={[{ height: 40, color:'black' }]}
            placeholderText="Search Histology"
            onChangeText={text => setSearchText(text)}
            isBorder={false}
/>
        </View>
        {/* Search bar end */}

        {/* Searched box end */}
      </View>
      {/* Header end  */}
      <View style={styles.container}>
        {
          searchContent.map(data => {
            return data.map(item => {
              return <View
                style={[
                  styles.searchContentBox,
                  styles.shadow,
                  styles.f_r_sa_c,
                  { backgroundColor: themeforDarkMode.cardBox },
                ]}>
                <Image
                  resizeMode='contain'
                  source={item.imgPath}
                  style={styles.imageStyle}
                />
                <View style={styles.searchContent}>
                  <Text
                    style={[
                      styles.searchContentTitle,
                      {
                        color: themeforDarkMode.secondaryText,
                      },
                    ]}>
                    {item.title}
                  </Text>
                  <Text style={[
                    styles.searchContentText,
                    fontsizeMode == 'S' && styles.typographySmall,
                    fontsizeMode == 'M' && styles.typographyMedium,
                    fontsizeMode == 'L' && styles.typographyLarge,
                  ]}>
                    {item.count}
                  </Text>
                </View>
              </View>
            })

          })
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.lightWhite,
    flex: 1,
    height: 'auto',
  },
  header: {
    // height: (width) / 3,
    // backgroundColor: colors.primary,
    borderBottomLeftRadius: 30.5,
    borderBottomRightRadius: 30.5,
    // paddingTop: 20,
    alignItems: 'center',
    // marginBottom: 90,
    height: heightPercentageToDP(16.5),
    paddingTop: heightPercentageToDP(2.4),
    // marginBottom: heightPercentageToDP(10.9),
  },
  search: {
    alignItems: 'center',
    // paddingVertical: 4,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    // width: '90%',
    borderRadius: 25,
    // marginHorizontal: 20,
    paddingVertical: heightPercentageToDP(0.6),
    paddingHorizontal: widthPercentageToDP(3.5),
    // marginHorizontal:widthPercentageToDP(2.4),
    width: widthPercentageToDP(90),
  },
  searchContentBox: {
    // paddingHorizontal: 7,
    // paddingVertical:7,
    // marginTop: 25,
    backgroundColor: colors.lightWhite,
    borderRadius: 11,
    paddingVertical: heightPercentageToDP(0.8),
    paddingHorizontal: widthPercentageToDP(1.6),
    marginTop: heightPercentageToDP(3),
  },
  imageStyle: {
    // height: 85,
    // width: 82,
    borderRadius: 5,
    height: heightPercentageToDP(10.5),
    width: widthPercentageToDP(20),
  },
  searchContent: {
    width: "55%",
    // paddingHorizontal: 10,
    // width: widthPercentageToDP(63),
    paddingHorizontal: widthPercentageToDP(2.5),
  },
  searchContentTitle: {
    flex: 0.6,

    color: 'black',
    // fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: widthPercentageToDP(3.9),
  },
  searchContentText: {
    paddingVertical: heightPercentageToDP(0.7),
    flex: 1,
    color: 'gray',
    // lineHeight: 14,
    textAlign: 'center',
    // fontSize: 14,
    fontFamily: 'LiberationSerif-Regular',
    fontSize: widthPercentageToDP(3.4),
    lineHeight: heightPercentageToDP(1.65),
  },
  container: {
    alignItems: 'center',
  },
  similar: {
    // marginHorizontal: 15,
    color: 'gray',
    // fontSize: 16,
    // fontFamily: 'Roboto-Bold',
    fontSize: widthPercentageToDP(3.9),
    marginHorizontal: widthPercentageToDP(3.5),
  },
  similarContentBox: {
    // paddingHorizontal: 7,
    // paddingVertical: 7,
    backgroundColor: colors.lightWhite,
    borderRadius: 11,
    paddingVertical: heightPercentageToDP(0.8),
    marginTop: heightPercentageToDP(3),
  },
  similarContent: {
    width: '65%',
    paddingHorizontal: 10,
    // width: widthPercentageToDP(63),
    paddingHorizontal: widthPercentageToDP(2.5),
  },
  similarContentTitle: {
    color: 'black',
    // fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    fontSize: widthPercentageToDP(3.9),
    marginBottom: heightPercentageToDP(1)
  },
  similarContentText: {
    color: 'gray',
    // lineHeight: 14,
    textAlign: 'justify',
    // fontSize: 14,
    fontFamily: 'LiberationSerif-Regular',
    fontSize: widthPercentageToDP(3.4),
    lineHeight: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
  },
  f_r_sa_c: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  typographySmall: {
    fontSize: widthPercentageToDP(3),
  },
  typographyMedium: {
    fontSize: widthPercentageToDP(4),
  },
  typographyLarge: {
    fontSize: widthPercentageToDP(6),
  },
});

export default SearchScreen;
