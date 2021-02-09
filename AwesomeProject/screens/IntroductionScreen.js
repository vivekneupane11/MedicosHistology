import React, { useState, useEffect, useLayoutEffect } from 'react';
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
import { colors } from '../constants/theme';
import fontelloConfig from '../src/config.json';
import { theme, mocks } from '../constants';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { useTheme } from '../src/utils/DarkTheme/ThemeManager';
const Icon = createIconSetFromFontello(fontelloConfig);
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from '../src/utils/responsive';

const IntroductionScreen = ({ navigation, route }) => {
    const { mode, theme: themeforDarkMode, toggle } = useTheme();
    return (
        <ScrollView
            style={{
                backgroundColor: themeforDarkMode.contentBackground,
            }}>
            <View style={styles.contentContainer}>
                {
                    mocks.introductionImages.map((images) => {
                        return <Image style={styles.imageStyle} resizeMode="contain" source={images.image} />
                    })
                }
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
    contentParagraphTypography: {
        // lineHeight: 22,
        textAlign: 'justify',
        // fontSize: 17,
        fontFamily: 'LiberationSerif-Regular',
        lineHeight: heightPercentageToDP(2.9),
        fontSize: widthPercentageToDP(4),
    },
    contentBox: {
        // paddingHorizontal: 25,
        // paddingVertical: 5,
        paddingHorizontal: widthPercentageToDP(5.8),
        paddingVertical: heightPercentageToDP(0.5),
    },
    unorderedlist: {
        // marginBottom:heightPercentageToDP(5)
    },
    imageStyle: {
        alignSelf:'center',
        height: heightPercentageToDP(76),
        width: widthPercentageToDP(95)
    }
});

export default IntroductionScreen;
