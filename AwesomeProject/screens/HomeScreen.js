import React from 'react';
import BackgroundHeader from '../components/BackgroundHeader';
import BottomTab from '../components/BottomTab';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import {topics, topicImages} from '../constants/mocks';
import {useTheme} from '../src/utils/DarkTheme/ThemeManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Card, Badge, Button, Block, Text} from '../components';
import {theme, mocks} from '../constants';
import {colors} from '../constants/theme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../src/utils/responsive';

const {width} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const {mode, theme: themeforDarkMode, toggle} = useTheme();
  AsyncStorage.getItem('userinfo').then((user) => {
    console.log(user, 'USSERRRRRRRRRRRRRRRRRRRRRRRR');
  });
  const SubTopicsCard = ({title, titleId, img, id}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Content', {
            id: id,
            title: title,
            titleId: titleId,
          });
        }}
        style={[
          styles.topHotelCard,
          {
            backgroundColor: themeforDarkMode.secondaryHeader,
          },
        ]}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon
            style={{paddingHorizontal: 7}}
            name="bookmark-empty"
            size={24}
            color="#ABB4BD"
          />
        </View>
        <Image
          resizeMode="cover"
          tintColor={mode == 'dark' ? '#dde0eb' : undefined}
          style={[styles.topHotelCardImage]}
          source={img}
        />
        <View style={{paddingHorizontal: 10}}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: themeforDarkMode.secondaryText,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{backgroundColor: themeforDarkMode.secondaryHeader}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: theme.sizes.base}}>
        <Block flex={false} row space="between" style={[styles.categories]}>
          {mocks.categories.map((category) => (
            <Card
              center
              middle
              shadow
              key={category.id}
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
              {console.log(category.id, 'gvgvvvvvvvvvvvvvvvvvvv')}
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                onPress={() => navigation.navigate('Collections')}>
                <Badge size={50}>
                  <Image
                    style={{height: 60, width: 60}}
                    resizeMode="contain"
                    tintColor={mode == 'dark' ? '#dde0eb' : colors.primary}
                    source={category.image}
                  />
                </Badge>
                <Text
                  height={20}
                  style={{
                    paddingTop: heightPercentageToDP(1),
                    fontSize: widthPercentageToDP(3.5),
                    fontWeight: '900',
                    color: themeforDarkMode.topCategoryText,
                    textAlign: 'center',
                  }}>
                  {category.name}
                </Text>
                <Text gray caption>
                  {category.count}
                </Text>
              </TouchableOpacity>
            </Card>
          ))}
        </Block>
        {topics.map((item, mainindex) => {
          let titleId = item.id;
          return (
            <View key={mainindex.toString() + titleId}>
              {console.log(
                '????????????????????????',
                mainindex.toString() + titleId,
              )}
              <View style={styles.contentflatListHeader}>
                <Text
                  style={{
                    paddingHorizontal: 12,
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: themeforDarkMode.secondaryText,
                  }}>
                  {item.title}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      paddingHorizontal: 12,
                      color: colors.gray,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={item.subtopics}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: 20,
                  marginTop: 10,
                  paddingBottom: 40,
                }}
                keyExtractor={(items, index) => {
                  let key =
                    items.title +
                    items.imgPath +
                    item.id +
                    index +
                    item.subtopics[index].title;
                  return key.trim('').toLowerCase();
                }}
                renderItem={({item}) => {
                  return (
                    <SubTopicsCard
                      key={item.title + item.imgPath + item.id}
                      id={item.id}
                      title={item.title}
                      titleId={titleId}
                      img={item.imgPath}
                    />
                  );
                }}
              />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.premiumContainer}>
        <Text
          style={{
            paddingHorizontal: 12,
            fontWeight: 'bold',
            fontSize: 18,
            color: themeforDarkMode.secondaryText,
          }}>
          Premium Contents
        </Text>
        <View style={styles.premiumWrapper}>
          <View
            style={[
              styles.premiumContent,
              {backgroundColor: themeforDarkMode.premiumContentBackground},
            ]}>
            <View style={styles.toppremiumIcons}>
              <Icon
                style={{paddingHorizontal: 7}}
                name="award"
                size={32}
                color="white"
              />
            </View>
            <View style={styles.premiumImage}>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  style={[styles.topHotelCardImagePremium]}
                  tintColor={mode == 'dark' ? '#dde0eb' : '#ffffff'}
                  source={require('../assets/logos/mcq.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.premiumFooter,
                {backgroundColor: themeforDarkMode.primaryBackground},
              ]}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: themeforDarkMode.secondaryText,
                }}>
                Premium Content
              </Text>
              <Text
                style={{
                  color: colors.secondary,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {' '}
                $2{' '}
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.premiumContent,
              {backgroundColor: themeforDarkMode.premiumContentBackground},
            ]}>
            <View style={styles.toppremiumIcons}>
              <Icon
                style={{paddingHorizontal: 7}}
                name="award"
                size={32}
                color="white"
              />
            </View>
            <View style={styles.premiumImage}>
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  style={[styles.topHotelCardImagePremium]}
                  tintColor={mode == 'dark' ? '#dde0eb' : '#ffffff'}
                  source={require('../assets/logos/ospe.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.premiumFooter,
                {backgroundColor: themeforDarkMode.primaryBackground},
              ]}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: themeforDarkMode.secondaryText,
                }}>
                Premium Content
              </Text>
              <Text
                style={{
                  color: colors.secondary,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {' '}
                $2{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  topHotelCard: {
    justifyContent: 'space-evenly',
    height: 150,
    width: 150,
    backgroundColor: '#f1f1f1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    marginTop: 7,
    height: 60,
    width: '95%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHotelCardImagePremium: {
    marginTop: 15,
    height: 80,
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    paddingVertical: 15,
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base,
  },
  category: {
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
  contentflatListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop:14,
  },
  premiumContainer: {
    paddingHorizontal: 5,
  },
  premiumWrapper: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  premiumContent: {
    width: width / 2.2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    backgroundColor: colors.primary,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  toppremiumIcons: {
    position: 'absolute',
    top: 5,
    right: 5,
    flexDirection: 'row',
    zIndex: 1,
  },
  premiumImage: {
    paddingVertical: 20,
    width: '100%',
    height: width / 2.7,
  },
  premiumFooter: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
