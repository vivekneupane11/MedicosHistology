import React,{useState} from 'react';
import { ScrollView, Image, Text, View, Dimensions,StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
const height = width / 1.61;
const images = [
    require('../assets/images/1.jpeg'),
    require('../assets/images/2.jpeg'),
    require('../assets/images/3.jpeg'),
    require('../assets/images/4.jpeg'),
    require('../assets/images/5.jpeg'),
]

const Slider = () => {
    const [active, setActive] = useState(0);
    var change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    }
    return <ScrollView
        pagingEnabled
        horizontal
        style={styles.sliderScrollView}
        onScroll={change}
        showsHorizontalScrollIndicator={false}
    >
        {
            images.map((item, index) => {
                return <Image
                    key={index}
                    source={item}
                    style={{ height, width, resizeMode: 'cover' }}
                />
            }
            )
        }
        <View style={styles.indicator}>
            {
                images.map((i, k) => {
                    return <Text key={k} style={k == active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                })
            }
        </View>
        {/* Paging indicator */}
    </ScrollView>

}

const styles = StyleSheet.create(
    {
        sliderScrollView: {
            marginTop: 29,
            alignSelf: 'center',
            height: 255,
            width: '100%',
            backgroundColor: 'blue'
        },
        indicator: {
            flexDirection: 'row',
            position: 'relative',
            bottom: 0,
            alignSelf: 'center'
        }
    }
)

export default Slider;