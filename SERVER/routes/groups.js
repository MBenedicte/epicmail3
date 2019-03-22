import { Router } from "express";
import Group  from "../controllers/groupscontroller";
import { requireAuth } from "../middleware/index"


const groupRouter=Router();
groupRouter.post('/createGroup',requireAuth,Group.create);

export default groupRouter;