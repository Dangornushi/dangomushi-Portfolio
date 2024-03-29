import Logo from './Logo'
import NextLink from 'next/link'
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList, MenuButton,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'

import {HumburgerIcon} from '@chakra-ui/icons'

const LinnItem = ({ href, path, children }) => { 
	const active = path == href
	const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
	return (
		<NextLink href={href}>
			<Link
				p={2}	
				bg={active ? 'glassTeal' : undefined}	
				color={active ? '#202023' : inactiveColor}
			>
				{children}
			</Link>
		</NextLink>
	)
}

//#ffffff40
const Navbar = props => {

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			h="15%"
			bg={useColorModeValue('#282c34', '#20202380')}
			style={{backdropFilter: 'blur(10px'}}
			zIndex={1}
			{...props}
		>
			<Container
				displauy="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo path={props}/>
					</Heading>
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbar
