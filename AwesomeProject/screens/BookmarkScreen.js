import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import BackgroundHeader from '../components/BackgroundHeader';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';
const Icon = createIconSetFromFontello(fontelloConfig);
const { width } = Dimensions.get("window");
const BookmarkScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flexDirection: "column" }} contentContainerStyle={{ justifyContent: 'flex-start' }}>
            <BackgroundHeader navigation={navigation} />

            <View style={styles.container} >
                <View style={[styles.searchContentBox,styles.shadow]}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/images/cuboidal.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <View style={styles.bookmark}>
                        <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                    </View>
                </View>
                <View style={[styles.searchContentBox,styles.shadow]}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/images/cuboidal.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <View style={styles.bookmark}>
                        <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                    </View>
                </View>
                <View style={[styles.searchContentBox,styles.shadow]}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/images/cuboidal.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <View style={styles.bookmark}>
                        <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                    </View>
                </View>
                <View style={[styles.searchContentBox,styles.shadow]}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/images/cuboidal.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <View style={styles.bookmark}>
                        <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                    </View>
                </View>
                <View style={[styles.searchContentBox,styles.shadow]}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/images/cuboidal.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <View style={styles.bookmark}>
                        <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                    </View>
                </View>
                <View style={[styles.searchContentBox,styles.shadow]}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/images/cuboidal.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <View style={styles.bookmark}>
                        <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                    </View>
                </View>
                <View style={[styles.searchContentBox,styles.shadow]}>
                    <View style={styles.image}>
                        <Image
                            source={require('../assets/images/cuboidal.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.searchContent}>
                        <Text style={styles.searchContentTitle}>Epiglottis</Text>
                        <Text style={styles.searchContentText}>The epiglottis is a leaf-shaped flap of cartilage located behind </Text>
                    </View>
                    <View style={styles.bookmark}>
                        <Icon name="bookmark-empty" size={24} color="#ABB4BD" />
                    </View>
                </View>


            </View>
        </ScrollView>
    );
}

export default BookmarkScreen;

const styles = StyleSheet.create({
    container: {
        // paddingVertical: 10,
        // paddingHorizontal: 15,
        paddingVertical:heightPercentageToDP(1.23),
        paddingHorizontal:widthPercentageToDP(3.8)
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        // height: 45,
        // width: 45,
        borderRadius: 5,
        height:heightPercentageToDP(5.4),
        width:widthPercentageToDP(11)
    },
    searchContentBox: {
        // paddingHorizontal: 15,
        // paddingVertical: 19,
        flexDirection: 'row',
        // marginVertical: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 11,
        paddingHorizontal:widthPercentageToDP(3.8),
        paddingVertical:heightPercentageToDP(2.3),
        marginVertical:heightPercentageToDP(1.2)


    },
    searchContent: {
        flex: 1,
        // backgroundColor:'yellow',
        // marginLeft: 15,
        marginLeft:widthPercentageToDP(3.5)
    },
    searchContentTitle: {
        color: 'black',
        // fontSize: 18,
        fontFamily: 'Roboto-Bold',
        fontSize: widthPercentageToDP(4.3),
    },
    searchContentText: {
        // marginRight: 23,
        flex: 1,
        color: 'gray',
        // lineHeight: 17,
        textAlign: 'justify',
        // fontSize: 15,
        fontFamily: 'LiberationSerif-Regular',
        marginRight:widthPercentageToDP(6.5),
        lineHeight: heightPercentageToDP(2),
        fontSize: widthPercentageToDP(3.6),
    },
    bookmark: {
        position: 'absolute',
        top: 2,
        right: 10
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27, 
        elevation: 10,
    }
});