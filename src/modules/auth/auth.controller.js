import {Router} from 'express'
import * as authErvice from './service/auth.services.js'

const authRouter = Router()

authRouter.post("/signup", authErvice.register)
authRouter.post("/login", authErvice.login)

export default authRouter;