import db from '../database/index';
import Validator from '../Helper/validation';
import { comparePassword, generateToken, hashPassword } from '../Helper/auth';

class User {
  userSignup(req, res) {
    const { error } = Validator.validateRegistration(req.body);
    if (error) {
      return res.status(400).send({
        status: 400,
        message: 'hello'
      });
    }

    const password = hashPassword(req.body.password);

    const create_new_user = `INSERT INTO 
            users(firstname, lastname, email, username, password) 
            values ($1, $2, $3, $4, $5) returning *`;

    const newUser = [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.username,
      password
    ];

    return db
      .query(create_new_user, newUser)
      .then(({ rows }) => {
        const token = generateToken({ id: rows[0].id, email: rows[0].email });
        return res.status(201).send({
          status: 201,
          data: rows,
          token: token,
          message: 'User registered successfully'
        });
      })
      .catch(err => {
        if (err.routine === '_bt_check_unique') {
          return res.status(400).send({
            status: 400,
            message: 'User with the email already exists'
          });
        }
        return res.status(400).send({
          status: 400,
          message: err
        });
      });
  }

  async userLogin(req, res) {
    try {
      const userQuery = `SELECT * FROM users where username = $1`;
      const params = [req.body.username];
      const dbQuery = await db.query(userQuery, params);
      const user = dbQuery.rows[0];
      if (!user) {
        return res.status(400).json({
          status: 400,
          message: 'Invalid username'
        });
      }

      const validPassword = comparePassword(user.password, req.body.password);
      if (!validPassword) {
        return res.status(400).json({
          status: 400,
          message: 'Invalid password'
        });
      }

      const token = generateToken({ id: user.id, email: user.email });

      return res.status(200).send({
        status: 200,
        message: 'User signed in successfully',
        data: [
          {
            token: token
          }
        ]
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        message: error
      });
    }
  }
}

export default new User();
