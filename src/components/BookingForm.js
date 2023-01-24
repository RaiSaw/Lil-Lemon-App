import React, {useState} from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../schemas';
import { FormLabel, Input, Box, VStack, Heading, Button, FormControl, Select,  Divider,
    IconButton, EditableInput, EditablePreview, HStack, Text, Editable, Textarea, Flex,
    Modal, Tooltip, ModalOverlay, ModalContent, ModalBody, Spacer,useDisclosure} from '@chakra-ui/react';
import { ArrowBackIcon} from '@chakra-ui/icons'

const initialValues = {
    resDate:'',
    resTime:'',
    guests:'',
    seating:'',
    occasion:''
}
const available =[
    {
        time:17, id:1
    },
    {
        time:18, id:2
    },
    {
        time:19, id:3
    },
    {
        time:20, id:4
    },
    {
        time:21, id:5
    },
    {
        time:22, id:6
    }
    ];

const BookingForm = () => {
    const [availableTimes] = useState(available)
    const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, actions) => {
            console.log(values)
            actions.resetForm()
        },
     })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    return (
        <Box
        justifyContent='center'
        justifyItems='center'
        alignContent='center'
        alignItems='center'
        mt={-2}
        mb={-2}
        bg='#495e57'
        color='#edefee'
        p={12}
        >
        <form className="bookingForm" onSubmit={handleSubmit}>
        <Box px={['8', '12', '30']}>
        <VStack gap={4} alignItems="center" sx={{ '.input': { bg: '#edefee', color: '#333' } }}>
        <Heading as="h1">Reservation</Heading>
            <FormControl isRequired>
            <FormLabel htmlFor="res-date">Choose date</FormLabel>
            <Input
            className='input'
            type="date"
            id="res-date"
            name='resDate'
            value={values.resDate}
            onBlur={handleBlur}
            onChange={handleChange}
            />
            <div className='error'>
                {errors.resDate && touched.resDate && (
                    <p className='formError'>{errors.resDate}</p>
                )}
            </div>
            </FormControl>
            <FormControl isRequired>
            <FormLabel htmlFor="res-time">Choose time</FormLabel>
            <Select
            className='input'
            id="res-time"
            name="resTime"
            value={values.resTime}
            onBlur={handleBlur}
            onChange={handleChange}
            >
                {availableTimes.map((availableTime) =>(
                <option key={availableTime.id}>{availableTime.time}:00</option>
                ))}
            </Select>
            <div className='error'>
                {errors.resTime && touched.resTime && (
                    <p className='formError'>{errors.resTime}</p>
                )}
            </div>
            </FormControl>
            <FormControl isRequired>
            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <Input
            className='input'
            type="number"
            placeholder='1'
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={values.guests}
            onBlur={handleBlur}
            onChange={handleChange}
            />
             <div className='error'>
                {errors.guests && touched.guests && (
                    <p className='formError'>{errors.guests}</p>
                )}
            </div>
            </FormControl>
            <FormControl>
            <FormLabel htmlFor="seating">Seating option</FormLabel>
            <Select
            className='input'
            id="seating"
            name="seating"
            value={values.seating}
            onBlur={handleBlur}
            onChange={handleChange}
            >
                <option>Choose a seating option</option>
                <option>Indoor</option>
                <option>Outdoor</option>
                <option>Courtyard</option>
            </Select>
            </FormControl>
            <FormControl>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
            className='input'
            id="occasion"
            name="occasion"
            value={values.occasion}
            onBlur={handleBlur}
            onChange={handleChange}
            >
                <option>Choose an occasion</option>
                <option>Other</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
            </FormControl>
            <Button as='a' onClick={onOpen} className="button" type="submit" size={['sm','sm','md']} boxShadow='dark-lg' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#f4ce14' color='#333' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}} w='50%'>Reserve now</Button>
            <Modal closeOnOverlayClick={false}
            isOpen={isOpen} onClose={onClose}
            isCentered
            size='full'
            initialFocusRef={initialRef}
            justifyContent='center'
            justifyItems='center'
            alignContent='center'
            alignItems='center'
            alignSelf='center'
            justifySelf='center'
            maxWidth='1280px'
            >
                <ModalOverlay />
                <ModalContent aria-modal='true'>
                <ModalBody >
                <Box
                  bg='url(oudoor.jpg)center/cover no-repeat'
                  w={['80%', '100%', '100%']}
                  boxShadow='2xl'
                  left={0}
                  right={0}
                  top={0}
                  p={12}
                  filter='auto'
                  blur='0.6px'
                  justifyContent='center'
                  justifyItems='center'
                  alignContent='center'
                  alignItems='center'
                  alignSelf='center'
                  justifySelf='center'
                  maxWidth='1280px'
                  >
                  <Flex gap={12} bg='#495e57' justifyContent='center' opacity={.9} p={8} rounded='15'>
                  <IconButton
                        variant='outline'
                        color='#333'
                        aria-label='Back icon'
                        icon={<ArrowBackIcon boxSize={8}/>}
                        mt={8}
                        onClick={onClose}
                        />
                  <VStack alignItems='flex-start' gap={2} color='white' >
                  <Heading as='h2' fontFamily={'Markazi Text'} fontSize={['30','35', '40']} fontWeight='bold'>Please check your reservation information</Heading>
                  <Divider/>
                  <HStack fontFamily={'Karla'} fontWeight='bold' fontSize={['12','16', '18']} >
                  <Text>Date:</Text>
                  <Editable defaultValue={values.resDate}>
                  <EditablePreview></EditablePreview>
                  <EditableInput></EditableInput>
                  </Editable>
                  </HStack>
                  <HStack>
                  <Text>Time:</Text>
                  <Editable defaultValue={values.resTime}>
                  <EditablePreview></EditablePreview>
                  <EditableInput></EditableInput>
                  </Editable>
                  </HStack>
                  <HStack>
                  <Text>Number of guest/s:</Text>
                  <Editable defaultValue={values.guests}>
                  <EditablePreview></EditablePreview>
                  <EditableInput></EditableInput>
                  </Editable>
                  </HStack>
                  <HStack>
                  <Text>Seating option:</Text>
                  <Editable defaultValue={values.seating}>
                  <EditablePreview></EditablePreview>
                  <EditableInput></EditableInput>
                  </Editable>
                  </HStack>
                  <HStack>
                  <Text>Occasion:</Text>
                  <Editable defaultValue={values.occasion}>
                  <EditablePreview></EditablePreview>
                  <EditableInput></EditableInput>
                  </Editable>
                  </HStack>
                  <Tooltip label="Hey, edit by clicking the entered details or ⬅" aria-label='A tooltip'>
                    <Text as='i' fontFamily={'Karla'} fontWeight='medium' fontSize={['12','18', '16']} color='blue.400' justifySelf='flex-start' alignContent='flex-start'>Edit</Text>
                    </Tooltip>
                  <Divider/>
                  <Text as='i' fontFamily={'Karla'} fontWeight='bold' fontSize={['12','18', '16']} color='blue.400' justifySelf='flex-start' alignContent='flex-start'>Additional information?</Text>
                  <Textarea placeholder='(e.g. allergies, requests etc.)'></Textarea>
                  <Spacer/>
                  <HStack gap={4}>
                  <Button as='a' href='/confirmation' className="button" type="submit" size={['sm','sm','md']} boxShadow='dark-lg' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#f4ce14' color='#333' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}} w='full'>Continue</Button>
                  <Button as='a' href='/booking' className="button" type="cancel" size={['sm','sm','md']} boxShadow='dark-lg' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#edefee' color='#333' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}} w='full'>Cancel</Button>
                  </HStack>
                  </VStack>
                  </Flex>
                </Box>
                </ModalBody>
                </ModalContent>
                </Modal>
        </VStack>
        </Box>
        </form>
        </Box>
    )
}
export default BookingForm;