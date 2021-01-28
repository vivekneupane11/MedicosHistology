import React from 'react';
import BackgroundHeader from '../components/BackgroundHeader';
import BottomTab from '../components/BottomTab';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../src/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);
import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity, FlatList
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { colors } from '../constants/theme';



const { width } = Dimensions.get("window");
const HomeScreen = ({ navigation }) => {
  const TopHotelCard = ({ hotel }) => {
    return (
      <View style={[styles.topHotelCard,styles.shadow]}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon style={styles.bookmark} name="bookmark-empty" size={24} color="#ABB4BD" />

        </View>
        <Image resizeMode='cover' style={[styles.topHotelCardImage]} source={hotel.image} />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{hotel.name}</Text>
          <Text style={{ fontSize: 9, fontWeight: 'bold', color: colors.gray }}>
            {hotel.location}
          </Text>
        </View>
      </View>)
  }


  return (
    <ScrollView style={styles.container}>
      <BackgroundHeader navigation={navigation} />
      {/* 

<BottomTab/> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}
      >
        <Block flex={false} row space="between" style={[styles.categories, styles.blockContainer]}>
          {mocks.categories.map(category => (
            <TouchableOpacity

              key={category.name}
              onPress={() => navigation.navigate("Explore", { category })}
            >
              <Card center middle shadow style={[styles.category, styles.shadow]}>
                <Badge
                  margin={[0, 0, 15]}
                  size={50}
                  color="rgba(41,216,143,0.20)"
                >
                  <Image source={category.image} />
                </Badge>
                <Text height={20} style={styles.categoryName}>
                  {category.name}
                </Text>
                <Text gray caption>
                  {category.count}
                </Text>
              </Card>
            </TouchableOpacity>
          ))}
        </Block>

        <View style={[styles.contentflatListHeader,styles.f_r_sb_c]}>
          <Text style={styles.contentflatListHeaderTitle} >HyperClombic Misopology</Text>
          <TouchableOpacity>
            <Text style={styles.contentflatListHeaderViewAll} >View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={mocks.hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 10,
            paddingBottom: 40,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => { navigation.navigate('Content') }}>
                <TopHotelCard hotel={item} />
              </TouchableOpacity>
            );
          }} />



        <View style={[styles.contentflatListHeader,styles.f_r_sb_c]}>
          <Text style={styles.contentflatListHeaderTitle} >Epithelial Tissue</Text>
          <TouchableOpacity>
            <Text style={styles.contentflatListHeaderViewAll} >View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mocks.hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 10,
            paddingBottom: 40,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <TopHotelCard hotel={item} />
              </TouchableOpacity>
            );
          }} />
        <View style={[styles.contentflatListHeader,styles.f_r_sb_c]}>
          <Text style={styles.contentflatListHeaderTitle} >Epithelial Tissue</Text>
          <TouchableOpacity>
            <Text style={styles.contentflatListHeaderViewAll} >View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mocks.hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 10,
            paddingBottom: 40,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <TopHotelCard hotel={item} />
              </TouchableOpacity>
            );
          }} />
        <View style={[styles.contentflatListHeader,styles.f_r_sb_c]}>
          <Text style={styles.contentflatListHeaderTitle} >Epithelial Tissue</Text>
          <TouchableOpacity>
            <Text style={styles.contentflatListHeaderViewAll} >View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mocks.hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 10,
            paddingBottom: 40,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <TopHotelCard hotel={item} />
              </TouchableOpacity>
            );
          }} />
        <View style={[styles.contentflatListHeader,styles.f_r_sb_c]}>
          <Text style={styles.contentflatListHeaderTitle} >Epithelial Tissue</Text>
          <TouchableOpacity>
            <Text style={styles.contentflatListHeaderViewAll} >View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mocks.hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 10,
            paddingBottom: 40,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <TopHotelCard hotel={item} />
              </TouchableOpacity>
            );
          }} />
        <View style={[styles.contentflatListHeader,styles.f_r_sb_c]}>
          <Text style={styles.contentflatListHeaderTitle} >Epithelial Tissue</Text>
          <TouchableOpacity>
            <Text style={styles.contentflatListHeaderViewAll} >View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mocks.hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 10,
            paddingBottom: 40,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <TopHotelCard hotel={item} />
              </TouchableOpacity>
            );
          }} />
      </ScrollView>
      <View style={styles.premiumContainer}>
        <Text style={styles.contentflatListHeaderTitle} >Premium Contents</Text>
        <View style={styles.premiumWrapper}>
          <TouchableOpacity>
            <View style={[styles.premiumContent,styles.shadow,styles]}>
              <View style={styles.toppremiumIcons}>
                <Icon style={styles.bookmark} name="bookmark-empty" size={24} color="#ABB4BD" />
              </View>
              <View style={styles.premiumImage}>
                <Image resizeMode='cover' style={[styles.topHotelCardImage]} source={require("../assets/logos/test.png")} />
              </View>
              <View style={[styles.premiumFooter,styles.f_r_sb_c]}>
                <Text style={styles.premiumText}>Premium Content</Text>
                <Text style={styles.cost}> $2 </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.premiumContent,styles.shadow]}>
              <View style={styles.toppremiumIcons}>
                <Icon style={styles.bookmark} name="bookmark-empty" size={24} color="#ABB4BD" />
              </View>
              <View style={styles.premiumImage}>
                <Image resizeMode='cover' style={[styles.topHotelCardImage]} source={require("../assets/logos/test.png")} />
              </View>
              <View style={[styles.premiumFooter,styles.f_r_sb_c]}>
                <Text style={styles.premiumText}>Premium Content</Text>
                <Text style={styles.cost}> $2 </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightWhite
  },
  contentContainer: {
    paddingVertical: theme.sizes.base,
  },
  blockContainer: {
    paddingVertical: 15,
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  topHotelCard: {
    height: 150,
    width: 150,
    backgroundColor: colors.lightWhite,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    marginTop: 10,
    height: 90,
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base
  },
  category: {
    backgroundColor: colors.lightGray,
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  },
  categoryName: {
    fontWeight: '900'
  },
  contentflatListHeader: {
    paddingHorizontal: 10,
  },
  contentflatListHeaderTitle: {
    paddingHorizontal: 12,
    fontWeight: 'bold',
    fontSize: 18
  },
  contentflatListHeaderViewAll: {
    paddingHorizontal: 12,
    color: colors.gray,
    fontSize: 12,
    fontWeight: 'bold'
  },
  premiumContainer: {
    paddingHorizontal: 5,

  },
  premiumWrapper: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    flex: 1

  },
  premiumContent: {
    width: (width) / 2.2,
    borderRadius: 10,
    backgroundColor: colors.primary,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'

  },
  toppremiumIcons: {
    position: 'absolute',
    top: 5,
    right: 5,
    flexDirection: "row",
    zIndex: 1
  },
  premiumImage: {
    paddingVertical: 20,
    width: '100%',
    height: (width) / 2.7
  },
  premiumFooter: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  bookmark: {
    paddingHorizontal: 7
  },
  premiumText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  cost: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 18
  },
  f_r_sb_c:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

});