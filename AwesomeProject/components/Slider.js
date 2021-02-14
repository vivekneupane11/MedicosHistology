import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {sliderImages} from '../constants/mocks';

const width = Dimensions.get('screen').width;
const height = width / 1.61;
let images = [];
// let image = '../assets/images/SimpleCuboidal/simple_sq2.webp';
// let hello = "hello world";


const Slider = (props) => {
    useEffect(()=>{
        sliderImages.map(data=>{
            console.log("77777777777777777", data.title,props.title);
            return data.title == props.title ?
            data.sliderImages.map(image=>{
                console.log("8888888888888888888", data.title ,props.title);
                images.push(image)
                // images.push(require(`../assets/images/${(props.title).replace(' ','')}/${image}`));
                // console.log("hello",hello.replace(' ',''))
            }):
            console.log("bye");
         })
         return(()=>{
             images = [];
         })
    },[])
   
    const [active, setActive] = useState(0);
    var change = ({ nativeEvent }) => {
        const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        {console.log(slide)}
        if (slide !== active) {
            setActive(slide);
        }
    }
  };
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        style={styles.sliderScrollView}
        onScroll={change}
        showsHorizontalScrollIndicator={false}>
        {/* <Image style={{height:100,width:100}} source={require('../assets/images/SimpleCuboidal/simple_sq2.webp')}></Image> */}
        {
            images.map((item, index) => {
                return <Image
                    key={index}

                    source={item}
                    style={{ height, width, resizeMode: 'stretch' }}
                />
            }
            )
        }
  
        {/* Paging indicator */}
      </ScrollView>
      <View style={styles.indicator}>
        {images.map((i, k) => {
          return (
            <Text
              key={k}
              style={k == active ? styles.pagingActiveText : styles.pagingText}>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderScrollView: {
    alignSelf: 'center',
    height: 255,
    width: '100%',
  },
  indicator: {
    flexDirection: 'row',
    position: 'relative',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingActiveText: {
    color: '#3F3D56',
  },
  pagingText: {
    color: '#156B9A',
  },
});

export default Slider;
