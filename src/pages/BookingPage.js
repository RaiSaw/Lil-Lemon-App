import React from 'react'
import BookingForm from '../components/BookingForm'
import {Box, VStack} from '@chakra-ui/react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const BookingPage = () => {
  return (
    <VStack
    w='100%'
    justify='center'
    align='center'
    margin='0 auto'
    mt={36}
    maxWidth='1280'
      >
      <Hero/>
      <Box
      justifyContent='center'
      justifyItems='center'
      alignContent='center'
      alignItems='center'
      w='100%'>
       <BookingForm justifyContent='center'/>
      </Box>
      <Footer/>
    </VStack>
  )
}
export default BookingPage;