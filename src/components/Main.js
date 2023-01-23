import React from 'react'
import { Flex, Box, VStack, Heading, Button, Spacer} from '@chakra-ui/react';
import Cardy from './Card'

const specials = [
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
}
]
const Main = () => {
  return (
    <main >
      <Flex
          as='section'
          p={8}
          my={100}
          color="#333"
          justifyContent="center"
          alignItems='center'
          maxWidth="1280px"
          height={400}
          w={['80%', '100%', '100%']}
          left={0}
          right={0}
          >
        <VStack alignItems='center' justifyContent="center">
          <Flex spacing={['8','12','20']}alignContent='flex-start' alignItems="flex-start" justifyContent="space-evenly" gap={['8','12','200']}>
            <Heading as='h3' fontFamily={'Karla'} fontWeight='extrabold' fontSize={['12','18','20']} alignSelf="flex-start">This week's specials!</Heading>
          <Spacer/>
            <Button as='a' href='/orderOnline' boxShadow='dark-lg' fontFamily={'Markazi Text'} justifySelf="space-between" alignSelf="flex-end" fontWeight='bold' fontSize={18} size={['sm','md','lg']} bg='#f4ce14' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}}>Online Menu</Button>
          </Flex>
          <Spacer/>
          <Box
            direction="row"
            display="grid"
            gridTemplateColumns="repeat(3,minmax(0,1fr))"
            gridGap={8}
           
           >
            {specials.map((special) => (
            <Cardy
              imageSrc={special.getImageSrc()}
              key={special.title}
              title={special.title}
              price={special.price}
              description={special.description}
            />
            ))}
          </Box>
        </VStack>
    </Flex>
    </main>
  )
}

export default Main;