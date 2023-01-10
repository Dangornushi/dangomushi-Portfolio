import './App.css';
import './Header.jsx'
import Header from './Header.jsx';
import {
  Container,
  Box,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'

import { useInView } from 'react-intersection-observer';
import 'animate.css';

function App() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-150px', // ref要素が現れてから50px過ぎたら
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <Center w="full" h="full">
        <Box></Box>
        <div class="circle"></div>
      </Center>
      <Container>
        <Center w="full" h="full">
          <div ref={ref} style={{ height: '200px' }}>
            {inView && (
              <div className="Title">
                <div className="animate__animated animate__fadeInUp" >
                  <h2>
                    Hello, I&apos;m an indie app developer based in Japan!
                  </h2>
                  <Center w="full" h="full">
                    <Box w="400px" h="400px">
                      <h3>
                        Hello
                      </h3>
                      <p>
                        Hello, I&apos;m an indie app developer based in Japan!
                        Hello, I&apos;m an indie app developer based in Japan!
                        Hello, I&apos;m an indie app developer based in Japan!
                        Hello, I&apos;m an indie app developer based in Japan!
                        Hello, I&apos;m an indie app developer based in Japan!
                      </p>
                    </Box>
                  </Center>
                </div>
              </div>
            )}
          </div>
        </Center>
      </Container>
    </div>
  );
}

export default App;
