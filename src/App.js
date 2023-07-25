import './App.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import 'typeface-quicksand'
import {
  Container,
  Box,
  Center,
  Flex,
  Heading,
  VStack,
  HStack,
} from '@chakra-ui/react'
import Img from './assets/images/Dangomushi_icon.png'
import SchwarzImg from './assets/images/schwarz.png'
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'

function Icon() {
  return (
    <VStack>
      <img
        src={Img}
        alt="image"
        className='Icon-img'
        align="center"
      />
      <Box className="Title">
        <Heading as="h2" variant="page-title">
          Dangomushi
        </Heading>
      </Box>
    </VStack>
  );
}

function CssLink() {
  return ( <div>
      <link rel="stylesheet" type="text/css" href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css" />
      <link rel="stylesheet" type="text/css" href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/9-1-4/css/9-1-4.css" />
    </div>
  )
}

const PoyoPoyo = ( ) => {
	return (

      <Center align='center'>
        <VStack>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </VStack>
      </Center>
	);
}

function ScrollWindow(elem) {
            var element = document.getElementById(elem);
            var rect = element.getBoundingClientRect();
            var elemtop = rect.top + window.pageYOffset;
            document.documentElement.scrollTop = elemtop;
}

function App() {
  const h = window.parent.screen.height;
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-50px',
  });
  return (
	<div className='App'>
	    <Box h={h}>
		<Navbar />
		<Flex h={h - 200} justify='center' align='center' >
	  		<Icon />
		</Flex>
	  	<CssLink />
		<PoyoPoyo />
	    </Box>
	<Home />
    </div>
  );
}

export default App;

{/*

*/}
