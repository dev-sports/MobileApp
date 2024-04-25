import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children, source }) => {
  return (
    <ImageBackground 
      source={source}  // Use the source prop for background image
      style={styles.background}
      resizeMode="cover" // Ensures the background covers the full area of the component
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

export default Background;