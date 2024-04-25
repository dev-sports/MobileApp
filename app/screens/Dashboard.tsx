import React, { memo, useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { Navigation } from '../types';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get('window');  // Get the full width of the device

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<FlatList>(null);

  // Array of image sources
  const images = [
    { id: '1', uri:require('../assets/dashboard.jpg')},
    { id: '2', uri:require('../assets/dashboard2.jpg')},
    { id: '3', uri:require('../assets/dashboard2.jpg')}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        if (sliderRef.current) {
          sliderRef.current.scrollToIndex({ animated: true, index: nextIndex });
        }
        return nextIndex;
      });
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <View style={styles.sliderContainer}>
        <FlatList
          data={images}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          ref={sliderRef}
          renderItem={({ item }) => (
            <Image  source={item.uri} style={styles.image} />
          )}
          showsHorizontalScrollIndicator={false}
          onScrollToIndexFailed={info => {
            console.log('scroll to index failed:', info);
          }}
        />
      </View>

      <View style={[styles.box]}>
      <LinearGradient
        style={[styles.boxContainer]}
        locations={[0, 1]}
        colors={["#ffbb3e", "#ff3c30"]} >
        
          <Text style={styles.text}>Box 1</Text>
          <Text style={styles.text}>123</Text>
        
      </LinearGradient>

      <LinearGradient
        style={[styles.boxContainer]} locations={[0, 1]}
        colors={["#ffbb3e", "#ff3c30"]}>
          <Text style={styles.text}>Box 1</Text>
          <Text style={styles.text}>123</Text>
      </LinearGradient>
      </View>
      
      <Text style={{}}>Up Coming Tournaments</Text>
      

      <View style={[styles.box1]}>
      <Image  source={require('../assets/dashboard.jpg')} style={styles.image1} />
         
      </View>
      <View style={[styles.box1]}>

         
      </View>
      <View style={[styles.box1]}>

         
      </View>
      <View style={[styles.box1]}>

         
      </View>


     </>
   
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    //marginTop:20,
    flex:1,
    height: hp(25),
  },
  boxContainer: {
    flex:1,
    flexDirection: 'row',  // Align children horizontally
    marginTop:15,
    padding: 20,  // Padding inside each box
    marginHorizontal: 5,  // Space between boxes
    backgroundColor: '#FFB63D',  // Background color for visibility
    alignItems: 'center',  // Center content horizontally
    justifyContent: 'center',  // Center content vertically
    borderRadius: 10,  // Optional: rounded corners
  },
  box: {
    flex: 1,  // Each box takes equal width
    flexDirection: 'row',  // Align children horizontally
    height:hp(15),
    width:hp(49)
  },
  box1: {
    flex:1,
    height:hp(20),
    width:hp(48),
    backgroundColor:'#FFFFFF',
    borderRadius: 25,
    alignItems: 'flex-start',  // Center content horizontally
    justifyContent: 'flex-start',  // Center content vertically
    margin: 2,  // Adds space around the box
  },
  text: {
    fontSize: 16,
    color:'#FFFFFF'
  },
  number: {
    fontSize: 24,
    color: '#000',
  },
  image: {
    width: width,
    height: '100%'
  },
  image1: {
    top:7,
    left:7,
    width: wp(30),
    height: hp(18)
  },
  heading: {
    flex:1,
    padding:10,
    fontSize:15,
    fontWeight:'500',
    color:'#444444'
  },
});

export default memo(Dashboard);
