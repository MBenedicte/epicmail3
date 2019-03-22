import { Router } from "express";
import Group  from "../controllers/groupscontroller";
import { requireAuth } from "../middleware/index"
import { adminAuth} from '../middleware/admin'


const groupRouter=Router();
groupRouter.post('/createGroup',requireAuth,Group.create);
groupRouter.get('/allGroups',requireAuth,Group.getAllgroups);
groupRouter.delete('/deletegroup/:id',requireAuth,Group.deleteGroup);
export default groupRouter;