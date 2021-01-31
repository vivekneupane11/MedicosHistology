import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Alert } from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import { colors } from "../constants/theme";



const { width } = Dimensions.get("window");
const SettingScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <BackgroundHeader navigation={navigation} />
            <View style={styles.settingsContainer}>
                <View style={[styles.settingsSection,styles.shadow]}>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="user" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Account</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="bell" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Push Notification</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="font" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Font Size</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="sticky-note-o" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Notes</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.endlist,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="language" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Language</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.endlist,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="fog-sun" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Dark Mode</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                </View>
                {/* First Section */}
                <View style={[styles.settingsSection,    styles.shadow]}>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="globe" size={20} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Join Our Community</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon onPress={()=>navigation.navigate('PrivacyPolicy') } style={{flex:1.5}} name="docs" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Privacy Policy</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View  style={[styles.list,styles.f_r_sb_c]}>
                        <Icon onPress={()=>navigation.navigate('TermsAndConditions') }  style={{flex:1.5}} name="book-open" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Terms of Services</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="export" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Invite More Friends</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon onPress={()=>navigation.navigate('AboutUs') } style={{flex:1.5}} name="info-circled-alt" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>About Us</Text>
                        <Icon name="right-open-big" size={18} color="#ABB4BD" />
                    </View>
                    <View style={[styles.endlist,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="star-empty" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Rate Us</Text>
                        <Icon name="right-open-big" size={18} color="#ABB4BD" />
                    </View>
                </View>
                {/* Second Section */}
                <View style={[styles.settingsSection,styles.shadow]}>
                    <View style={[styles.endlist,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="logout" size={20} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Log Out</Text>
                        {/* <Icon name="cog" size={18} color="#ABB4BD" /> */}
                    </View>
                </View>
                {/* Third Section */}
            </View>
        </ScrollView >
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    settingsContainer: {
        flex: 1,
        backgroundColor: colors.lightWhite,
    },
    settingsSection: {
        marginVertical:(width) / 30,
        marginHorizontal: (width) / 17 - 5,
        backgroundColor: colors.lightWhite,
        padding: 10,
        borderRadius: 15
    },
    list: {
        borderBottomWidth: 0.3,
        paddingVertical:14,
        borderColor: 'lightgray',
        marginHorizontal: 20,
        
    },
    endlist:{
        paddingVertical:14,
        marginHorizontal: 20,
        },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    f_r_sb_c:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        
    }
});

