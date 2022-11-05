import { sign } from 'jsonwebtoken';
// import dotenv from 'dotenv';
import IUser from '../Interfaces/user.interface';

// dotenv.config();

export default (data: IUser) => {
  const token = sign({ data }, 'segredo', {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};
