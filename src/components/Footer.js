import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Box, Flex, VStack, Text, HStack} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  const socials = [
    {
      icon: faFacebook,
      url: "https://github.com/RaiSaw",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/raisawit",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/rai_ku_",
    },
  ]
  return (
    <Box
      as="section"
      w={['80%', '100%', '100%']}
      left={0}
      right={0}
      margin='0 auto'
      mt={350}
      height={280}
      bg='#edefee'
      alignContent='center'
      justifyContent='center'
      justifyItems='center'
      alignItems='center'
      justifySelf='center'
      alignSelf='center'
      maxWidth="1280px"
      >
      <footer className="footer">
      <Flex
          as='section'
          px={12}
          py={8}
          color="#333"
          justifyContent="space-between"
          alignItems="flex-start"
          fontSize={['12', '16', '18']}
          fontFamily={"Karla"}
          gap={2}
          >
          <Link to="/"><Image src="./LilLemLogo.svg" alt="Logo" boxSize='240px'/></Link>
          <VStack spacing={2} alignItems="flex-start">
            <Text fontWeight={"semibold"}>Doormat Navigation</Text>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to='/booking'>Reservations</Link>
            <Link to='/orderOnline'>Order Online</Link>
            <Link to='/login'>Login</Link>
          </VStack>
          <VStack spacing={2} alignItems="flex-start">
            <Text fontWeight={'semibold'}>Contact</Text>
            <Link>Address</Link>
            <Link>Phone number</Link>
            <Link>LittleLemon.com</Link>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontWeight={'semibold'}>Socials</Text>
            <HStack gap={4}>
              {socials.map((social) =>(
                <a key={social.url} href={social.url} rel='navicons'>
                  <FontAwesomeIcon icon={social.icon} color='#495e57' size="1x"/>
                </a>
              ))}
            </HStack>
          </VStack>
        </Flex>
        </footer>
        </Box>
  )
}

export default Footer