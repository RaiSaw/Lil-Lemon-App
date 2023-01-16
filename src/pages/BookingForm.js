import React,{useState} from 'react';
import { useFormik } from 'formik';
import { validationSchema } from '../schemas';

const initialValues = {
    resDate:'',
    resTime:'',
    guests:'',
    seating:'',
    occasion:''
}
const style ={
    display: "grid",
    maxWidth: "200px",
    gap: "20px"
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
const BookingForm = () => {
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
        <form className="bookingForm" style={style} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date<sup>*</sup></label>
            <input type="date"
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

            <label htmlFor="res-time">Choose time<sup>*</sup></label>
            <select id="res-time"
            name="resTime"
            value={values.resTime}
            onBlur={handleBlur}
            onChange={handleChange}
            >
                {availableTimes.map((availableTime) =>(
                <option key={availableTime.id}>{availableTime.time}:00</option>
                ))}
            </select>
            <div className='error'>
                {errors.resTime && touched.resTime && (
                    <p className='formError'>{errors.resTime}</p>
                )}
            </div>

            <label htmlFor="guests">Number of guests<sup>*</sup></label>
            <input type="number"
            placeholder="1"
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

            <label htmlFor="seating">Seating option</label>
            <select id="seating"
            name="seating"
            value={values.seating}
            onBlur={handleBlur}
            onChange={handleChange}
            >
                <option>Indoor</option>
                <option>Outdoor</option>
                <option>Courtyard</option>
            </select>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
            name="occasion"
            value={values.occasion}
            onBlur={handleBlur}
            onChange={handleChange}
            >
                <option>Other</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button className="button" type="submit" value="Make Your reservation">Let's Go!</button>
        </form>
    )
}
export default BookingForm;