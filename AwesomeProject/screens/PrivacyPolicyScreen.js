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
const data = require('./data.json');


const PrivacyPolicyScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerTitle: (props) => (
                    <View style={{ justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
                        <Text {...props} style={{ color: 'white', fontSize: 18, backgroundColor: colors.primary }}>Terms And Conditions</Text>

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
                    <Text style={styles.contentParagraphTypography}> Medicos built the Medicos Histology app as a Free app. This SERVICE is provided by Medicos at no cost and is intended for use as is.
                       </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}> This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}> If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Medicos Histology unless otherwise defined in this Privacy Policy.  </Text>
                </View>
                <Text style={styles.contentTitleText}>Information Collection and Use</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} > For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.

</Text>
                    <Text style={styles.contentParagraphTypography}> The app does use third party services that may collect information used to identify you. </Text>

                    <Text style={styles.contentParagraphTypography}> Link to privacy policy of third party service providers used by the app </Text>
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
                            <Text style={styles.contentParagraphTypography}>    Firebase Crashlytics

</Text>
                        </Unorderedlist>
                    </View>
                </View>

                <Text style={styles.contentTitleText}>Log Data</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} > We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. </Text>

                </View>
                <Text style={styles.contentTitleText}>Cookies</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} > Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. </Text>

                </View>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}> This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. </Text>
            </View>


            <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} > For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.

</Text>
                    <Text style={styles.contentParagraphTypography}> The app does use third party services that may collect information used to identify you. </Text>

                    <Text style={styles.contentParagraphTypography}> Link to privacy policy of third party service providers used by the app </Text>
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
                            <Text style={styles.contentParagraphTypography}>    Firebase Crashlytics

</Text>
                        </Unorderedlist>
                    </View>
                </View>








            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>We may consider and approve other link requests from the following types of organizations:</Text>
                <View style={styles.listContentBox}>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>commonly-known consumer and/or business information sources;</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>dot.com community sites;</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>associations or other groups representing charities;</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>online directory distributors;</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>internet portals;</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>accounting, law and consulting firms; and</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>educational institutions and trade associations.</Text>
                    </Unorderedlist>
                </View>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Medicos Histology; and (d) the link is in the context of general resource information.</Text>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>These organizations may link to our App so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</Text>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our App, you must inform us by sending an e-mail to Medicos Histology. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our App, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</Text>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>Approved organizations may hyperlink to our App as follows:</Text>
                <View style={styles.listContentBox}>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>By use of our corporate name; or</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>By use of the uniform resource locator being linked to; or</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>By use of any other description of our App being linked to that makes sense within the context and format of content on the linking party’s site.</Text>
                    </Unorderedlist>
                </View>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>No use of Medicos Histology's logo or other artwork will be allowed for linking absent a trademark license agreement.</Text>
            </View>
            <Text style={styles.contentTitleText}>iFrames</Text>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our App.</Text>
            </View>
            <Text style={styles.contentTitleText}>Content Liability</Text>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>We shall not be hold responsible for any content that appears on your App. You agree to protect and defend us against all claims that is rising on our App. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</Text>
            </View>
            <Text style={styles.contentTitleText}>Your Privacy</Text>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>Please read Privacy Policy.</Text>
            </View>
            <Text style={styles.contentTitleText}>Reservation of Rights</Text>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>We reserve the right to request that you remove all links or any particular link to our App. You approve to immediately remove all links to our App upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our App, you agree to be bound to and follow these linking terms and conditions.</Text>
            </View>
            <Text style={styles.contentTitleText}>Removal of links from our App</Text>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>If you find any link on our App that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</Text>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</Text>
            </View>

            <Text style={styles.contentTitleText}>Disclaimer</Text>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our App and the use of this website. Nothing in this disclaimer will:</Text>
                <View style={styles.listContentBox}>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>limit or exclude our or your liability for death or personal injury;</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>limit any of our or your liabilities in any way that is not permitted under applicable law; or</Text>
                    </Unorderedlist>
                    <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                        <Text style={styles.contentParagraphTypography}>exclude any of our or your liabilities that may not be excluded under applicable law.</Text>
                    </Unorderedlist>
                </View>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</Text>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentParagraphTypography}>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. </Text>
            </View>
            </View>
        </ScrollView >
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