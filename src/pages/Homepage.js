import React from 'react'
import Header from "../components/Header";
import Main from "../components/Main";
import Testim from '../components/Testim';
import About from '../components/About';
import Footer from '../components/Footer'
import { VStack } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <VStack>
      <Header/>
      <Main/>
      <Testim/>
      <About/>
      <Footer/>
    </VStack>
  )
}

export default Homepage;