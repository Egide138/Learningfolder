import express from 'express'
import {getusers} from '../controllers/users.js'
const userRouter=express.Router()
userRouter.route('/user').get(getusers)

export default userRouter;