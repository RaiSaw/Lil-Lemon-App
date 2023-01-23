import React from 'react'
import { Textarea, Editable, Box, VStack, Text, Heading, Button, Flex, Divider, IconButton, EditableInput, EditablePreview, HStack } from '@chakra-ui/react'
import { ArrowBackIcon} from '@chakra-ui/icons'

const ConfirmedBooking = ({props}) => {

  return (
    <Box
      className='confirmation'
      bg='url(oudoor.jpg)center/cover no-repeat'
      w="100%"
      h={730}
      boxShadow='2xl'
      left={0}
      right={0}
      top={0}
      p={12}
      opacity={0.9}
      filter='auto'
      blur='0.6px'
      mt={-790}
      maxWidth="1280px"
      >
      <Flex gap={12} bg='#495e57' opacity={.9} p={8} justifyContent='center' rounded='15'>
      <IconButton
            as='a'
            href='/booking'
            variant='outline'
            color='#333'
            aria-label='Back icon'
            icon={<ArrowBackIcon boxSize={8}/>}
            mt={8}
            />
      <VStack alignItems='flex-start' gap={4} color='white' >
      <Heading as='h2' fontFamily={'Markazi Text'} fontSize={['30','35', '40']} fontWeight='bold'>Please check your reservation information</Heading>
      <Divider/>
      <HStack>
      <Text>Date:</Text>
      <Editable defaultValue='DD/MM/YY'>
      <EditablePreview></EditablePreview>
      <EditableInput></EditableInput>
      </Editable>
      </HStack>
      <HStack>
      <Text>Time:</Text>
      <Editable defaultValue='HH:MM'>
      <EditablePreview></EditablePreview>
      <EditableInput></EditableInput>
      </Editable>
      </HStack>
      <HStack>
      <Text>Number of guest/s:</Text>
      <Editable defaultValue='#'>
      <EditablePreview></EditablePreview>
      <EditableInput></EditableInput>
      </Editable>
      </HStack>
      <HStack>
      <Text>Seating option:</Text>
      <Editable defaultValue='Indoor'>
      <EditablePreview></EditablePreview>
      <EditableInput></EditableInput>
      </Editable>
      </HStack>
      <HStack>
      <Text>Occasion:</Text>
      <Editable defaultValue='Birthday'>
      <EditablePreview></EditablePreview>
      <EditableInput></EditableInput>
      </Editable>
      </HStack>
      <Divider/>
      <Text as='i' justifySelf='flex-start' alignContent='flex-start'>Additional information?</Text>
      <Textarea placeholder='(e.g. allergies, requests etc.)'></Textarea>
      <HStack>
      <Button as='a' href='/' className="button" type="submit" size={['sm','sm','md']} boxShadow='dark-lg' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#f4ce14' color='#333' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}} w='full'>Continue</Button>
      <Button as='a' href='/' className="button" type="cancel" size={['sm','sm','md']} boxShadow='dark-lg' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#edefee' color='#333' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}} w='full'>Cancel</Button>
      </HStack>
      </VStack>
      </Flex>
    </Box>
  )
}

export default ConfirmedBooking