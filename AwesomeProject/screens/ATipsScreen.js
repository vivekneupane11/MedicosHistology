import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import onboardingimage1 from '../assets/onboardone.png';
import onboardingimage2 from '../assets/onboardtwo.png';




const ATipsScreen = ({ navigation }) => {


    return (
        <Onboarding

            // bottomBarColor={'red'}
            showNext={true}
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            imageContainerStyles={{
                paddingBottom: 10,
                paddingTop: 50,
                justifyContent: 'center',
                alignItems: 'center',

            }}
            containerStyles={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 20
            }}

            pages={[

                {
                    backgroundColor: '#156B9A',
                    title: '1. Attend Your Histology Class Daily',
                    subtitle:"Histology,[help 1] also known as microscopic anatomy or microanatomy,[1] is the branch of biology which studies the microscopic anatomy of biological tissues.[2][3][4][5] Histology is the microscopic counterpart to gross anatomy, which looks at larger structures visible without a microscope.[5][6] Although one may divide microscopic anatomy into organology, the study of organs, histology, the study of tissues, and cytology, the study of cells, modern usage places these topics under the field of histology.[5] In medicine, histopathology is the branch of histology that includes the microscopic identification and study of diseased tissue.[5][6] In the field of paleontology, the term paleohistology refers to the histology of fossil organisms.[7][8]"
                },

                {
                    backgroundColor: '#3F3D56',
                    title: '2. Learn Histology Actively',
                    subtitle:"Histology,[help 1] also known as microscopic anatomy or microanatomy,[1] is the branch of biology which studies the microscopic anatomy of biological tissues.[2][3][4][5] Histology is the microscopic counterpart to gross anatomy, which looks at larger structures visible without a microscope.[5][6] Although one may divide microscopic anatomy into organology, the study of organs, histology, the study of tissues, and cytology, the study of cells, modern usage places these topics under the field of histology.[5] In medicine, histopathology is the branch of histology that includes the microscopic identification and study of diseased tissue.[5][6] In the field of paleontology, the term paleohistology refers to the histology of fossil organisms.[7][8]"
                },

                {
                    backgroundColor: '#3F3D56',
                    title: '3. Study Histology Regularly',
                    subtitle:"Histology,[help 1] also known as microscopic anatomy or microanatomy,[1] is the branch of biology which studies the microscopic anatomy of biological tissues.[2][3][4][5] Histology is the microscopic counterpart to gross anatomy, which looks at larger structures visible without a microscope.[5][6] Although one may divide microscopic anatomy into organology, the study of organs, histology, the study of tissues, and cytology, the study of cells, modern usage places these topics under the field of histology.[5] In medicine, histopathology is the branch of histology that includes the microscopic identification and study of diseased tissue.[5][6] In the field of paleontology, the term paleohistology refers to the histology of fossil organisms.[7][8]"
                }
                ,


            ]}
        />
    )
}

export default ATipsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: 10
    },
    mediumsizeimage: {
        height: 400,
        width: 400,
        margin: 'auto'

    },


});