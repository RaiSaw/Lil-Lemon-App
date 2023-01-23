import React from 'react'
import {Box, VStack, Heading, Spacer, HStack} from '@chakra-ui/react'
import Rev from '../components/Rev'
import { StarIcon } from '@chakra-ui/icons'


const reviews = [
{
    rating:<HStack color='#f4ce14'><StarIcon/><StarIcon/><StarIcon/><StarIcon color='gray.200'/><StarIcon color='gray.200'/></HStack>,
    name: "Jane Doe",
    getImageSrc: () => require("../images/Avat.png"),
    raview:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
},
{
    rating:<HStack color='#f4ce14'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon color='gray.200'/></HStack>,
    name: "Drew Tan",
    getImageSrc: () => require("../images/Avat4.png"),
    raview:"At vero eos et accusam et justo duo dolores et ea rebum..",
},
{
    rating:<HStack color='#f4ce14'><StarIcon/><StarIcon/><StarIcon/><StarIcon color='gray.200'/><StarIcon color='gray.200'/></HStack>,
    name: "Taylor Schindler",
    getImageSrc: () => require("../images/Avat5.png"),
    raview:"Sed diam voluptua!",
},
{
    rating:<HStack color='#f4ce14'><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon color='gray.200'/></HStack>,
    name: "Jason Bourd",
    getImageSrc: () => require("../images/Avat3.png"),
    raview:"Stet clita kasd gubergren, no sea takimata sanctus est.",
}
]
const Testimon = () => {
  return (
    <Box
        as="section"
        left={0}
        right={0}
        maxWidth="1280px"
        bg="#495e57"
        height={400}
        w={['80%', '100%', '100%']}
        boxShadow='2xl'
        p={['4', '6', '12']}
        >
        <VStack spacing={4}>
            <Heading as='h3' justify="center" alignItems="center" fontFamily={'Karla'} fontWeight='bold' color='#edefee' fontSize={['16px', '18px', '20px']} >Testimonials</Heading>
            <Spacer/>
            <Box
            direction="row"
            display="grid"
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
            gridGap={['4', '6', '10']}
            borderRadius="xl"
            >
            {reviews.map((review) => (
            <Rev
            key={review.name}
            rating={review.rating}
            name={review.name}
            imageSrc={review.getImageSrc()}
            review={review.raview}
            />
            ))}
            </Box>
        </VStack>
    </Box>
  )
}

export default Testimon;