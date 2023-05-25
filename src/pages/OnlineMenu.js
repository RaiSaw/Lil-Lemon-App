import React from 'react'
import {Box, VStack, Heading} from '@chakra-ui/react';
import Cardy from '../components/Card'

const menu = [
  {
    getImageSrc: () => require("../images/greek salad.jpg"),
    title: "Greek salad",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    alt:"Greek salad image"
  },
  {
    getImageSrc: () => require("../images/Bruchetta.png"),
    title: "Bruchetta",
    price:"$5.99",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    alt:"Bruchetta image"
  },
  {
    getImageSrc: () => require("../images/lemon dessert.jpg"),
    title: "Lemon dessert",
    price:"$5.00",
    description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    alt:"lemon dessert image"
  },
  {
    getImageSrc: () => require("../images/food4.jpg"),
    title: "Alfredo chicken",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    alt:"Greek salad image"
  },
  {
    getImageSrc: () => require("../images/food5.jpg"),
    title: "Arrabiata pasta",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    alt:"Greek salad image"
  },
  {
    getImageSrc: () => require("../images/des4.jpg"),
    title: "Tiramisu",
    price:"$4.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    alt:"Greek salad image"
  },
  {
    getImageSrc: () => require("../images/food6.jpg"),
    title: "Prawn and rice",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    alt:"Greek salad image"
  },
  {
    getImageSrc: () => require("../images/des7.jpg"),
    title: "Vegan brownie",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    alt:"Greek salad image"
  },
  ]
const OnlineMenu = () => {
  return (
    <VStack bg='#495e57' mt='20' width='full'>
    <Box
    as='section'
    p={14}
    color="#edefee"
    justifyContent="center"
    alignItems='center'
    maxWidth="1280px"
    height={1600}
    w={['80%', '100%', '100%']}
    left={0}
    right={0}
    >
  <VStack spacing={8} alignItems='center' justifyContent="center">
      <Heading as='h1' fontFamily={'Karla'} fontWeight='extrabold' fontSize={['12','18','20']} alignSelf="center"> Online Menu</Heading>
    <Box
      direction="row"
      display="grid"
      gridTemplateColumns="repeat(3,minmax(0,1fr))"
      gridGap={8}
      px={8}
     >
      {menu.map((menu) => (
      <Cardy
        imageSrc={menu.getImageSrc()}
        key={menu.title}
        title={menu.title}
        price={menu.price}
        description={menu.description}
      />
      ))}
    </Box>
  </VStack>
</Box>
</VStack>
  )
}

export default OnlineMenu