import { Router } from 'express';
import Messages from '../controllers/emailControlles'
import { requireAuth } from '../middleware'
const routers= Router();

routers.post('/message/:id', requireAuth, Messages.sendMessage);
routers.get('/messages', requireAuth, Messages.getAllSentMails);
routers.get('/messages/:id', requireAuth, Messages.getOneMail);
// //read all sent, unread and draft messages
// routers.get('/messages/:status', requireAuth, Messages.readMessages);

export default routers;