import { Router } from 'express';
import Messages from '../controllers/emailControlles'
import { requireAuth } from '../middleware'
const routers= Router();

routers.post('/message/:id', requireAuth, Messages.sendMessage);
routers.get('/messages', requireAuth, Messages.getAllSentMails);
routers.get('/messages/:id', requireAuth, Messages.getOneMail);


export default routers;