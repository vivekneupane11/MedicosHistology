import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import InputTextField from "../components/InputTextField";
import { colors } from "../constants/theme";
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';


const { width } = Dimensions.get('window');
const LoginScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View>

                <View style={[styles.headerContainer, styles.f_c_c_c]}>
                    <View style={[styles.imageContainer, styles.f_c_c_c]}>

                        <Image style={styles.logoimage} source={require('../assets/logos/medicoslogo.png')} />
                    </View>
                    <Text style={styles.headerText}>Medicos International</Text>
                </View>
                <View style={styles.formContainer}>

                    <InputTextField iconname="user" placeholderText="Email Address" />
                    <InputTextField
                        iconname="lock"
                        style={styles.passwordField}
                        placeholderText="Password"
                        isSecure={true}
                    />

                    <Text style={[styles.text, styles.link, styles.forgetText]}>Forget Password ?</Text>
                    <TouchableOpacity style={[styles.submitContainer, styles.shadow, styles.f_c_c_c]}>
                        <Text style={[styles.text, styles.buttonText]}>
                            Login
                        </Text>
                    </TouchableOpacity>


                </View>
                {/* OR TEXT */}
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={[styles.text, styles.dividerText]}>OR</Text>
                </View>
                <View style={[styles.socialIconsContainer, styles.f_r_c]}>
                    <TouchableOpacity>
                        <View style={styles.socialButton}>
                            <Image resizeMode='contain' style={styles.socialLogo} source={require('../assets/logos/onusefb.png')} />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.socialButton}>
                            <Image style={styles.socialLogo} source={require('../assets/logos/onusegoogle.png')} />

                        </View>
                    </TouchableOpacity>

                </View>
                <View
                    style={[styles.footerContainer, styles.f_r_c]}
                >
                    <Text style={styles.footerText}
                    >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={[styles.text, styles.link]}>Register Now</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        // paddingHorizontal: 50,
        paddingHorizontal: widthPercentageToDP(12)
    },
    headerContainer: {
        // marginVertical: 40,
        marginVertical: heightPercentageToDP(4.8)
    },
    imageContainer: {
        // marginVertical: 10,
        // height: 100,
        // width: 100,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: heightPercentageToDP(1.2),
        height: heightPercentageToDP(12),
        width: widthPercentageToDP(25)
    },
    headerText: {
        // marginTop: 10,
        // fontSize: 22,
        fontWeight: '500',
        color: 'white',
        marginTop: heightPercentageToDP(1),
        fontSize: widthPercentageToDP(5.4)
    },
    formContainer: {
        // marginVertical: 30,
        marginVertical: heightPercentageToDP(3.6)
    },
    passwordField: {
        // marginTop: 16,
        // marginBottom: 8,
        marginBottom: heightPercentageToDP(0.9),
        marginTop: heightPercentageToDP(1.9)

    },
    forgetText: {
        textAlign: 'right',
        // marginTop: 12,
        marginTop: heightPercentageToDP(1.5)
    }
    , logoimage: {
        // height: 250,
        // width: 250,
        resizeMode: 'contain',
        height: heightPercentageToDP(30),
        width: widthPercentageToDP(61)
    },
    text: {
        color: colors.dodgerBlue
    },
    socialButton: {
        flexDirection: 'row',
        // paddingVertical: 2,
        // paddingHorizontal: 15,
        borderColor: 'rgba(171,180,189,0.65)',
        borderRadius: 4,
        paddingVertical:heightPercentageToDP(0.2),
        paddingHorizontal:widthPercentageToDP(3.8)
        
    },
    socialLogo: {
        // width: 55,
        // height: 55,
        height:heightPercentageToDP(7.5),
        width:widthPercentageToDP(13.3)
    },
    link: {
        color: colors.dodgerBlue,
        // fontSize: 14,
        fontWeight: '900',
        fontSize: widthPercentageToDP(3.3)
        
    },
    submitContainer: {
        backgroundColor: colors.secondary,
        borderRadius: 28,
        // paddingVertical: 15,
        // marginHorizontal: 80,
        // marginTop: 32,
        color: "white",
        paddingVertical:heightPercentageToDP(1.45),
        marginHorizontal:widthPercentageToDP(19.5),
        marginTop:heightPercentageToDP(3.8)
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        // fontSize: 16,
        fontSize: widthPercentageToDP(3.9),


    },
    dividerContainer: {
        flex: 1,
        position: 'relative',
        // paddingVertical: (width) / 20,
        paddingVertical:heightPercentageToDP(2.5)
    },
    divider: {
        flex: 1,
        borderColor: colors.shadeBlueMagneta,
        borderBottomWidth: 1,
        // marginHorizontal: 50,
        marginHorizontal:widthPercentageToDP(12)
    },
    dividerText: {
        backgroundColor: colors.primary,
        // marginHorizontal: 130,
        color: 'white',
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
        // fontSize: 16,
        textAlign: 'center',
        // marginVertical: 9,
        marginHorizontal:widthPercentageToDP(32),
        fontSize: widthPercentageToDP(3.9),
        marginVertical:heightPercentageToDP(1.1)
    },
    socialIconsContainer: {
        alignItems: 'flex-start',
        // marginTop: 15,
        marginTop:heightPercentageToDP(1.8)
    },
    footerContainer: {
        alignItems: 'flex-end',
    },
    footerText: {
        // fontSize: 14,
        color: colors.turquoise,
        textAlign: "center",
        // marginTop: 30,
        fontWeight: "bold",
        fontSize: widthPercentageToDP(3.3),
        marginTop:heightPercentageToDP(3.7)

    },
    shadow: {
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    f_c_c_c: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    f_r_c: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default LoginScreen;