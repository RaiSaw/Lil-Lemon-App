import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Box, Flex, VStack, Text} from "@chakra-ui/react"


const Footer = () => {
  return (
    <Box
      as="section"
      alignItems='center'
      justifyContent='center'
      w={['80%', '100%', '100%']}
      left={0}
      right={0}
      margin='0 auto'
      maxWidth="1280px"
      mt={350}
      >
      <footer className="footer">
      <Flex
          as='section'
          px={12}
          py={4}
          color="#333"
          justifyContent="space-between"
          alignItems="flex-start"
          height={280}
          bg='#edefee'
          fontSize={['12', '16', '18']}
          fontFamily={"Karla"}
          w="100%"
          gap={2}
          >
          <Link to="/"><Image src="./LilLemLogo.svg" alt="Logo" boxSize='240px'/></Link>
          <VStack  alignItems="flex-start">
            <Text fontWeight={"semibold"}>Doormat Navigation</Text>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/booking'>Reservations</Link>
            <Link to='/orderOnline'>Order Online</Link>
            <Link to='/login'>Login</Link>
          </VStack>
          <VStack  alignItems="flex-start">
            <Text fontWeight={'semibold'}>Contact</Text>
            <Link>Address</Link>
            <Link>Phone number</Link>
            <Link>Email</Link>
          </VStack>
          <VStack  alignItems="flex-start">
            <Text fontWeight={'semibold'}>Social Media Links</Text>
            <Link  to='/instagram.com' target='_blank' >Instagram</Link>
            <Link  to='/facebook.com' target='_blank' >Facebook</Link>
            <Link  to='/linkedin.com' target='_blank' >LinkedIn</Link>
          </VStack>
        </Flex>
        </footer>
        </Box>
  )
}

export default Footer