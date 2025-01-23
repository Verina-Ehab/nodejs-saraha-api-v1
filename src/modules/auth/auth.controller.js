import { Router } from 'express'
import * as authService from './service/auth.services.js'
import { validation } from '../../utils/validation.js';
import { registerValidationSchema, loginValidationSchema } from './auth.validation.js'


const authRouter = Router()

authRouter.post("/register", validation(registerValidationSchema), authService.register)
authRouter.post("/login", validation(loginValidationSchema), authService.login)
authRouter.get('/confirm-email/:token', authService.confirmEmail);


export default authRouter;
