import React, {useRef, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, DrawerHeader, Input, Text, Spacer, DrawerOverlay, FormControl, FormLabel, FormErrorMessage, DrawerFooter, VStack, Box, Hide, Image, Flex, MenuButton, IconButton, Show, Menu, MenuList, MenuItem, HStack, useDisclosure, Drawer, DrawerBody, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'
import '../App.css';


 const Nav = () => {
        const headerRef = useRef(null)
      
        useEffect(() =>{
          let prevScrollPos = window.scrollY
      
          const handleScroll = () => {
            const currentScrollPos = window.scrollY
            const headerElement = headerRef.current
            if (!headerElement){
              return
            }
            if (prevScrollPos > currentScrollPos){
              headerElement.style.transform = 'translateY(0)'
            }else{
              headerElement.style.transform = 'translateY(-200px)'
            }
            prevScrollPos = currentScrollPos
          }
          window.addEventListener('scroll', handleScroll)
            return () =>{
                window.removeEventListener('scroll', handleScroll)
            }
        }, [])
        const { isOpen, onOpen, onClose } = useDisclosure()
        const navRef = React.useRef()
        const firstField = React.useRef()
    
     return (
        <Box
        ref={headerRef}
        as="section"
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration="0.3s"
        transitionTimingFunction="ease-in-out"
        bg="white"
        margin='0 auto'
        maxWidth="1280px"
        boxShadow='inner'
        >
        <nav className="navbar" aria-label="main navigation">
        <Flex
            px={20}
            color="#333"
            py={4}
            justifyContent="space-between"
            alignItems="center"
            fontSize={18}
            fontWeight={"bold"}
            fontFamily={"Karla"}
        >
            <Link to="/" className="logo"><Image src="./LilLemLogo.svg" alt="LilLemon Logo" size="2x"/></Link>
            <Hide below='md'>
            <NavLink to='/' exact='true'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/booking">Reservations</NavLink>
            <NavLink to="/">Order Online</NavLink>
            <NavLink onClick={onOpen} ref={navRef}>Login</NavLink>
            </Hide>
            <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={navRef}
            initialFocusRef={firstField}
            >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <Box py={4}>
            <VStack gap={4} alignItems='flex-start'>
            <DrawerHeader>Log in</DrawerHeader>
            <HStack px={6}>
            <Text>No account?</Text>
            <Text as='i' color='blue.500'>Sign up now!</Text>
            </HStack>
            <DrawerBody>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  ref={firstField}
                  id="Email"
                  type="email"
                  name="Email"
                  placeholder="Email address"
                  value='email'
                  />
                  <FormErrorMessage>Ooops! Your email or password is incorrect. Forgotten password? </FormErrorMessage>
                </FormControl>
                <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                  id="Pw"
                  type="password"
                  name="Pw"
                  placeholder="Password"
                  value='password.value'
                 />
                  <FormErrorMessage>Ooops! Your email or password is incorrect. Forgotten password?</FormErrorMessage>
                </FormControl>
            </DrawerBody>
            <DrawerFooter>
            <HStack gap={4} alignItems='flex-start' alignContent='flex-start'>
            <Button as='a' href='/' className="button" type="submit" size={['sm','sm','md']} boxShadow='dark-lg' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#f4ce14' color='#333' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}} width='full'>Save</Button>
            <Button variant='outline' className="button" type="cancel" size={['sm','sm','md']} fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} rounded='15px' mr={3} _hover={{bg:'#333', textColor:'#edefee'}} onClick={onClose} width='full'>Cancel</Button>
            </HStack>
            </DrawerFooter>
            </VStack>
            </Box>
            </DrawerContent>
            </Drawer>
            <Show below='md'>
            <Menu aria-label='menu'>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                  _expanded={{ bg: 'blue.400' }}
                  isActive={isOpen}
                >
                {isOpen ? 'Close' : 'Open'}
                </MenuButton>
                <MenuList>
                <MenuItem as='a' href='/'>Home</MenuItem>
                <MenuItem as='a' href='/about'>About</MenuItem>
                <MenuItem as='a' href='/booking'>Reservations</MenuItem>
                <MenuItem as='a' href='/'>Order online</MenuItem>
                <MenuItem as='a' href='/'>Login</MenuItem>
                </MenuList>
                </>
            )}
              </Menu>
              </Show>
        </Flex>
        </nav>
        </Box>
     )
 }
  export default Nav;