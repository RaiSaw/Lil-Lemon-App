import { Text, VStack, CardBody, Card, Flex, Spacer, Avatar} from "@chakra-ui/react";
import React from "react";



const Revie = ({ name, review, rating, imageSrc }) => {
    return(
      <Card
        color="#333"
        borderRadius="xl"
        boxShadow='2xl'
        left={0}
        right={0}
        w='100%'
        >
        <CardBody>
        <VStack alignItems="flex-start">
          <Text>{rating}</Text>
          <Flex gap={2} justifyContent="space-evenly" alignItems="center">
            <Avatar className='Avatar' name={name} src={imageSrc} size={['md','lg','xl']} />
            <Spacer/>
            <Text fontFamily={'Karla'} fontWeight='bold' fontSize={['8','16', '18']}>{name}</Text>
          </Flex>
            <Text fontFamily={'Karla'} fontWeight='regular' fontSize={['8','12', '16']} lineHeight='1.5' color="#495e57">{review}</Text>
        </VStack>
        </CardBody>
      </Card>
    )
}
export default Revie;
