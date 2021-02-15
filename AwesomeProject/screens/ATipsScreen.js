import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import onboardingimage1 from '../assets/aTips1.webp';
import onboardingimage2 from '../assets/aTips2.webp';
import onboardingimage3 from '../assets/aTips3.webp';
import onboardingimage4 from '../assets/aTips4.webp';
import onboardingimage5 from '../assets/aTips5.webp';
import onboardingimage6 from '../assets/aTips6.webp';
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';
import { usefontsize } from '../src/utils/FontSize/FontSizeManager';
import { useTheme } from '../src/utils/DarkTheme/ThemeManager';



const ATipsScreen = ({ navigation }) => {
    const { fontsizeMode } = usefontsize();
    const { mode, theme: themeforDarkMode, toggle } = useTheme();

    return (
        <Onboarding

            // bottomBarColor={'red'}
            showNext={true}
            onSkip={() => navigation.replace('Home')}
            onDone={() => navigation.navigate('Home')}
            imageContainerStyles={{
                paddingBottom: 10,
                paddingTop: 21,
                justifyContent: 'center',
                alignItems: 'center',

            }}
            containerStyles={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 10
            }}

            pages={[

                {
                    backgroundColor: mode == 'dark' ? '#516377' : '#EFF8F9',
                    image: <Image style={styles.mediumsizeimage} source={onboardingimage1} resizeMode='contain' />,
                    title: '1. Attend Your Histology Class Daily',
                    subtitle: <Text style={[
                        { color: themeforDarkMode.primaryText },
                        { color: themeforDarkMode.primaryText },
                        styles.text,
                        fontsizeMode == 'S' && styles.typographySmall,
                        fontsizeMode == 'M' && styles.typographyMedium,
                        fontsizeMode == 'L' && styles.typographyLarge
                    ]}>Go to your histology class-- every histology lecture and every histology lab--every time. In some schools you can even purchase the histology class notes.Or maybe, "the histology notes are on reserve in the library." </Text>
                },

                {

                    backgroundColor: mode == 'dark' ? '#7290aa' : '#EEFFD8',
                    image: <Image style={styles.mediumsizeimage} source={onboardingimage2} resizeMode='contain' />,
                    title: '2. Learn Histology Actively',
                    subtitle: <Text style={[
                        { color: themeforDarkMode.primaryText },
                        styles.text,
                        fontsizeMode == 'S' && styles.typographySmall,
                        fontsizeMode == 'M' && styles.typographyMedium,
                        fontsizeMode == 'L' && styles.typographyLarge
                    ]}>Participate in your histology class. If you don't understand something, ask.Go to the histology professor's office hours if asking questions in histology class is intimidating. This is what the office hours are for. Ask yourself questions. Think about the material; apply it; discuss it; play with it; live it! Discuss histology concepts with friends over pizza. It will make learning histology fun if you get engrossed in histology, rather than simply trying to memorize histology facts.</Text>
                },

                {

                    backgroundColor: mode == 'dark' ? '#516377' : '#EFF8F9',
                    image: <Image style={styles.mediumsizeimage} source={onboardingimage3} resizeMode='contain' />,
                    title: '3. Study Histology Regularly',
                    subtitle: <Text style={[
                        { color: themeforDarkMode.primaryText },
                        styles.text,
                        fontsizeMode == 'S' && styles.typographySmall,
                        fontsizeMode == 'M' && styles.typographyMedium,
                        fontsizeMode == 'L' && styles.typographyLarge
                    ]}>Study histology routinely, a set amount each night. Force yourself to be mature about it. Comes histology exam or histology practical time, you won't be in a panic. Make a study schedule for histology and stick to it.</Text>
                },
                {

                    backgroundColor: mode == 'dark' ? '#7290aa' : '#EFF8F9',
                    image: <Image style={styles.mediumsizeimage} source={onboardingimage4} resizeMode='contain' />,
                    title: '4. Form a Histology Study Group',
                    subtitle: <Text style={[
                        { color: themeforDarkMode.primaryText },
                        styles.text,
                        fontsizeMode == 'S' && styles.typographySmall,
                        fontsizeMode == 'M' && styles.typographyMedium,
                        fontsizeMode == 'L' && styles.typographyLarge
                    ]}>Form a histology study group early. Quiz each other and keep each other motivated. A good histology study group will help you earn a good grade in your histology class. Meet with your histology study group routinely, once or twice a week, every week. Forming a histology study group will help you study histology regularly.</Text>
                },

                {

                    backgroundColor: mode == 'dark' ? '#516377' : '#EEFFD8',
                    image: <Image style={styles.mediumsizeimage} source={onboardingimage5} resizeMode='contain' />,
                    title: '5. Maintain a Suport System Outside of Histology',
                    subtitle: <Text style={[
                        { color: themeforDarkMode.primaryText },
                        styles.text,
                        fontsizeMode == 'S' && styles.typographySmall,
                        fontsizeMode == 'M' && styles.typographyMedium,
                        fontsizeMode == 'L' && styles.typographyLarge
                    ]}>Keep in contact with your friends, family, and life outside of histology and college as well.</Text>
                },

                {

                    backgroundColor: mode == 'dark' ? '#7290aa' : '#EFF8F9',
                    image: <Image style={styles.mediumsizeimage} source={onboardingimage6} resizeMode='contain' />,
                    title: '6. Keep a Balance',
                    subtitle: <Text style={[
                        { color: themeforDarkMode.primaryText },
                        styles.text,
                        fontsizeMode == 'S' && styles.typographySmall,
                        fontsizeMode == 'M' && styles.typographyMedium,
                        fontsizeMode == 'L' && styles.typographyLarge
                    ]}>It is easy to get caught up in student life: all nighters studying histology, excessive partying, your first romance, your first taste of independence, and so on. Try and keep your life balanced. Maintain your health, your exercise program, sleep, family and friends. This may sound ludicrous if you have six chapters (500 pages) of histology to cover and the histology practical is in two days.The point is that if you have been studying histology regularly (see above), it will be easier to maintain this balance.</Text>
                },
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
        paddingBottom: 10,
        paddingBottom: heightPercentageToDP(5)
    },
    mediumsizeimage: {
        height: heightPercentageToDP(18.5),
        width: widthPercentageToDP(50),
        margin: 'auto'

    },
    typographySmall: {
        fontSize: widthPercentageToDP(3),
    },
    typographyMedium: {
        fontSize: widthPercentageToDP(4),
    },
    typographyLarge: {
        fontSize: widthPercentageToDP(6),
    },
    text: {
        textAlign: 'justify'
    }

});