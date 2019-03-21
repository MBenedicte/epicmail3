import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


dotenv.config();

const JWTPRIVATEKEY = process.env.JWTPRIVATEKEY;

export function verifyToken(token) {
    return jwt.verify(token, JWTPRIVATEKEY);
}

export function comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
}

export function hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export function generateToken(params) {
    return jwt.sign(params, process.env.JWTPRIVATEKEY)
}