import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react';
import footPrintImg from '../assets/images/dangomushi_hovbar.png'
import hoverPrintImg from '../assets/images/dangomushi_2_hovbar.png'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
		<Link href="/">
				
          <LogoBox
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
          >	 
	    <img src={isHovered ? hoverPrintImg : footPrintImg} width={40} height={80} alt="Image" /> 
            <Text
		color={useColorModeValue('gray.800', 'whiteAlpha.900')}
		fontFamily='M PLUS Rounded 1c'
		fontWeight="bold"
		ml={3}
	    >
		Dangomushi			
            </Text>
          </LogoBox>
		</Link>
  );
}

export default Logo

