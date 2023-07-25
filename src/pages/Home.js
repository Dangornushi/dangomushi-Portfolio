import '../index.css';
import { React, useRef, useEffect } from 'react'
import {
  Box,
  Heading,
  VStack,Grid,Card,
} from '@chakra-ui/react'
import Img from '../assets/images/Dangomushi_icon.png'
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import twitter_icon from '../assets/images/twitter_icon.png';
import github_icon from '../assets/images/github_icon.png';
import smooth from '../components/SmoothScrollComponent';

const whoAmI = `
限りなく東京に近い埼玉に在住の年齢・職業不詳の謎の生き物。
二度寝と自作コンパイラに目がない。
日本語と平日が苦手。
「かっこいいから」という理由でプログラミングを始めるも
やめられなくなり現在に至る。

以後お見知り置きを。
`

const workText = "Language: Japanese, English, Russian\nPrograming: OS, Compiler, Transpiler, CLI Editor\n"

const Icon = () => {
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

const MainData = () => {
  return (
     
      <Box w="100vw" display="flex" justifyContent="center" alignItems="center">
        <Box w="60vw">
        <section id="whoAmI">
            <div class="Title" align="left"> 
              <h2>Who am I?</h2> 
              {whoAmI} 
            </div>   
          <img src={twitter_icon} width={40} height={40} />
          <img src={github_icon} width={40} height={40} />
      </section>
        </Box>
    </Box>
  )
}
function ScrollWindow(elem) {
            var element = document.getElementById(elem);
            var rect = element.getBoundingClientRect();
            var elemtop = rect.top + window.pageYOffset;
            document.documentElement.scrollTop = elemtop;
}

const Home = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-80px', // ref要素が現れてから50px過ぎたら
  });

  return (
	<>

    <div className="fadeIn"> 
        <MainData/>
    </div>
	</>
  );
}

export default Home;

      {/* refを与えた要素がウインドウ内に現れるとinViewがtrueになります */}
      {/*
      <div ref={ref} style={{ height: '200px' }}>
        {inView && (
          <>
          <div className="animate__animated animate__fadeInUp" align="center" >
            <MainData/> 
          </div>
          </>
        )}
      </div>
      */}
