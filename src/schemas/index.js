import * as Yup from 'yup'

export const validationSchema = Yup.object({
    resDate: Yup.string().required('Please enter reservation date'),
    resTime: Yup.string().required('Please enter reservation time'),
    guests: Yup.string().required('Please enter number of guests').min(1).max(10),
    seating: Yup.string().default('Indoor').optional(),
    occasion: Yup.string().default('Other').optional()
  })