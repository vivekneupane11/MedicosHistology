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


const TermsAndConditionsScreen = ({ navigation }) => {
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
                    <Text style={styles.contentParagraphTypography}>Welcome to Medicos Histology!
                       </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>These terms and conditions outline the rules and regulations for the use of Medicos Histology.
                       </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>By using this app we assume you accept these terms and conditions. Do not continue to use Medicos Histology if you do not agree to take all of the terms and conditions stated on this page.
                       </Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                       </Text>
                </View>
                <Text style={styles.contentTitleText}>License</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} >Unless otherwise stated, Medicos Histology and/or its licensors own the intellectual property rights for all material on Medicos Histology. All intellectual property rights are reserved. You may access this from Medicos Histology for your own personal use subjected to restrictions set in these terms and conditions.</Text>
                    <Text style={styles.contentParagraphTypography}>You must not:</Text>
                    <View style={styles.listContentBox}>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Republish material from Medicos Histology</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Sell, rent or sub-license material from Medicos Histology</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Reproduce, duplicate or copy material from Medicos Histology</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Redistribute content from Medicos Histology</Text>
                        </Unorderedlist>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>This Agreement shall begin on the date hereof.</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>Parts of this app offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Medicos Histology does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Medicos Histology, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Medicos Histology shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>Medicos Histology reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>You warrant and represent that:</Text>
                    <View style={styles.listContentBox}>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>You are entitled to post the Comments on our App and have all necessary licenses and consents to do so;</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</Text>
                        </Unorderedlist>
                    </View>
                </View>

                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>You hereby grant Medicos Histology a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</Text>
                </View>
                <Text style={styles.contentTitleText}>Hyperlinking to our App</Text>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography} >The following organizations may link to our App without prior written approval:</Text>
                    <View style={styles.listContentBox}>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Government agencies;</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Search engines;</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>News organizations;</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>Online directory distributors may link to our App in the same manner as they hyperlink to the Websites of other listed businesses; and</Text>
                        </Unorderedlist>
                        <Unorderedlist bulletUnicode={0x2023} style={styles.unorderedlist}>
                            <Text style={styles.contentParagraphTypography}>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</Text>
                        </Unorderedlist>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.contentParagraphTypography}>These organizations may link to our home page, to publications or to other App information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</Text>
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

export default TermsAndConditionsScreen;