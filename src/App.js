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

  )

}

function CssLink() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css" />
      <link rel="stylesheet" type="text/css" href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/9-1-4/css/9-1-4.css" />
    </div>
  )
}

const Work = ({ children }) => {
  return (
    <p className="Work">{children}</p>
  );
}

function App() {
  const h = window.parent.screen.height;
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-50px',
  });
  const workText = `
Language: Japanese, English, Russian
Programing: OS, Compiler, Trancepiler, CLI Editor
`
  return (
    <div className='App'>
      <CssLink />
      <Flex h={h - 200} justify='center' align='center' >
        <Icon />
      </Flex>
      <Center align='center'>
        <VStack>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </VStack>
      </Center>

      <Flex h={h} justify='center' align='center' >
        <div ref={ref} >
          {inView && (
            <div className="Title">
              <div className="animate__animated animate__fadeInUp" >
                <Center w="full" h="full">
                  <Box align="left">
                    <h3>
                      Skils
                    </h3>
                    <img
                      src={SchwarzImg}
                      alt="image"
                      className='Work-img'
                      align="center"
                    />
                    <Work>{workText}</Work>
                  </Box>
                </Center>
              </div>
            </div>
          )}
        </div>
      </Flex>
    </div>
  );
}

export default App;

/*
      */

