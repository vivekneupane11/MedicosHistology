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


const AboutUsScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: (props) => (
                    <View style={{ justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
                        <Text {...props} style={{ color: 'white', fontSize: 18, backgroundColor: colors.primary }}>About Us</Text>

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
                    <Text style={styles.contentParagraphTypography}>Medicos built the Medicos Histology app as a Free app. This SERVICE is provided by Medicos at no cost and is intended for use as is.
                       </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Medicos Histology unless otherwise defined in this Privacy Policy.  </Text>
                </View>
                <Text style={styles.contentTitleText}>Information Collection and Use</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} >For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.

</Text>
                    <Text style={styles.contentParagraphTypography}>The app does use third party services that may collect information used to identify you. </Text>

                    <Text style={styles.contentParagraphTypography}>Link to privacy policy of third party service providers used by the app </Text>
                    <View style={styles.listContentBox}>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Google Play Services</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>AdMob</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Google Analytics for Firebase</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Firebase Crashlytics</Text>
                        </Unorderedlist>
                    </View>
                </View>
               
                <Text style={styles.contentTitleText}>Log Data</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} >We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. </Text>
                </View>
                <Text style={styles.contentTitleText}>Cookies</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. </Text>
                </View>
                <Text style={styles.contentTitleText}>Service Providers</Text>

                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>We may employ third-party companies and individuals due to the following reasons: </Text>
                    <View style={styles.listContentBox}>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>To facilitate our Service;</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>To provide the Service on our behalf;</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>To perform Service-related services; or</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>To assist us in analyzing how our Service is used.</Text>
                        </Unorderedlist>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose. </Text>
                </View>
                <Text style={styles.contentTitleText}>Security</Text>

                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. </Text>
                </View>
                <Text style={styles.contentTitleText}>Links to Other Sites</Text>

                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. </Text>
                </View>
                <Text style={styles.contentTitleText}>Children’s Privacy</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. </Text>
                </View>
                <Text style={styles.contentTitleText}>Changes to This Privacy Policy</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>This policy is effective as of 2021-01-03</Text>
                </View>
                <Text style={styles.contentTitleText}>Contact Us</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at medicos.int7@gmail.com. </Text>
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
        marginTop:25,
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

export default AboutUsScreen;