import * as Yup from 'yup'

const loginSchema = Yup.object({
  email: Yup.string().required("Email required").email("Email format is wrong"),
  password: Yup.string().required("Password required").min(4, "Min length of 4 chars"),
  bio: Yup.string()
})

export default loginSchema