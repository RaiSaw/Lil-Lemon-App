import * as Yup from 'yup'

export const validationSchema = Yup.object({
    resDate: Yup.string().required('Please enter a reservation date'),
    resTime: Yup.string().required('Please enter a reservation time'),
    guests: Yup.string().required('Please enter at least 1 guest').min(1,'Minimum of 1').max(10,'Maximum of 10'),
    seating: Yup.string().oneOf(['Indoor','Outdoor','Courtyard']).default('Indoor'),
    occasion: Yup.string().oneOf(['Other','Birthday','Anniversary']).default('Other')
  })