import { Box } from '@chakra-ui/react'
import Image from './assets/images/Dangomushi_icon.png'

function Header() {
	return (
			<img 
				src={Image} 
				alt="image" 
				className='Icon-img'
				align="center"
			/>
	)
}


export default Header;

