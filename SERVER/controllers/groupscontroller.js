
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
                  adminToken: newtoken,
                  message: 'Group created successfully'
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

        async deleteGroup(req, res) {
          const deleteQuery = 'DELETE FROM groups WHERE id = $1 AND user_id = $2 RETURNING *';
          try {
             const {
               rows
             } = await db.query(deleteQuery, [req.params.id, req.user.id]);
      
             if (rows.length > 0) {
               return res.json({
                 status: 204,
                 message: 'group deleted !',
               });
             }
      
             return res.status(404).json({
               status: 404,
               error: 'group doesn\'t exist',
             });
           } catch (error) {
             console.log(error)
           }
        }
  


        async getAllgroups(req, res) {
            const findAllQuery = 'SELECT * FROM groups WHERE user_id = $1';
            try {
              const { rows } = await db.query(findAllQuery, [req.user.id]);
              if (rows.length > 0) {
                let messages = [];
                rows.forEach(message => {
                  messages.push(message);
                });
                return res.status(200).json({
                  status: 200,
                  data: messages,
                });
              }
              return res.json({
                status: 204,
                error: 'You have no groups so far',
              });
            } catch(error) {
              return res.status(400).send(error);
            }
          }
        
          async addMember(req, res) {
        
          try {
           const row = await db.query('SELECT * FROM groups WHERE id = $1 AND user_id = $2', [req.params.id, req.user.id]);
           if (row.length === 0) {
             return res.status(404).json({
               status: 404,
               message: 'You have no group so far'
             });
           }
           const checkUserId = await db.query('SELECT * FROM users WHERE id = $1', [req.body.id]);
           if (checkUserId === 0) {
             return res.status(404).json({
               status: 404,
               message: 'the user you want to add does not exist.'
             });
           }
        
           const text = `INSERT INTO
                   groups(id, user_role, user_id)
                   VALUES($1, $2, $3)
                   returning *`;
        
           const values = [
            req.params.id,
             req.body.user_id,
             req.body.user_role,
             
           ];
        
        
           const { rows } = await db.query(text, values);
           if (rows.length > 0) {
             return res.status(201).json({
               status: 201,
               data: rows
             });
           }
        
         } catch (error) {
           return res.status(204).json({
             status: 204,
             data:{
               user_id: req.body.user_id,
               user_role: req.body.user_role
             },
             messages: 'The user registered successfully'
           });
   
            }
          }
        
        
          
          async deleteMember(req, res) {
            const deleteQuery = 'DELETE FROM groups WHERE id= $1 AND user_id = $2  RETURNING *';
            try {
               const {
                 rows
               } = await db.query(deleteQuery, [req.params.id, req.params.user_id]);
        
               if (rows.length > 0) {
                 return res.json({
                   status: 200,
                   message: 'user deleted !',
                 });
               }
        
               return res.status(404).json({
                 status: 404,
                 error: 'user doesn\'t exist',
               });
             } catch (error) {
               console.log(error)
             }
          }
        
        
        
         

}

export default new Group;
