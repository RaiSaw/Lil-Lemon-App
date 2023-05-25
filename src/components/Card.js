import { Heading, Image, Text, VStack, CardBody, Card, Icon, Flex, Spacer} from "@chakra-ui/react";
import React from "react";
import {MdDeliveryDining} from 'react-icons/md';

const Cardy = ({ title, price, description, imageSrc, alt }) => {
    return(
        <Card
        color="#333"
        backgroundColor="#edefee"
        borderRadius="xl"
        boxShadow='2xl'
        w='100%'
        className='imgCont'
        >
          <Image className='image' src={imageSrc} borderRadius='10px' objectFit='cover' alt={alt}/>
          <VStack alignItems="flex-start">
          <CardBody>
            <Flex gap={['4','8','12']} justifyContent="space-between" alignItems="center" >
              <Heading as='h4' fontFamily={'Karla'} fontWeight='bold' fontSize={18}>{title}</Heading>
              <Spacer/>
              <Heading as='h4' fontFamily={'Karla'} fontWeight='medium' fontSize={['8','12','16']} color='#ee9972' justifySelf='flex-end'>{price}</Heading>
            </Flex>
            <Text py={2} fontFamily={'Karla'} fontWeight='regular' fontSize={['8','10','16']} lineHeight='1.5' color="#495e57">{description}</Text>
            <Spacer/>
            <Flex gap={8} alignItems="center" cursor="pointer">
              <Text fontFamily={'Karla'} fontWeight='medium' fontSize={['10','12','18']} color='#333'>Order a delivery <Icon as={MdDeliveryDining} alt="delivery icon"/></Text>
            </Flex>
            </CardBody>
          </VStack>
        </Card>
    )
}
export default Cardy;