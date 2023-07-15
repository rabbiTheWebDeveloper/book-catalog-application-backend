import { RequestHandler } from 'express'
import usersService from './book.service'



const createBook: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body
    const result = await usersService.createBook(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createBook
}
