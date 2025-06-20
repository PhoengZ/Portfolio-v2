import * as yup from 'yup'

export const useEmailValidate = ()=>yup.object({
    email:yup.string().required("Email is required").email("Invalid email format")
})