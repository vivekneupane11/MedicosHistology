import React from 'react';
import {StyleSheet, Text,View,Image,TouchableOpacity,ScrollView} from 'react-native';
import InputTextField from "../components/InputTextField";

 const RegistartionScreen = ({navigation})=>{
    return (
        <ScrollView style={styles.container}>
            <View>
         
                <View style={{marginTop:40,marginBottom:30,alignItems:'center',justifyContent:'center'}}>
                <View style={styles.imageContainer}>
             
                   <Image style={styles.logoimage} source={require('../assets/logos/medicoslogo.png')} />
            </View>
                    <Text style={{marginTop:10,fontSize:22,fontWeight:'500',color:"#fff"}}>Medicos International</Text>
                    </View>
                            <View style={{marginVertical:25}}>

                            <InputTextField style={[styles.inputTitle,{
                            marginTop: 6,
                            marginBottom: 6
                        }]}  placeholderText="Full Name" />
                            <InputTextField style={[styles.inputTitle,{
                            marginTop: 6,
                            marginBottom: 6
                        }]}  placeholderText="Gender" />
<InputTextField style={[styles.inputTitle,{
                            marginTop: 6,
                            marginBottom: 6
                        }]}  placeholderText="Choose Language" />
                            <InputTextField style={[styles.inputTitle,{
                            marginTop: 6,
                            marginBottom: 6
                        }]}  placeholderText="Email Address" />
                    <InputTextField
                        style={{
                            marginTop: 6,
                            marginBottom: 6
                        }}
                        
                        placeholderText="Password"
                        isSecure={true}
                    />
                        <InputTextField
                         style={{
                            marginTop: 6,
                            marginBottom: 6
                        }}
                        placeholderText="Confirm Password"
                        isSecure={true}
                    />

                          
                            <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.submitContainer}>
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
                            Sign Up
                        </Text>
                                </TouchableOpacity>

                        
                    </View>
                 
                   
                            <View
                        style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}
                    >
                       <Text               style={[
                            styles.text,
                            {
                                fontSize: 14,
                                color: "#ABB4BD",
                                textAlign: "center",
                                marginTop: 2,
                                fontWeight:"bold",
                            }
                        ]}
                    >Don't have an account? </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={[styles.text, {color:'#3F3D56',fontWeight:'bold'}]}>Sign In</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       // backgroundColor:'#fff',
       backgroundColor:'#156B9A',
        paddingHorizontal:50,
    },
    imageContainer:{
        marginVertical:10,
         height:100,
         width:100,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:150,
         overflow:'hidden',
       
    },
    logoimage:{
        height:250,
        width:250,
        resizeMode:'contain'
     
    },
    text:{
        color:'#1D2029'
    },
    socialButton:{
        flexDirection:'row',
      
        // marginHorizontal:12,
        paddingVertical:2,
        paddingHorizontal:15,
        // borderWidth:StyleSheet.hairlineWidth,
        borderColor:'rgba(171,180,189,0.65)',
        borderRadius:4,
        // backgroundColor:'#fff',
        // shadowColor:"rgba(171,180,189,0.35)",
        // shadowOffset:{width:0,height:10},
        // shadowOpacity:1,
        // shadowRadius:20,
        // elevation:5
    },
    socialLogo:{
        width:55,
        height:55,
       
    },
    link:{
        color:"#1CAFFF",
        fontSize:14,
        fontWeight:'900'
    },
    submitContainer: {
        backgroundColor: "#3F3D56",
        fontSize: 16,
        borderRadius: 28,
        paddingVertical: 15,
        marginHorizontal:80,
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

export default RegistartionScreen;