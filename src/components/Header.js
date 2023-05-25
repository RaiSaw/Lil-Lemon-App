import React from 'react'
import { Image, Flex, Box, VStack, Text, Heading, Button, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
      <Box
          as='section'
          color="#333"
          maxWidth="1280px"
          height={460}
          bg='#495e57'
          w={['80%', '100%', '100%']}
          left={0}
          right={0}
          px={['8','10','12']}
          marginTop={-4}
          py={20}
          >
          <header className="promo">
          <Flex py={30} justifyContent="space-evenly">
            <VStack alignItems="flex-start" justifyContent="space-evenly">
              <Heading as='h1' fontFamily={'Markazi Text'} fontSize={['40','50', '64']} fontWeight='medium' color='#f4ce14'>Little Lemon</Heading>
              <Heading as='h2'fontFamily={'Markazi Text'} fontSize={['30','35', '40']} fontWeight='regular' color='#edefee' >Chicago</Heading>
          <Spacer/>
                <Text fontSize={['12','16', '18']} fontFamily={'Karla'} fontWeight='medium' color='#edefee' lineHeight='1.5'>We are a family owned<br/> Mediterranean restaurant,<br/>focused on traditional recipes served<br/>with a modern twist.</Text>
                <Button as='a' href='/booking' boxShadow='dark-lg' size={['sm','md','lg']} fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#f4ce14' rounded='15px'_hover={{bg:'#ee9972', textColor:'#495e57'}} >Reserve a Table</Button>
            </VStack>
            <Box className='imgCont' mt={4} alignSelf="center" justifyContent="center" boxShadow='dark-lg' borderRadius='20px' boxSize={['230px','250px','290px']}>
              <Image className='image' src="./restauranfood.jpg" alt="restaurant food" />
            </Box>
          </Flex>
          </header>
      </Box>
  )
}

export default Header;