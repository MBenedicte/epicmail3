
import db from '../database/index'
import moment from 'moment'
import { generateToken } from '../Helper/auth'



class Group{
     async create(req, res) {
       
            try {
                  console.log(req.user.id)
                    const text = `INSERT INTO
                      groups(name, user_role, createdon, user_id)
                      VALUES($1, $2, $3, $4)
                      returning *`;
                    const values = [
                      req.body.groupname,
                      req.body.user_role,
                      moment().format('LL'),
                      req.user.id
                    ];
              
              const {
                rows
              } = await db.query(text, values);
              const newtoken= generateToken({id: req.user.id, role: req.body.role})
              if (rows.length > 0) {
                return res.status(201).send({
                  status: 201,
                  data: rows[0],
                  adminToken: newtoken
                });
              }
              return res.status(400).send({
                status: 400,
                error: 'group not created!',
              });
            } catch (error) {
              console.log(error);
            }
        }
    

}

export default new Group;