//import img from './assets/images/Dangomushi_icon.png'
import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react';
const thumb = require('./assets/images/Dangomushi_icon.png');
/*
import {
	Box,
	Center,
	Container,
} from '@chakra-ui/react'
*/

function Header() {
	const assetImg = Image.resolveAssetSource(thumb);
	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={[styles.thumbnail, {
					transform: [
						{ translateX: - assetImg.width / 2 },
						{ translateY: - assetImg.height / 2 },
					]
				}]}
				source={thumb} />
		</SafeAreaView>

	)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  }
});


export default Header;

/*

 * */
