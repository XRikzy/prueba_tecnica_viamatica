import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_SECRET } from '../config/constants/jwt.constants';

export interface AuthPayload {
  id: number;
}
export const generateToken = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (token: string): AuthPayload => {
  return jwt.verify(token, JWT_SECRET) as AuthPayload;
};