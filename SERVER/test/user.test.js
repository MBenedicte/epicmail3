import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';




const should = chai.should();
chai.use(chaiHttp);

describe('/LOGIN : User login',()=>{
  it('It should display that the username is invalid',done=>{
   const user= {
      username:"bbene",
      password:"123456789"
    }    
    chai
        .request(server)
        .post('/api/v2/auth/login')
        .send(user)
        .end((err,res)=>{
          should.not.exist(err)
          res.should.have.status(400)
          res.body.should.have.property('message')
          res.body.should.have.property('status')
          expect(res.body.message).eql('Invalid username')
        })
        done();
  })
  it('It should display that the password is invalid',done=>{
    const user= {
      username:"bebene",
      password:"1237658679"
    }    
     chai
         .request(server)
         .post('/api/v2/auth/login')
         .send(user)
         .end((err,res)=>{
           should.not.exist(err)
           res.should.have.status(400)
           res.body.should.have.property('message')
           res.body.should.have.property('status')
           expect(res.body.message).eql('Invalid password')
         })
         done();
   })
   it('It should allow that user to login',done=>{
    const user= {
       username:"bebene",
       password:"123456789"
     }    
     chai
         .request(server)
         .post('/api/v2/auth/login')
         .send(user)
         .end((err,res)=>{
            should.not.exist(err)
           res.should.have.status(200)
           res.body.should.have.property('message')
           res.body.should.have.property('status')
           expect(res.body.message).equal('User signed in successfully')
         })
         done();
   })
})
describe('/Signup : User registration',()=>{
  it('It should display the message that the user inputs are not filled well',done=>{
    const user={
      firname: "new",
      lastname:"",
      email:"new@gmail.com",
      username:"newuser",
      password:"233243213"
    }
    
    chai
        .request(server)
        .post('/api/v2/auth/signup')
        .send(user)
        .end((err,res)=>{
          should.not.exist(err)
          res.should.have.status(400)
        })

    done();
  })


  it('It should display the message that the user inputs are not filled well',done=>{
    const user={
      firname: "newuser",
      lastname:"usernew",
      username:"newUser",
      email:"new@gmail.com",
      password:"233243213"
    }
    
    chai
        .request(server)
        .post('/api/v2/auth/signup')
        .send(user)
        .end((err,res)=>{
          should.not.exist(err)
          res.should.have.status(400)
          res.body.should.have.property('status')
        })

    done();
  })



  it('It should display the message that the username already exists',done=>{
    const user={
      firname: "new",
      lastname:"user",
      email:"new@gmail.com",
      username:"bebene",
      password:"233243213"
    }
    
    chai
        .request(server)
        .post('/api/v2/auth/signup')
        .send(user)
        .end((err,res)=>{
          should.not.exist(err)
          res.should.have.status(400)
        })

    done();
  })
})