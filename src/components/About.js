import React from 'react'
import { Image, Flex, Box, VStack, Text, Heading, HStack } from '@chakra-ui/react';

const About = () => {
  return (
      <Box
        className='about'
        as='section'
        color="#333"
        maxWidth="1280px"
        height={370}
        w={['80%', '100%', '100%']}
        left={0}
        right={0}
        px={8}
        py={4}
        justifyContent="center"
        alignItems='center'
        >
          <Flex mr={40} justifyContent="space-evenly">
            <VStack alignItems="flex-start" justifyContent="center">
              <Heading as='h1' textShadow='0 0 2px #495e57' fontFamily={'Markazi Text'} fontSize={['40','50', '64']}fontWeight='medium' color='#f4ce14'>Little Lemon</Heading>
              <Heading as='h2'fontFamily={'Markazi Text'} fontSize={['30','35', '40']} fontWeight='regular'>Chicago</Heading>
                <Text fontFamily={'Karla'} fontWeight='medium' fontSize={['8','12', '18']} lineHeight='1.5'>Little Lemon is a charming neighborhood bistro<br/>that serves simple food and classic cocktails<br/>in a lively but casual environment. The restaurant<br/>features a locally-sourced menu with daily specials.</Text>
            </VStack>
            <HStack spacing={['4','20', '48']} className='imgCont' borderRadius='10px'>
              <Image className='image' boxShadow='dark-lg' mt={16} src="./restoChefB.jpg" justifyContent="center" alignSelf="center" justifySelf='center' alt="Mario simage" boxSize={['100px','140px', '250px']} borderRadius='10px'/>
              <Image className='image' boxShadow='dark-lg' position='absolute' src="./MarioAdrian.jpg" justifyContent="center" alignSelf="center" justifySelf='center' alt="Mario and Adrian image" boxSize={['100px','120px', '250px']} borderRadius='10px'/>
            </HStack>
          </Flex>
      </Box>
  )
}

export default About;