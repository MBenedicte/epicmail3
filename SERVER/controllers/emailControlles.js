import db from '../database';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

class Messages{
    
    async sendMessage(req,res) {
      try {
        const text = `INSERT INTO mails(sender_id, receiver_id, primary_message_id, subject, message, status) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
        const values = [
          req.user.id,
          req.params.id,
          2,
          req.body.subject,
          req.body.message,
          'sent'
        ];
        const checkUser = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);

        if (checkUser.rows.length <= 0) {
          return res.status(404).json({
            status: 404,
            message: 'Sorry, this user does not exist',
          });
        }

        const { rows } = await db.query(text, values);

  
          return res.status(201).json({
            status: 201,
            data: rows[0],
          });
 
      } catch (error) {
        console.log(error)
        return res.status(500).json({
          status: 500,
          error: 'The server has stopped',
        });
      }
            
    }

    async getAllSentMails(req, res) {
      try {
        const {
          rows
        } = await db.query('SELECT * FROM mails WHERE sender_id= $1', [req.user.id]);
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
        return res.status(400).json({
          status: 400,
          error: 'No message so far...',
        });
      } catch (error) {
        res.status(500).send({
          status: 500,
          message: "The server has stopped"
        })
      }
    }

    async getOneMail(req, res) {
      try {
        const { rows } = await db.query('SELECT * FROM mails WHERE id = $1 AND sender_id = $2', [req.params.id, req.user.id]);
        if (rows.length > 0) {
          return res.status(200).json({
            status: 200,
            data: rows[0],
          });
        }
        return res.status(204).json({
          status: 204,
          error: 'Mail not found...',
        });
      } catch (error) {
       res.status(500).send({
         status:500,
         message: 'Sorry, the server is not working well'
       })
      }
    }
    
  
    
}

export default new Messages;