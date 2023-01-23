import React from 'react'
import { Flex, Box, VStack, Text, Heading, Badge, Spacer, Image, HStack, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon} from '@chakra-ui/icons'
const Hero = () => {

  return (
      <Box
          as='section'
          maxWidth="1280px"
          height={420}
          bg='url(resto.jpg)center/cover no-repeat'
          w='100%'
          boxShadow='2xl'
          left={0}
          right={0}
          top={0}
          p={['4', '8', '16']}
          blur='0.3px'
          mt={-28}
          >
          <Flex px={['4', '8', '16']} gap={8} justifyContent="flex-start">
          <IconButton
            as='a'
            href='/'
            variant='outline'
            color='#495e57'
            aria-label='Back icon'
            icon={<ArrowBackIcon boxSize={8}/>}
            mt={8}
            />
            <VStack alignItems="flex-start" justifyContent="space-evenly">
              <Heading textShadow='0 0 30px black' as='h1' fontFamily={'Markazi Text'} fontSize={['40','50', '64']} fontWeight='bold' color='#f4ce14'>Little Lemon</Heading>
              <Heading textShadow='0 0 30px black' as='h2'fontFamily={'Markazi Text'} fontSize={['30','35', '40']} fontWeight='bold' color='#edefee' >Chicago</Heading>
          <Spacer/>
                <Text textShadow='0 0 30px black' fontFamily={'Karla'} fontWeight='bold' fontSize={['12','16', '18']} color='white' lineHeight='1.5'>We are a family owned<br/> Mediterranean restaurant,<br/>focused on traditional recipes served<br/>with a modern twist.</Text>
                <HStack>
                <Badge variant='subtle' ml='1' rounded='3px' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={['8','16', '18']} colorScheme='yellow' bg='#f4ce14' >We have outdoor and courtyard seating!</Badge>
                <Badge variant='subtle' ml='2' rounded='3px' bg='#f4ce14' ><a href="https://www.flaticon.com/free-icons/patio" title="patio icons"><Image src='patio.png' boxSize='27px'/></a></Badge>
                </HStack>
            </VStack>
          </Flex>
      </Box>
  )
}

export default Hero;