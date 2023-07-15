import { RequestHandler } from 'express'
import usersService from './user.service'
import jwt from "jsonwebtoken";


const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const login :RequestHandler = async (req, res, next) => {
  try{
    const reqBody = req.body
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await usersService.loginFromDB(reqBody)
  
    // if(!data){
    //     res.status(400).json({status:"fail",data:"Not found"})
    // }
    // else {
    if (data?.length > 0) {
      const Payload = {
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        data: data[0]['email'],
      }
  
      const token = jwt.sign(Payload, 'SecretKey123456789')
      // console.log("Payload" ,token)
      res.status(200).json({ status: 'success', token: token, data: data[0] })
    } else {
      res.status(401).json({ status: 'unauthorized' })
    }

  }
  catch (error) {
    next(error)
  }


}

export const UserController = {
  createUser,login
}
