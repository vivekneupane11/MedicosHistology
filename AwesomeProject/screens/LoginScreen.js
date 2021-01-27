import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import InputTextField from "../components/InputTextField";


const { width } = Dimensions.get('window');
const LoginScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View>

                <View style={{ marginVertical: 40, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.imageContainer}>

                        <Image style={styles.logoimage} source={require('../assets/logos/medicoslogo.png')} />
                    </View>
                    <Text style={{ marginTop: 10, fontSize: 22, fontWeight: '500', color: "#fff" }}>Medicos International</Text>
                </View>
                <View style={{ marginVertical: 30 }}>

                    <InputTextField style={styles.inputTitle} placeholderText="Email Address" />
                    <InputTextField
                        style={{
                            marginTop: 16,
                            marginBottom: 8
                        }}

                        placeholderText="Password"
                        isSecure={true}
                    />

                    <Text style={[styles.text, styles.link, { textAlign: 'right', marginTop: 12 }]}>Forget Password ?</Text>
                    <TouchableOpacity style={styles.submitContainer}>
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: "#FFF",
                                    fontWeight: "700",
                                    fontSize: 16,

                                }
                            ]}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>


                </View>
                {/* OR TEXT */}
                <View style={{ flex: 1, position: 'relative', paddingVertical: (width) / 20 }}>
                    <View style={{ flex: 1, borderColor: '#666380', borderBottomWidth: 1, marginHorizontal: 50 }} />
                    <Text style={[styles.text, { backgroundColor: '#3F3D56', marginHorizontal: 130, color: '#fff', position: "absolute", left: 0, right: 0, alignItems: "center", fontSize: 16, textAlign: 'center', marginVertical: 9, }]}>OR</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 15 }}>
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
                    style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}
                >
                    <Text style={[
                        styles.text,
                        {
                            fontSize: 14,
                            color: "#ABB4BD",
                            textAlign: "center",
                            marginTop: 30,
                            fontWeight: "bold",
                        }
                    ]}
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
        // backgroundColor:'#fff',
        backgroundColor: '#3F3D56',
        paddingHorizontal: 50,
    },
    imageContainer: {
        marginVertical: 10,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        overflow: 'hidden',

    },
    logoimage: {
        height: 250,
        width: 250,
        resizeMode: 'contain'
    },
    text: {
        color: '#1D2029'
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
    link: {
        color: "#1CAFFF",
        fontSize: 14,
        fontWeight: '900'
    },
    submitContainer: {
        backgroundColor: "#156B9A",
        fontSize: 16,
        borderRadius: 28,
        paddingVertical: 15,
        marginHorizontal: 80,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    }
});

export default LoginScreen;