import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
import { colors } from '../constants/theme';
import fontelloConfig from '../src/config.json';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const Icon = createIconSetFromFontello(fontelloConfig);

const width = Dimensions.get('screen').width;
const height = width / 1.61;


const PrivacyPolicyScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: (props) => (
                    <View style={{ justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
                        <Text {...props} style={{ color: 'white', fontSize: 18, backgroundColor: colors.primary }}>Privacy Policy</Text>

                    </View>
                ),
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: '#fff'
            }
        );
    }, [navigation])
    return (
        <ScrollView>
            <View style={styles.wrapper}>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>We are dreamers, thinkers and do-ers rolled into one.Together, we want to improve the
                    healthcare experience for all humanity. We are guided by our values and driven by our
                    motto to do great. These are not just principles for our products or our company, but
                    they are a reflection of who we are as people.</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>Medicos is an group of enthusiastic medical student who has dream to bring changes in
                    the medical field through technology. The ideas are arises from the group of medical
                    student who were passionate about doing something new which would provide quality
                    education to the medical students and more importantly, provide affordable and quality
                    health care to a large population of world.</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>Our Products Are:</Text>
                    <View style={styles.listContentBox}>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Pdf</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Medicine</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos ECG</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Peida</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Histology</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Radiology</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Abbreviation</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Dental Material</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Medicos Surgery</Text>
                        </Unorderedlist>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.lightWhite
    },
    contentBox: {
        paddingHorizontal: 25,
        paddingVertical: 5
    },
    contentParagraphTypography: {
        lineHeight: 22,
        textAlign: 'justify',
        fontSize: 17,
        fontFamily: 'LiberationSerif-Regular',

    },
    contentTitleText: {
        marginTop: 25,
        marginBottom: 10,
        marginHorizontal: 10,
        fontFamily: 'PTSerif-Bold',
        fontSize: 24,
        color: '#156B9A'
    },
    listContentBox: {

    },
    unorderedlist: {
        marginLeft: 14,
        fontSize: 18
    },

})

export default PrivacyPolicyScreen;