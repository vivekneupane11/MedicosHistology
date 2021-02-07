import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import InputTextField from '../components/InputTextField';
import {colors} from '../constants/theme';
import {AuthContext} from '../src/utils/Authentication/AuthProvider';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from '../src/utils/responsive';

const {width} = Dimensions.get('window');
const RegistartionScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={[styles.headerContainer, styles.f_c_c_c]}>
          <View style={[styles.imageContainer, styles.f_c_c_c]}>
            <Image
              style={styles.logoimage}
              source={require('../assets/logos/medicoslogo.png')}
            />
          </View>
          <Text style={styles.headerText}>Medicos International</Text>
        </View>
        <View style={styles.formContainer}>
          <InputTextField
            iconname="user"
            style={[styles.inputTitle, styles.formField]}
            placeholderText="Full Name"
          />
          <InputTextField
            iconname="user"
            style={[styles.inputTitle, styles.formField]}
            placeholderText="Email address"
            onChangeText={(email) => setEmail(email)}
          />
          <InputTextField
            iconname="user"
            style={[styles.inputTitle, styles.formField]}
            placeholderText="Gender"
          />
          <InputTextField
            iconname="language"
            style={[styles.inputTitle, styles.formField]}
            placeholderText="Choose Language"
          />
          <InputTextField
            iconname="user"
            style={[styles.inputTitle, styles.formField]}
            placeholderText="Email Address"
          />
          <InputTextField
            style={styles.formField}
            placeholderText="Password"
            isSecure={true}
            iconname="lock"
            onChangeText={(password) => setPassword(password)}
          />
          <InputTextField
            style={styles.formField}
            placeholderText="Confirm Password"
            isSecure={true}
            iconname="lock"
          />
          <TouchableOpacity
            onPress={() => register(email, password)}
            style={[styles.submitContainer, styles.f_c_c_c, styles.shadow]}>
            <Text style={[styles.text, styles.buttonText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#fff',
    backgroundColor: colors.secondary,
    paddingHorizontal: widthPercentageToDP(10),
  },
  headerContainer: {
    // marginTop: width / 12,
    // marginBottom: width / 30,
    marginTop: heightPercentageToDP(4.3),
    marginBottom: heightPercentageToDP(1.6),
  },
  imageContainer: {
    // marginVertical: 10,
    // height: 100,
    // width: 100,
    borderRadius: 150,
    overflow: 'hidden',
    marginVertical: heightPercentageToDP(1.2),
    height: heightPercentageToDP(12),
    width: widthPercentageToDP(25),
  },
  headerText: {
    // marginTop: 10,
    // fontSize: 22,
    fontWeight: '500',
    color: 'white',
    marginTop: heightPercentageToDP(1),
    fontSize: widthPercentageToDP(5.4),
  },
  formContainer: {
    // marginVertical: 25,
    marginVertical: heightPercentageToDP(2.9),
  },
  formField: {
    // marginTop: 6,
    // marginBottom: 6,
    marginTop: heightPercentageToDP(0.7),
    marginBottom: heightPercentageToDP(0.7),
  },
  logoimage: {
    // height: 250,
    // width: 250,
    resizeMode: 'contain',
    height: heightPercentageToDP(30),
    width: widthPercentageToDP(61),
  },
  text: {
    // fontSize: 14,
    fontWeight: '900',
    color: colors.dodgerBlue,
    fontSize: widthPercentageToDP(3.3),
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    // fontSize: 16,
    fontSize: widthPercentageToDP(3.9),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  footerText: {
    // fontSize: 14,
    color: colors.turquoise,
    textAlign: 'center',
    // marginTop: 30,
    fontWeight: 'bold',
    fontSize: widthPercentageToDP(3.3),
    marginTop: heightPercentageToDP(0.5),
  },
  submitContainer: {
    backgroundColor: colors.primary,
    borderRadius: 28,
    // paddingVertical: 12,
    // marginHorizontal: 80,
    // marginTop: 32,
    color: 'white',
    paddingVertical: heightPercentageToDP(1.45),
    marginHorizontal: widthPercentageToDP(19.5),
    marginTop: heightPercentageToDP(3.8),
  },
  f_c_c_c: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
});

export default RegistartionScreen;
