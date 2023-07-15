import express from 'express';

import { UserController } from './book.controller';

const router = express.Router();

router.post(
  '/create-book',

  UserController.createBook
);


export const BookesRoutes = router;