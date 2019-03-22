import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';


const should = chai.should();
chai.use(chaiHttp);

describe('/SEND MAIL : Send a mail',()=>{
      it('it should not send a message to a user that not exist', (done) => {
        
        let token = ''
         chai.request(server)
          .post('/api/v2/messages/3')
          .set('x-access-token', token)
          .send({
            subject: 'hello there',
            message: 'This is just testing'
          })
          .end((err, res) => {
            should.not.exist(err)
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
          });
      });

   
})

describe('/GET : mail by id for a user', () => {
   it('it should get a particular messages for a user', (done) => {
     let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJiZWJlbmVAYWlsLmNvbSIsImlhdCI6MTU1MzIwNTg5MH0.s3zypyfJqbNE0fPtxa2Q7986AtR-m4LalMtQDtOMCUs'
      chai.request(server)
       .get('/api/v2/messages/1')
       .set('x-access-token', token)
       .end((err, res) => {
         res.should.have.status(200);
         res.body.should.be.a('object');
         
         done();
       });
   });
});

describe('/GET : all mails for a user', () => {
   it('it should get all mails for a user', (done) => {
     let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJiZWJlbmVAYWlsLmNvbSIsImlhdCI6MTU1MzIwNTg5MH0.s3zypyfJqbNE0fPtxa2Q7986AtR-m4LalMtQDtOMCUs'
      chai.request(server)
       .get('/api/v2/messages')
       .set('x-access-token', token)
       .end((err, res) => {
         res.should.have.status(200);
         res.body.should.be.a('object');
         
         done();
       });
   });
});

describe('/GET : all mails for a user', () => {
   it('it should get all mails for a user', (done) => {
     let token=''
      chai.request(server)
       .get('/api/v2/messages/1')
       .set('x-access-token', token)
       .end((err, res) => {
         res.should.have.status(403);
         res.body.should.be.a('object');
         
         done();
       });
   });
});

describe('/GET : all mails for a user', () => {
   it('it should get all mails for a user', (done) => {
     let token=''
      chai.request(server)
       .get('/api/v2/messages')
       .set('x-access-token', token)
       .end((err, res) => {
         res.should.have.status(403);
         res.body.should.be.a('object');
         
         done();
       });
   });
});

   