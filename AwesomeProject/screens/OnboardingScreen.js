import React from 'react';
import {View , Text , Button , StyleSheet ,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { color } from 'react-native-reanimated';
import onboardingimage1 from '../assets/aTips1.png';
import onboardingimage2 from '../assets/aTips2.png';
import onboardingimage3 from '../assets/aTips3.png';
import onboardingimage4 from '../assets/aTips4.png';
import onboardingimage5 from '../assets/aTips5.png';
import onboardingimage6 from '../assets/aTips6.png';
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
          // justifyContent:'flex-end',
          // alignContent:'flex-end',
          // alignItems:'center',
          // paddingBottom: heightPercentageToDP(1),
          // paddingTop:heightPercentageToDP(10),
          flex:0.8
        
        }}
        containerStyles={{
          justifyContent:'flex-start',
          alignItems:'center',
          // paddingHorizontal:20,
          paddingHorizontal:widthPercentageToDP(5)
        }}
        
        pages={[
     
          {   
            subTitleStyles:{textAlign:'justify'},
            backgroundColor: colors.secondary,
            image: <Image style={styles.mediumsizeimage} source={onboardingimage1} resizeMode='contain' />,
            title: '1. Attend Your Histology Class Daily',
            subtitle: "Histology,[help 1] also known as microscopic anatomy or microanatomy,[1] is the branch of biology which studies the microscopic anatomy of biological tissues.[2][3][4][5] Histology is the microscopic counterpart to gross anatomy, which looks at larger structures visible without a microscope.[5][6] Although one may divide microscopic anatomy into organology, the study of organs, histology, the study of tissues, and cytology, the study of cells, modern usage places these topics under the field of histology.[5] In medicine, histopathology is the branch of histology that includes the microscopic identification and study of diseased tissue.[5][6] In the field of paleontology, the term paleohistology refers to the histology of fossil organisms.[7][8]"
        },

        {
            subTitleStyles:{textAlign:'justify'},
            backgroundColor: colors.primary,
            image: <Image style={styles.mediumsizeimage} source={onboardingimage6} resizeMode='contain' />,
            title: '2. Learn Histology Actively',
            subtitle: "Histology,[help 1] also known as microscopic anatomy or microanatomy,[1] is the branch of biology which studies the microscopic anatomy of biological tissues.[2][3][4][5] Histology is the microscopic counterpart to gross anatomy, which looks at larger structures visible without a microscope.[5][6] Although one may divide microscopic anatomy into organology, the study of organs, histology, the study of tissues, and cytology, the study of cells, modern usage places these topics under the field of histology.[5] In medicine, histopathology is the branch of histology that includes the microscopic identification and study of diseased tissue.[5][6] In the field of paleontology, the term paleohistology refers to the histology of fossil organisms.[7][8]"
        },

        {                    
            subTitleStyles:{textAlign:'justify'},
            backgroundColor: colors.secondary,
            image: <Image style={styles.mediumsizeimage} source={onboardingimage4} resizeMode='contain' />,
            title: '3. Study Histology Regularly',
            subtitle: "Histology,[help 1] also known as microscopic anatomy or microanatomy,[1] is the branch of biology which studies the microscopic anatomy of biological tissues.[2][3][4][5] Histology is the microscopic counterpart to gross anatomy, which looks at larger structures visible without a microscope.[5][6] Although one may divide microscopic anatomy into organology, the study of organs, histology, the study of tissues, and cytology, the study of cells, modern usage places these topics under the field of histology.[5] In medicine, histopathology is the branch of histology that includes the microscopic identification and study of diseased tissue.[5][6] In the field of paleontology, the term paleohistology refers to the histology of fossil organisms.[7][8]"
        }
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
      // width:250,
      // margin:'auto',
      height:heightPercentageToDP(40),
      width:widthPercentageToDP(70)
    }, 
});