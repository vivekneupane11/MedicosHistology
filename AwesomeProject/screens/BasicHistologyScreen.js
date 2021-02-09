import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
import {colors} from '../constants/theme';
import fontelloConfig from '../src/config.json';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
const Icon = createIconSetFromFontello(fontelloConfig);
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../src/utils/responsive';
import {usefontsize} from '../src/utils/FontSize/FontSizeManager';
const width = Dimensions.get('screen').width;
const height = width / 1.61;

const BasicHistologyScreen = ({navigation}) => {
  const [isBookmark, setisBookmark] = useState(false);
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  const {fontsizeMode} = usefontsize();

  console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrr', fontsizeMode);
  React.useLayoutEffect(() => {
    navigation.setOptions({
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
      headerStyle: {
        backgroundColor: themeforDarkMode.primaryHeader,
      },
      headerTintColor: '#fff',
    });
  }, [navigation, isBookmark]);
  return (
    <ScrollView
      style={{
        backgroundColor: themeforDarkMode.contentBackground,
      }}>
      <View style={styles.container}>
        <Slider />
        <Text style={styles.contentTitleText}>Introduction</Text>

        <View style={styles.contentContainer}>
          <View>
            <Text
              style={[
                styles.contentBox,
                styles.contentParagraphTypography,
                fontsizeMode == 'S' && styles.typographySmall,
                fontsizeMode == 'M' && styles.typographyMedium,
                fontsizeMode == 'L' && styles.typographyLarge,

                {color: themeforDarkMode.primaryText},
              ]}>
              Histology also known as microscopic anatomy or microanatomy is the
              branch of biology which studies the microscopic anatomy of
              biological tissues. Histology is the microscopic counterpart to
              gross anatomy, which looks at larger structures visible without a
              microscope. Although one may divide microscopic anatomy into
              organology, the study of organs, histology, the study of tissues,
              and cytology, the study of cells, modern usage places these topics
              under the field of histology. In medicine, histopathology is the
              branch of histology that includes the microscopic identification
              and study of diseased tissue. In the field of paleontology, the
              term paleohistology refers to the histology of fossil organisms.{' '}
            </Text>

            <View>
              <Text
                style={[
                  styles.contentSubTitleText,
                  {
                    color: themeforDarkMode.primaryText,
                    borderBottomColor: themeforDarkMode.primaryText,
                  },
                ]}>
                There are four basic types of animal tissues:
              </Text>

              <View style={styles.contentBox}>
                <Unorderedlist
                  bulletUnicode={0x2023}
                  style={styles.unorderedlist}>
                  <Text
                    style={[
                      styles.subTitle,
                      {color: themeforDarkMode.primaryText},
                    ]}>
                    Muscle tissue
                  </Text>
                </Unorderedlist>
                <Unorderedlist
                  bulletUnicode={0x2023}
                  style={styles.unorderedlist}>
                  <Text
                    style={[
                      styles.subTitle,
                      {color: themeforDarkMode.primaryText},
                    ]}>
                    Nervous tissue
                  </Text>
                </Unorderedlist>
                <Unorderedlist
                  bulletUnicode={0x2023}
                  style={styles.unorderedlist}>
                  <Text
                    style={[
                      styles.subTitle,
                      {color: themeforDarkMode.primaryText},
                    ]}>
                    Connective tissue
                  </Text>
                </Unorderedlist>
                <Unorderedlist
                  bulletUnicode={0x2023}
                  style={styles.unorderedlist}>
                  <Text
                    style={[
                      styles.subTitle,
                      {color: themeforDarkMode.primaryText},
                    ]}>
                    Epithelial tissue
                  </Text>
                </Unorderedlist>
                <Text
                  style={[
                    styles.contentBox,
                    styles.contentParagraphTypography,
                    {color: themeforDarkMode.primaryText},
                  ]}>
                  All animal tissues are considered to be subtypes of these four
                  principal tissue types \n (for example, blood is classified as
                  connective tissue, since the blood cells are suspended in an
                </Text>
              </View>
            </View>
          </View>
          {/* // Container for the introduction portion */}
        </View>
      </View>
      {/* Container */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // titleText: {
  //     fontFamily: 'Arial',
  //     fontWeight: 'bold',
  //     fontSize: 25,
  //     color: 'white'
  // },
  contentTitleText: {
    // marginTop: 25,
    // marginBottom: 10,
    textAlign: 'center',
    // marginHorizontal: 8,
    fontFamily: 'PTSerif-Bold',
    // fontSize: 35,
    color: colors.secondary,
    marginTop: heightPercentageToDP(3),
    marginBottom: heightPercentageToDP(1.3),
    marginHorizontal: widthPercentageToDP(0.8),
    fontSize: widthPercentageToDP(8.5),
  },
  contentSubTitleText: {
    // paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // marginBottom: 10,
    // marginHorizontal: 12,
    fontFamily: 'Roboto-Bold',
    // fontSize: 21,
    color: 'black',
    paddingTop: heightPercentageToDP(3.5),
    marginBottom: heightPercentageToDP(1),
    marginHorizontal: widthPercentageToDP(3.5),
    // fontSize: widthPercentageToDP(3.9),
    fontSize: widthPercentageToDP(5.1),
  },
  subTitle: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    // fontSize: 18,
    fontWeight: 'bold',
    fontSize: widthPercentageToDP(4.3),
  },

  modalContentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    flex: 1,
    width: '100%',
    // backgroundColor: 'yellow',
    // paddingHorizontal:widthPercentageToDP(1.5),
    // paddingVertical:heightPercentageToDP(2.5)
  },
  modalFooter: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.lightWhite,
  },
  modalContainer: {
    // paddingVertical: 100,
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(12),
  },
  modalWrapper: {
    flex: 1,
    // width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: widthPercentageToDP(85),
  },
  closeButtonText: {
    // flex:0.2,
    color: 'red',
    // fontSize: 16,
    fontSize: widthPercentageToDP(4),
  },
  saveButtonText: {
    // flex:0.5,
    color: colors.secondary,
    // fontSize: 16,
    fontSize: widthPercentageToDP(4),
  },
  modalCloseIcon: {
    flex: 0.2,
    color: 'red',
  },
  modalSaveIcon: {
    flex: 0.2,
    color: colors.secondary,
  },
  closeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: 'green',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
    flex: 1,
    // backgroundColor: colors.primary,
    borderColor: 'green',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: heightPercentageToDP(1.8),
  },
  modalTitle: {
    // marginHorizontal: 25,
    // paddingVertical: 12,
    textAlign: 'center',
    color: colors.secondary,
    // fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: widthPercentageToDP(6.5),
    paddingVertical: heightPercentageToDP(1.4),
    fontSize: widthPercentageToDP(6),
  },
  contentParagraphTypography: {
    // lineHeight: 22,
    textAlign: 'justify',
    // fontSize: 17,
    fontFamily: 'LiberationSerif-Regular',
    lineHeight: heightPercentageToDP(2.9),
  },
  typographySmall: {
    fontSize: widthPercentageToDP(2),
  },
  typographyMedium: {
    fontSize: widthPercentageToDP(4),
  },
  typographyLarge: {
    fontSize: widthPercentageToDP(6),
  },
  contentBox: {
    // paddingHorizontal: 25,
    // paddingVertical: 5,
    paddingHorizontal: widthPercentageToDP(5.8),
    paddingVertical: heightPercentageToDP(0.5),
  },
});

export default BasicHistologyScreen;
