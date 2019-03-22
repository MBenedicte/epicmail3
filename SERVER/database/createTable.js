import pool from "./index"

export const createTable=()=>{
    const users=`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(150) NOT NULL,
        lastname VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        username VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR(150) NOT NULL
    )`

    const mails=`CREATE TABLE IF NOT EXISTS mails(
        id SERIAL PRIMARY KEY,
        sender_id integer NOT NULL,
        receiver_id integer NOT NULL,
        primary_message_id integer NOT NULL,
        subject VARCHAR(150) NOT NULL,
        message VARCHAR(1500) NOT NULL,
        status VARCHAR(50) NOT NULL,
        FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
    )`

    const groups=`CREATE TABLE IF NOT EXISTS groups (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        user_role VARCHAR(100) NOT NULL,
        createdOn TIMESTAMP,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        
    )`
    
    const group_message=`CREATE TABLE IF NOT EXISTS groupmessage (
        id SERIAL PRIMARY KEY,
        mail_id INTEGER NOT NULL,
        role VARCHAR(1500) NOT NULL,
        createdOn TIMESTAMP,
        groupId INTEGER NOT NULL,
        FOREIGN KEY (groupId) REFERENCES groups(id) ON DELETE CASCADE,
        FOREIGN KEY (mail_id) REFERENCES mails(id) ON DELETE CASCADE
    )`

    const user_message=`CREATE TABLE IF NOT EXISTS usermessage (
        id SERIAL PRIMARY KEY,
        action VARCHAR(1500) NOT NULL,
        mail_id INTEGER NOT NULL,
        createdOn TIMESTAMP,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (mail_id) REFERENCES mails(id) ON DELETE CASCADE
    )`

   
        const createtablesquery=`${users};${groups};${mails};${group_message};${user_message}`

        pool.query(createtablesquery);
}

export const deletetable=()=>{
    const users=`DROP TABLE  IF EXISTS users`
    const group_message= `DROP TABLE IF EXISTS groupname `
    const groups= `DROP TABLE IF EXISTS groups`
    
    const mails=`DROP TABLE IF EXISTS mails`
    const user_message=`DROP TABLE IF EXISTS  usermessage`

    const deletetablesquery=`${users};${groups};${mails};${group_message};${user_message}`

    pool.query(deletetablesquery);

}

require('make-runnable')