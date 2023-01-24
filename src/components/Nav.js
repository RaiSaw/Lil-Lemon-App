import React, {useRef, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { Box, Hide, Image, Flex, MenuButton, IconButton, Show, Menu, MenuList, MenuItem } from "@chakra-ui/react";
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
            fontWeight={"semibold"}
            fontFamily={"Karla"}
        >
            <Link to="/" className="logo"><Image src="./LilLemLogo.svg" alt="LilLemon Logo" size="2x"/></Link>
            <Hide below='md'>
            <NavLink to='/' exact='true'>Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/booking">Reservations</NavLink>
            <NavLink to="/orderOnline">Order Online</NavLink>
            <NavLink to="/login">Login</NavLink>
            </Hide>
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
                <MenuItem as='a' href='/orderOnline'>Order online</MenuItem>
                <MenuItem as='a' href='/login'>Login</MenuItem>
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