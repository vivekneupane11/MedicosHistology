import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
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
                        <Icon style={{flex:1.5}} name="sticky-note-o" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Push Notification</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="cog" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Font Size</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="sticky-note-o" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Notes</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.endlist,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="params" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Dark Mode</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                </View>
                {/* First Section */}
                <View style={styles.settingsSection}>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="user" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Join Our Community</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="sticky-note-o" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Privacy Policy</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="user" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Terms of Services</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="search" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Invite More Friends</Text>
                        {/* <Icon name="sticky-note-o" size={18} color="#ABB4BD" /> */}
                    </View>
                    <View style={[styles.list,styles.f_r_sb_c]}>
                        <Icon style={{flex:1.5}} name="home-outline" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>About Us</Text>
                        <Icon name="sticky-note-o" size={18} color="#ABB4BD" />
                    </View>
                    <View style={styles.endlist}>
                        <Icon style={{flex:1.5}} name="bookmark-empty" size={18} color="#ABB4BD" />
                        <Text style={{ flex: 9 }}>Rate Us</Text>
                        <Icon name="sticky-note-o" size={18} color="#ABB4BD" />
                    </View>
                </View>
                {/* Second Section */}
                <View style={styles.settingsSection}>
                    <View style={styles.endlist}>
                        <Icon style={{flex:1.5}} name="cog" size={18} color="#ABB4BD" />
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

