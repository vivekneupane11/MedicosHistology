import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Badge, Button, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import { useTheme } from '../src/utils/DarkTheme/ThemeManager';
import { heightPercentageToDP, widthPercentageToDP } from '../src/utils/responsive';
const {width} = Dimensions.get('window');




const CollectionScreen = ({ navigation }) => {
    const { mode, theme: themeforDarkMode, toggle } = useTheme();
    return (
        <View style={{paddingVertical: theme.sizes.base}}>
            <Block
                flex={false}
                row
                space="between"
                style={[styles.categories, { paddingVertical: 15 }]}>
                {mocks.collections.map((collection) => (
                    <Card
                        center
                        middle
                        shadow
                        key={collection.name}
                        style={[
                            styles.category,
                            {
                                backgroundColor: themeforDarkMode.secondaryHeader,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 6.27,

                                elevation: 10,
                            },
                        ]}>
                        <TouchableOpacity
                            style={{ justifyContent: 'center', alignItems: 'center' }}

                            onPress={() => navigation.navigate(collection.routeName)}>
                            <Badge
                                // margin={[0, 0, 15]}
                                size={50}
                                color="rgba(41,216,143,0.20)">
                                <Image style={styles.image} resizeMode='contain' source={collection.image} />
                            </Badge>
                            <Text
                                height={20}
                                style={{
                                    fontWeight: '900',
                                    color: themeforDarkMode.topCategoryText,
                                }}>
                                {collection.name}
                            </Text>
                            <Text gray caption>
                                {collection.count}
                            </Text>
                        </TouchableOpacity>
                    </Card>
                ))}
            </Block>
        </View>
    )
}

export default CollectionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: 10
    },
    mediumsizeimage: {
        height: 120,
        width: 200,
        margin: 'auto'

    },
    categories: {
        paddingVertical: 15,
        flexWrap: 'wrap',
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base,
    },
    category: {
        // this should be dynamic based on screen width
        minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
      },
    image:{
         height: heightPercentageToDP(16),
          width: widthPercentageToDP(16) }

});