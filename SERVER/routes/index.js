import { Router } from 'express'
import emailsrouter from '../routes/emails'
import usersrouter from '../routes/user'


const allrouters= Router();

allrouters.use(emailsrouter, usersrouter);

export default allrouters;
