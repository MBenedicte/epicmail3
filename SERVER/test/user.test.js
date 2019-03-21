import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import users from '../models/users'
//import validateNewUser from '../Helper/validation'


// import User from '../controllers/usercontroller';


const should = chai.should();
chai.use(chaiHttp);

    describe("/GET Users", () => {
            it("it should GET all users", done => {
                  chai
                  .request(server)
                  .get('/api/v1/users')
                  .send(users)
                  .end((err, res) => {
                  should.not.exist(err);
                  res.should.have.status(200);
                  res.body.should.be.a("object");
                  expect(res.body.data).to.be.a("object");
                  expect(res.body).to.have.haveOwnProperty("data");
                  expect(res.body).to.have.haveOwnProperty("message");
                  expect(res.body.message).eql("Users fetched successfully");
                  done();
                  });
            });
      });



describe('Sign up',()=>{

      //1. Do validation 
      it('Should return an error for invalid user data',(done)=>{
    const user={
      firstname:"",
      lastname: "",
      username: "",
      email: "",
      password:""
    };
    
    chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(400);
          res.body.should.be.a('object')
          res.body.should.haveOwnProperty("message")
          res.body.should.haveOwnProperty("status"); 
         
        })
        done();
      })

  //2. return user exits
  it("Should return user already exist",done=>{

    const user={
      firstname:"ssdae",
      lastname: "sasda",
      username: "userone",
      email: "userone@email.com",
      password: "mypassword"
    };
    
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(400)
          res.body.should.have.property('status')
          res.body.should.have.property('message')
          expect(res.body).to.be.a('object')
          expect(res.body.status).equal(400)
          expect(res.body.message).equal('User already exists')
        })
    done();
  })
//push the new user
it('It should push the new user',done=>{
  const user={
    firstname:"benesas",
    lastname: "musabiman",
    username: "benemusa",
    email: "gename@nwe",
    password:"dsadfsdsdd"
  };
  chai.request(server)
      .post('/api/v1/auth/signup')
      // .push(user)
      .end((err,res)=>{
        res.should.have.status('400')
      })
  done();
})


  //3. create a new user
  it('It should create the user',done=>{
    const user={
      firstname:"benesas",
      lastname: "musabiman",
      username: "benemusa",
      email: "gename@nwe",
      password:"dsadfsdsdd"
    };
    chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err,res)=>{
          res.should.have.status('201')
          res.body.should.have.property('status')
          res.body.should.have.property('message')
          res.body.should.have.property('data')
          expect(res.body.message).equal('User registered successfully')
          expect(res.body.status).equal(201)
        })
    done();
  })
 })

describe('/Post User login',()=>{
  //1 . Validation
  it('It should return invalid user input',done=>{
    const user={
      username: "",
      password:""
    };
    

    chai.request(server)
    .post('/api/v1/auth/login')
    .send(user)
    .end((err,res)=>{
      res.should.have.status(404);
      res.body.should.be.a('object')
      res.body.should.haveOwnProperty("message")
      res.body.should.haveOwnProperty("status"); 
      expect(res.body.message).equal("User should not be empty!")
     
    })
    done();
  })

  //invalid username
  it('It should return invalid password if the password does not match',done=>{

    const user={
      username: "usereere",
      password:"dsadfsdsdd"
    }

      chai.request(server)
          .post('/api/v1/auth/login')
          .send(user)
          .end((err,res)=>{
            res.should.have.status(404)
            res.body.should.be.a('object')
            res.body.should.have.property('status')
            res.body.should.have.property('message')
            expect(res.body).to.be.a('object')
            expect(res.body.message).equal('Invalid username or password')
          })

          done();
  })

  //invalid password

  it('It should return invalid password if the password does not match',done=>{

    const user={
      username: "userone",
      password:"dsadfsdsdd"
    }

      chai.request(server)
          .post('/api/v1/auth/login')
          .send(user)
          .end((err,res)=>{
            res.should.have.status(404)
            res.body.should.be.a('object')
            res.body.should.have.property('status')
            res.body.should.have.property('message')
            expect(res.body).to.be.a('object')
            expect(res.body.message).eql('Invalid username or password')
          })

          done();
  })


  


   //Invalid password

  it('It should allow the user to login',done=>{
      const user={
        username: "userone",
        password: "mypassword"
      }
  
    chai.request(server)
        .post('/api/v1/login')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(404);
        })

    done();
  })
  
})