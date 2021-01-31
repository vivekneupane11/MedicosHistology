import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import InputTextField from "../components/InputTextField";
import { colors } from "../constants/theme";


const { width } = Dimensions.get('window');
const RegistartionScreen = ({ navigation }) => {
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

                    <InputTextField iconname="user" style={[styles.inputTitle, styles.formField]} placeholderText="Full Name" />
                    <InputTextField iconname="user" style={[styles.inputTitle, styles.formField]} placeholderText="Gender" />
                    <InputTextField iconname="language" style={[styles.inputTitle, styles.formField]} placeholderText="Choose Language" />
                    <InputTextField iconname="user" style={[styles.inputTitle, styles.formField]} placeholderText="Email Address" />
                    <InputTextField
                        style={styles.formField}
                        placeholderText="Password"
                        isSecure={true}
                        iconname="lock"
                    />
                    <InputTextField
                        style={styles.formField}
                        placeholderText="Confirm Password"
                        isSecure={true}
                        iconname="lock"
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.submitContainer, styles.f_c_c_c, styles.shadow]}>
                        <Text
                            style={[styles.text, styles.buttonText]}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.footerContainer}
                >
                    <Text style={styles.footerText}
                    >Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.text}>Sign In</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#fff',
        backgroundColor: colors.secondary,
        paddingHorizontal: 50,
    },
    headerContainer: {
        marginTop: (width) / 12,
        marginBottom: (width) / 30,
    },
    imageContainer: {
        marginVertical: 10,
        height: 100,
        width: 100,
        borderRadius: 150,
        overflow: 'hidden',

    },
    headerText: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: '500',
        color: "white"
    },
    formContainer: {
        marginVertical: 25,
    },
    formField: {
        marginTop: 6,
        marginBottom: 6
    },
    logoimage: {
        height: 250,
        width: 250,
        resizeMode: 'contain'

    },
    text: {
        fontSize: 14,
        fontWeight: '900',
        color: colors.dodgerBlue
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,

    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    footerText: {
        fontSize: 14,
        color: colors.turquoise,
        textAlign: "center",
        marginTop: 30,
        fontWeight: "bold",
    },
    socialButton: {
        flexDirection: 'row',

        // marginHorizontal:12,
        paddingVertical: 2,
        paddingHorizontal: 15,
        // borderWidth:StyleSheet.hairlineWidth,
        borderColor: 'rgba(171,180,189,0.65)',
        borderRadius: 4,
        // backgroundColor:'#fff',
        // shadowColor:"rgba(171,180,189,0.35)",
        // shadowOffset:{width:0,height:10},
        // shadowOpacity:1,
        // shadowRadius:20,
        // elevation:5
    },
    socialLogo: {
        width: 55,
        height: 55,

    },
    submitContainer: {
        backgroundColor: colors.primary,
        fontSize: 16,
        borderRadius: 28,
        paddingVertical: 12,
        marginHorizontal: 80,
        marginTop: 32,
        color: "white",
    },
    f_c_c_c: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    }
});

export default RegistartionScreen;