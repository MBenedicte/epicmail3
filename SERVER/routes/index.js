import { Router } from 'express'
import emailsrouter from '../routes/emails'
import usersrouter from '../routes/user'
import grouprouter from '../routes/groups'


const allrouters= Router();

allrouters.use(emailsrouter, usersrouter,grouprouter);

export default allrouters;
