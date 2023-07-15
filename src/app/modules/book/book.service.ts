import { IBook } from './book.interface'
import { Book} from './book.model'

const createBook = async (user: IBook): Promise<IBook | null> => {
  const createUser = await Book.create(user)
  return createUser
}


export default {
  createBook,
 
}
