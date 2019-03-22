import db from '../database';

const Group = {
    async create(req, res) {
  
        const text = `INSERT INTO
          groups(name, user_role, createdon, user_id)
          VALUES($1, $2, $3, $4)
          returning *`;
        const values = [
          req.body.name,
          req.body.role,
          moment().format('LL'),
          req.user.id,
        ];
  
        try {
          const {
            rows
          } = await db.query(text, values);
  
          if (rows.length > 0) {
            return res.status(201).json({
              status: 201,
              data: rows[0],
            });
          }
  
          return res.status(400).json({
            status: 400,
            error: 'group not created!',
          });
        } catch (error) {
          console.log(error);
        }
    }
}

export default Group