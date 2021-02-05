import React from 'react';
import {View , Text , Button , StyleSheet ,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { color } from 'react-native-reanimated';
import onboardingimage1 from '../assets/onboardone.png';
import onboardingimage2 from '../assets/onboardtwo.png';
import { colors } from '../constants/theme';
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';




const OnboardingScreen = ({navigation})=>{
  

  return(
        <Onboarding 
    
        // bottomBarColor={'red'}
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.navigate('Login')}
        imageContainerStyles = {{
          // paddingBottom:10,
          // paddingTop:50,
          justifyContent:'center',
          alignItems:'center',
          paddingBottom: heightPercentageToDP(1),
          paddingTop:heightPercentageToDP(6)
        
        }}
        containerStyles={{
          justifyContent:'flex-start',
          alignItems:'center',
          // paddingHorizontal:20,
          paddingHorizontal:widthPercentageToDP(5)
        }}
        
        pages={[
     
          {
           
            backgroundColor: colors.secondary,
            
            image: <Image style={styles.mediumsizeimage} source={onboardingimage1} resizeMode='contain'/>,
            title: 'Medicos One',
            subtitle: 'one with React Native Onboarding Swiper is Medicos Histology app. Among most app thisis Medicos Histology app. Among most app this ',
        
          },
        
            {
              
              backgroundColor: colors.primary,
              image: <Image style={styles.mediumsizeimage} source={onboardingimage2} resizeMode='contain'/>,
              title: 'Medicos two',
              subtitle: 'Done with React Native Onboarding Swiper is Medicos Histology app. Among most app thisis Medicos Histology app. Among most app this',
            },

            {
              
              backgroundColor: colors.primary,
              image: <Image style={styles.mediumsizeimage} source={onboardingimage2} resizeMode='contain' />,
              title: 'Medicos Three',
              subtitle: 'Done with React Native Onboarding Swiper is Medicos Histology app. Among most app thisis Medicos Histology app. Among most app this',
            }
     ,
     
     
        ]}
      />
    )
}

export default OnboardingScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        // paddingBottom:10,
        // paddingBottom:heightPercentageToDP(10)
    },
    mediumsizeimage:{
      // height:450,
      width:450,
      margin:'auto',
      height:heightPercentageToDP(54)
    },
  
    
});