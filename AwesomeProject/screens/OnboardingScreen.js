import React from 'react';
import {View , Text , Button , StyleSheet ,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import onboardingimage1 from '../assets/onboardone.png';
import onboardingimage2 from '../assets/onboardtwo.png';




const OnboardingScreen = ({navigation})=>{
  

  return(
        <Onboarding 
    
        // bottomBarColor={'red'}
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.navigate('Login')}
        imageContainerStyles = {{
          paddingBottom:10,
          paddingTop:50,
          justifyContent:'center',
          alignItems:'center',
        
        }}
        containerStyles={{
          justifyContent:'flex-start',
          alignItems:'center',
          paddingHorizontal:20
        }}
        
        pages={[
     
          {
           
            backgroundColor: '#156B9A',
            
            image: <Image style={styles.mediumsizeimage} source={onboardingimage1} />,
            title: 'Medicos One',
            subtitle: 'one with React Native Onboarding Swiper is Medicos Histology app. Among most app thisis Medicos Histology app. Among most app this ',
        
          },
        
            {
              
              backgroundColor: '#3F3D56',
              image: <Image style={styles.mediumsizeimage} source={onboardingimage2} />,
              title: 'Medicos two',
              subtitle: 'Done with React Native Onboarding Swiper is Medicos Histology app. Among most app thisis Medicos Histology app. Among most app this',
            },

            {
              
              backgroundColor: '#3F3D56',
              image: <Image style={styles.mediumsizeimage} source={onboardingimage2} />,
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
        paddingBottom:10
    },
    mediumsizeimage:{
      height:400,
      width:400,
      margin:'auto'

    },
  
    
});