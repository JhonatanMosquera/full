import {z} from 'zod'


export const registerSchema = z.object({
    username: z.string({required_error: "username is required"}),
    email: z.string({
        required_error: "imail is requiered"
    }).email({
        message: "invalid imail"
    }),
    password: z.string({
        required_error: "passworld is requiere"
    }).min(6,{
        message: "password must be at least 6 characters"
    }),
})

export const LoginSchema = z.object({
    email: z.string({
        required_error: "imail is requiered"
    }).email({
        message: "invalid imail"
    }),
    password: z.string({
        required_error: "passworld is requiere"
    }).min(6,{
        message: "password must be at least 6 characters"
    }),
})

