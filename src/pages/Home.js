import '../index.css';
import { React, useRef } from 'react'
import Button from '@mui/material/Button'
import {
  Text,
  useColorModeValue,
  Container,
  Box,
  Center,
  Flex,
  Heading,
  VStack,
  HStack,
} from '@chakra-ui/react'
import Img from '../assets/images/Dangomushi_icon.png'
import SchwarzImg from '../assets/images/schwarz.png'
import Navbar from '../components/Navbar.js'
import Works from './Works.jsx'
import { useInView } from 'react-intersection-observer';
import 'animate.css';

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

const component = ({ msg }) => {
  const texts = msg.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        { item.match(/\n/) ? <br /> : item }
      </React.Fragment>
    );
  });
  return <div>{texts}</div>;
}

const Home = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-200px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, ggerOnce: true, // 最初の一度だけ実行
  });


  return (
	<>
	<div>
        <div style={{ height: '2000px', backgroundColor: 'blue' }}>contents</div>
      {/* refを与えた要素がウインドウ内に現れるとinViewがtrueになります */}
      <div ref={ref} style={{ height: '300px' }}>
        {inView && (
          <div className="animate__animated animate__fadeInUp" >
            <p>黄色の要素が出現！</p>
          </div>
        )}
      </div>
    </div>
	</>
  );
}

export default Home;
