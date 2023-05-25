import React from 'react'
import {Image, Box, Flex, Heading, VStack, Text, Spacer} from '@chakra-ui/react'

const AboutUs = () => {
  return (
    <VStack bg='#495e57' mt='20' width='full'>
    <Box
        className='about'
        as='section'
        color="#edefee"
        maxWidth="1280px"
        height={500}
        w={['80%', '100%', '100%']}
        left={0}
        right={0}
        px={8}
        py={12}
        bg='#495e57'
        justifyContent="center"
        alignContent='center'
        alignItems='center'
        mt={12}
        >
          <Flex mr={40} gap={4} justifyContent="space-evenly">
            <VStack spacing={4} alignItems="flex-start" justifyContent="center">
              <Heading as='h1' textShadow='0 0 2px #495e57' fontFamily={'Markazi Text'} fontSize={['40','50', '64']}fontWeight='medium' color='#f4ce14'>Little Lemon</Heading>
              <Heading as='h2'fontFamily={'Markazi Text'} fontSize={['30','35', '40']} fontWeight='regular'>Chicago</Heading>
                <Text fontFamily={'Karla'} fontWeight='medium' fontSize={['8','12', '18']} lineHeight='1.5'>Little Lemon is owned by two Italian brothers, Mario and Adrian,<br/>who moved to the United States to pursue their<br/>shared dream of owning a restaurant.</Text>
                <Spacer/>
                <Text fontFamily={'Karla'} fontWeight='medium' fontSize={['8','12', '18']} lineHeight='1.5'>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant,
                <br/>focused on traditional recipes served with a modern twist.
                <br/>The restaurant has a rustic and relaxed atmosphere<br/> and cuisines are inspired by Italian, Greek, and Turkish culture.
                </Text>
            </VStack>
            <Box mr={40} py={4} justifySelf='center' className='imgCont' borderRadius='10px'>
              <Image className='image' boxShadow='dark-lg' position='absolute' src="./MarioAdrian1.jpg" justifyContent="center" alignSelf="center" justifySelf='center' alt="Mario and Adrian image" boxSize={['100px','120px', '290px']} borderRadius='10px'/>
            </Box>
          </Flex>
      </Box>
    </VStack>
  )
}

export default AboutUs