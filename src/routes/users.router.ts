import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', (req, res) => usersController.registerUser(req, res));

export default usersRouter;