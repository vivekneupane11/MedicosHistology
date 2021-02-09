import React, { useState, Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    Dimensions,
    StyleSheet,
    Alert,
    TouchableOpacity,
    LayoutAnimation, Platform, UIManager,
    Modal,
    TextInput,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import Slider from '../components/Slider';
import { colors } from '../constants/theme';
import fontelloConfig from '../src/config.json';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { useTheme } from '../src/utils/DarkTheme/ThemeManager';
const Icon = createIconSetFromFontello(fontelloConfig);
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from '../src/utils/responsive';

const width = Dimensions.get('screen').width;
const height = width / 1.61;


export default class StainingScreen extends Component {
    
    constructor() {
        super();

        this.state = { expanded: false }
        // this.state = { isActive: false }
        this.state = { isExpandable: '' }


        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    changeLayout = (id) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
        // this.setState({ isActive:  });
        this.setState({ isExpandable: id });
        

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View>
                            <Text style={styles.contentTitleText}>Introduction</Text>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                Histology also known as microscopic anatomy or microanatomy is the branch of biology which studies the
                                microscopic anatomy of biological tissues.
                                Histology is the microscopic counterpart to gross anatomy, which looks at larger structures visible without a
                                microscope. Although one may divide microscopic anatomy into organology, the study of organs, histology,
                                the study of tissues, and cytology, the study of cells, modern usage places these topics under the field of
                                histology.
                                In medicine, histopathology is the branch of histology that includes the microscopic identification and study
                                of diseased tissue.
                            In the field of paleontology, the term paleohistology refers to the histology of fossil organisms.            </Text>


                        </View>
                        {/* // Container for the introduction portion */}
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(1)} style={[styles.Btn]}>
                            <Text style={styles.btnText}>Haemotoxylin and eosin (H&E):</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height: this.state.isExpandable == 1 && this.state.expanded ? null : 0, overflow: 'hidden' }}>
                            <View style={styles.contentContainer}>
                                <View>
                                    <Text
                                        style={[
                                            styles.contentBox,
                                            styles.contentParagraphTypography,
                                            // { color: themeforDarkMode.primaryText },
                                        ]}>
                                        This is the most commonly used technique in animal histology and routine pathology. The basic
                                        dye, haematoxylin, stains acidic structures a purplish blue. Nuclei, ribosomes and rough
                                        endoplasmic reticulum have a strong affinity for this dye owing to their high content of DNA and
                                        RNA, respectively. In contrast, eosin is an acidic dye which stains basic structures red or pink.
                                        Most cytoplasmic proteins are basic and hence cytoplasm usually stains pink or pinkish red. In
                                        general, when the H&E staining technique is applied to animal cells, nuclei stain blue and
                                        cytoplasm stains pink or red
                                    </Text>
                                    <Text style={styles.contentTitleText}>Mode of action</Text>
                                    <Text
                                        style={[
                                            styles.contentBox,
                                            styles.contentParagraphTypography,
                                            // { color: themeforDarkMode.primaryText },
                                        ]}>
                                        Although hematein, an oxidized form of hematoxylin, is the active colorant (when combined
                                        with a mordant), the stain is still referred to as hematoxylin. Hematoxylin, when combined with a
                                        mordant (most commonly aluminum alum) is often considered to "resemble" a basic, positively
                                        charged, or cationic stain. Eosin is an anionic (negatively charged) and acidic stain. The staining
                                        of nuclei by hemalum (a combination of aluminum ions and hematein) is ordinarily due to
                                        binding of the dye-metal complex to DNA, but nuclear staining can be obtained after extraction
                                        of DNA from tissue sections. The mechanism is different from that of nuclear staining by basic
                                        (cationic) dyes such as thionine or toluidine blue.Staining by basic dyes occurs only from
                                        solutions that are less acidic than hemalum, and it is prevented by prior chemical or enzymatic
                                        extraction of nucleic acids. There is evidence to indicate that co-ordinate bonds, similar to those
                                        that hold aluminium and hematein together, bind the hemalum complex to DNA and to carboxy
                                        groups of proteins in the nuclear chromatin.
                                    </Text>
                                    <Text
                                        style={[
                                            styles.contentBox,
                                            styles.contentParagraphTypography,
                                            // { color: themeforDarkMode.primaryText },
                                        ]}>
                                        The structures do not have to be acidic or basic to be called basophilic and eosinophilic; the
                                        terminology is based on the affinity of cellular components for the dyes. Other colors, e.g.
                                        yellow and brown, can be present in the sample; they are caused by intrinsic pigments such as
                                        melanin. Basal laminae need to be stained by PAS stain or some silver stains, if they have to be
                                        well visible. Reticular fibers also require silver stain. Hydrophobic structures also tend to remain
                                        clear; these are usually rich in fats, e.g. adipocytes, myelin around neuron axons, and Golgi
                                        apparatus membranes.
                                    </Text>
                                </View>
                                {/* // Container for the introduction portion */}
                            </View>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(2)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Periodic acid–schiff reaction (PAS)</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height: this.state.isExpandable == 2 && this.state.expanded ? null : 0, overflow: 'hidden' }}>
                            <View style={styles.contentContainer}>
                                <View>
                                    <Text
                                        style={[
                                            styles.contentBox,
                                            styles.contentParagraphTypography,
                                            // { color: themeforDarkMode.primaryText },
                                        ]}>
                                        Staining methods that specifically stain components of cells and tissues are called histochemical
                                        staining techniques.
                                    </Text>
                                    <Text
                                        style={[
                                            styles.contentBox,
                                            styles.contentParagraphTypography,
                                            // { color: themeforDarkMode.primaryText },
                                        ]}>
                                        Such techniques are invaluable for the understanding of cell and tissue structure and function,
                                        and for making a diagnosis on diseased tissues. The PAS reaction stains complex carbohydrates
                                        a deep red colour, traditionally described as magenta. The mucin produced by goblet cells of the
                                        gastrointestinal and respiratory tracts stains magenta with this technique (and is therefore termed
                                        PAS-positive). Basement membranes and the brush borders of kidney tubules and the small and
                                        large intestines are also PAS-positive, as is cartilage and to some extent collagen. Glycogen, the
                                        intra cellular storage form of carbohydrate found in cells such as hepatocytes and muscle cells, is
                                        also PAS-positive.
                                    </Text>
                                </View>
                                {/* // Container for the introduction portion */}
                            </View>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(3)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Masson trichrome</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height: this.state.isExpandable == 3 && this.state.expanded ? null : 0, overflow: 'hidden' }}>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                This technique is a so-called connective tissue technique since it is used to demonstrate
                                supporting tissue elements, principally collagen. As its name implies, the staining technique
                                produces three colours: nuclei and other basophilic structures are stained blue; collagen is stained
                                green or blue depending on which variant of the technique is used; and cytoplasm, muscle,
                                erythrocytes and keratin are stained bright red.
                                    </Text>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(4)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Alcian Blue</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height:  this.state.isExpandable == 4 && this.state.expanded ? null : 0, overflow: 'hidden' }}>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                It is a mucin stain which may be used in conjunction with other staining methods such as H&E
                                or van Gieson Certain types of mucin, but not all, are stained blue by the Alcian blue method, as
                                is cartilage. When the technique is combined with van Gieson, the Alcian blue colour becomes
                                green.
                                    </Text>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(5)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Van Gieson</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height:  this.state.isExpandable == 5 && this.state.expanded ? null : 0, overflow: 'hidden' }}>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                This is another connective tissue method in which collagen is stained red, nuclei are blue and
                                erythrocytes and cytoplasm yellow. When used in combination with an elastic stain, elastin is
                                stained blue/black in addition to the results described above. This staining technique is
                                particularly useful for blood vessels and skin.
                                    </Text>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(6)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Reticulin stain</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height:  this.state.isExpandable == 6 && this.state.expanded? null : 0, overflow: 'hidden' }}>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                This method demonstrates the reticulin fibres of supporting tissue, which are stained blue/black
                                by this technique. Nuclei may be counterstained blue with haematoxylin, or red with the dye
                                neutral red.

                                    </Text>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(7)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Azan</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height:  this.state.isExpandable == 7 && this.state.expanded? null : 0, overflow: 'hidden' }}>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                This technique is traditionally classed as a connective tissue method but is excellent for
                                demonstrating fine cytological detail, especially in epithelium. Nuclei are stained bright red;
                                collagen, basement membrane and mucin are stained blue; muscle and red blood cells are stained
                                orange to red.
                                    </Text>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(8)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Giemsa stain</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height:  this.state.isExpandable == 8 && this.state.expanded? null : 0, overflow: 'hidden' }}>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                This technique is a standard method for staining blood cellsand other smears of cells (e.g. bone
                                marrow). Nuclei are stained dark blue to violet, background cytoplasm pale blue and
                                erythrocytes pale pink .
                                    </Text>
                        </View>
                    </View>
                    <View style={[styles.btnTextHolder,styles.shadow]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>this.changeLayout(9)} style={[styles.Btn, , styles.shadow]}>
                            <Text style={styles.btnText}>Toluidine blue</Text>
                            <Icon
                                style={{ flex: 0.5,alignSelf:'center' }}
                                name="down-open-big"
                                size={13}
                                color="#ABB4BD"
                            />
                        </TouchableOpacity>
                        <View style={{ height:  this.state.isExpandable == 9 && this.state.expanded? null : 0, overflow: 'hidden' }}>
                            <Text
                                style={[
                                    styles.contentBox,
                                    styles.contentParagraphTypography,
                                    // { color: themeforDarkMode.primaryText },
                                ]}>
                                This stain is one of the few stains which will differentially stain tissues in very thin epoxy resin
                                sections and is particularly used in the high-resolution investigation of the structure of the
                                glomerulus in health and disease, as well as for high-resolution light microscopy of nerves.
                                This dye also stains mast cell granules reddish purple in paraffin sections, a property called
                                metachromasia.
                                    </Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    // titleText: {
    //     fontFamily: 'Arial',
    //     fontWeight: 'bold',
    //     fontSize: 25,
    //     color: 'white'
    // },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    text: {
        fontSize: 17,
        color: 'black',
        padding: 10
    },

    btnText: {
        flex:7,
        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        },

    btnTextHolder: {
        marginTop: 10,
        borderRadius: 4,
        // backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        // fontSize: 20,
        paddingVertical: 15,
        paddingHorizontal: 10
    },

    Btn: {
        flexDirection:'row'
    },
    contentTitleText: {
        // marginTop: 25,
        // marginBottom: 10,
        textAlign: 'center',
        // marginHorizontal: 8,
        fontFamily: 'PTSerif-Bold',
        // fontSize: 35,
        color: colors.secondary,
        marginTop: heightPercentageToDP(3),
        marginBottom: heightPercentageToDP(1.3),
        marginHorizontal: widthPercentageToDP(0.8),
        fontSize: widthPercentageToDP(8),
    },
    contentSubTitleText: {
        // paddingBottom: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        // marginBottom: 10,
        // marginHorizontal: 12,
        fontFamily: 'Roboto-Bold',
        // fontSize: 21,
        color: 'black',
        paddingTop: heightPercentageToDP(3.5),
        marginBottom: heightPercentageToDP(1),
        marginHorizontal: widthPercentageToDP(3.5),
        // fontSize: widthPercentageToDP(3.9),
        fontSize: widthPercentageToDP(5.1),
    },
    subTitle: {
        color: 'black',
        fontFamily: 'Roboto-Bold',
        // fontSize: 18,
        fontWeight: 'bold',
        fontSize: widthPercentageToDP(4.3),
    },

    modalContentContainer: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        flex: 1,
        width: '100%',
        // backgroundColor: 'yellow',
        // paddingHorizontal:widthPercentageToDP(1.5),
        // paddingVertical:heightPercentageToDP(2.5)
    },
    modalFooter: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.lightWhite,
    },
    modalContainer: {
        // paddingVertical: 100,
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: heightPercentageToDP(12),
    },
    modalWrapper: {
        flex: 1,
        // width: '85%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        width: widthPercentageToDP(85),
    },
    closeButtonText: {
        // flex:0.2,
        color: 'red',
        // fontSize: 16,
        fontSize: widthPercentageToDP(4),
    },
    saveButtonText: {
        // flex:0.5,
        color: colors.secondary,
        // fontSize: 16,
        fontSize: widthPercentageToDP(4),
    },
    modalCloseIcon: {
        flex: 0.2,
        color: 'red',
    },
    modalSaveIcon: {
        flex: 0.2,
        color: colors.secondary,
    },
    closeButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: 'green',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    saveButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 15,
        flex: 1,
        // backgroundColor: colors.primary,
        borderColor: 'green',
        borderTopWidth: StyleSheet.hairlineWidth,
        paddingVertical: heightPercentageToDP(1.8),
    },
    modalTitle: {
        // marginHorizontal: 25,
        // paddingVertical: 12,
        textAlign: 'center',
        color: colors.secondary,
        // fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: widthPercentageToDP(6.5),
        paddingVertical: heightPercentageToDP(1.4),
        fontSize: widthPercentageToDP(6),
    },
    contentParagraphTypography: {
        // lineHeight: 22,
        textAlign: 'justify',
        // fontSize: 17,
        fontFamily: 'LiberationSerif-Regular',
        lineHeight: heightPercentageToDP(2.9),
        fontSize: widthPercentageToDP(4),
    },
    contentBox: {
        // paddingHorizontal: 25,
        // paddingVertical: 5,
        paddingHorizontal: widthPercentageToDP(5.8),
        paddingVertical: heightPercentageToDP(5),
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 1,
    },
});

