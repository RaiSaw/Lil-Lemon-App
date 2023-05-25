import React from 'react'
import { Spacer, Box, VStack, Text, Heading, Flex, HStack } from '@chakra-ui/react'

const ConfirmedBooking = () => {
  return (
    <Box
      className='confirmation'
      bg='url(oudoor.jpg)center/cover no-repeat'
      w={['80%', '100%', '100%']}
      h={750}
      boxShadow='2xl'
      left={0}
      right={0}
      top={0}
      p={12}
      filter='auto'
      blur='0.6px'
      mt={-760}
      maxWidth="1280px"
      >
      <Flex bg='#495e57' justifyContent='center' alignContent='center' alignItem='center' alignSelf='center'opacity={.9} p={12} rounded='15'>
      <VStack alignItems='flex-start' gap={2} color='white'>
      <Heading as='h2' fontFamily={'Markazi Text'} fontSize={['30','35', '40']} fontWeight='medium'>Thank you!</Heading>
      <Spacer/>
      <Text fontFamily={'Karla'} fontWeight='medium' fontSize={['8','14', '16']} >We are thrilled that you will be joining us and you'll receive a confirmation email shortly.</Text>
      <HStack as='i' fontFamily={'Karla'} fontWeight='medium' fontSize={['8','12', '16']} >
      <Text> If you would like to make special arrangements or additional questions about your reservation, please do not hesitate to reach out.</Text>
      </HStack>
      <HStack gap={4}>
      </HStack>
      </VStack>
      </Flex>
    </Box>
  )
}

export default ConfirmedBooking