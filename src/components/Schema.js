import * as Yup from 'yup';

export const registerSchema = Yup.object({
    name : Yup.string().label('Full Name').required(),
    email : Yup.string().email().required(),
    password : Yup.string().min(7, "Password must be 7 characters at minimum")
    .required("Password is required"),
    phone : Yup.string()
    .required("This field is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ).max(10,"Maximum 10 digit")
})


export const loginSchema = Yup.object({
  
    email : Yup.string().email().required(),
    password : Yup.string().min(7, "Password must be  7 characters at minimum")
    .required("Password is required")
})


