import React, {useState} from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../schemas';
import { FormLabel, Input, Box, VStack, Heading, Button, FormControl, Select, FormHelperText} from '@chakra-ui/react';
import ConfirmedBooking from '../pages/ConfirmedBooking';

const initialValues = {
    resDate:'',
    resTime:'',
    guests:'',
    seating:'',
    occasion:''
}

let available =[
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
const BookingForm = (props) => {
    const [availableTimes] = useState(available);
    const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, actions) => {
            console.log(values)
            actions.resetForm()
        },
     })
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
            name="resDate"
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
            <Button as='a' href='/confirmation' className="button" type="submit" size={['sm','sm','md']} boxShadow='dark-lg' fontFamily={'Markazi Text'} fontWeight='bold' fontSize={18} bg='#f4ce14' color='#333' rounded='15px'_hover={{bg:'#333', textColor:'#edefee'}} w='50%'>Reserve now</Button>
        </VStack>
        </Box>
        </form>
        </Box>
    )
}
export default BookingForm;