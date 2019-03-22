import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';


const should = chai.should();
chai.use(chaiHttp);

describe('/POST : Create a group',()=>{
    ('It should not create a group',done=>{
        let token='';
        const group={
            groupname: "group1",
            user_role: "admin"
        }
        chai
            .request(server)
            .set('token', token)
            .send(group)
            .post('/api/v2/createGroup')
            .end((err, res)=>{
                should.not.exist(err)
                res.should.have.status(200)
            })
            done()
    })
})

describe('/POST : Create a group',()=>{
    ('It should not create a group',done=>{
    
        chai
            .request(server)
            .set('token', token)
            .send(group)
            .post('/api/createGroup')
            .end((err, res)=>{
                should.not.exist(err)
                res.should.have.status(200)
            })
            done()
    })
})