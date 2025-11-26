import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
	<View style={styles.container}>
	  <Image
	    source={require('./assets/mapCapture.png')}
	    style={styles.image}
		resizeMode="contain"
	  />
	
	  <View style={styles.bottomLeftContainer}>
		<Text style={styles.greyText}>Plan Route</Text>
	  </View>
	
      <View style={styles.bottomRightContainer}>
        <Text style={styles.blueText}>Start Tracking</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	justifyContent: 'flex-start',
	alignItems: 'center',
  },
  image: {
	width: '100%',
	height: 722,
  },
  bottomLeftContainer: {
	position: 'absolute',
	bottom: 79,
	left: 80,
  },
  bottomRightContainer: {
    position: 'absolute',
    bottom: 79,
    right: 80,
  },
  greyText: {
    fontSize: 24,
	fontWeight: 'bold',
    color: 'grey',
  },
  blueText: {
	fontSize: 24,
	fontWeight: 'bold',
	color: 'blue',
  },
});
