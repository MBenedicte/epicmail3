import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import allmails from '../models/Mails'

const should = chai.should();
chai.use(chaiHttp);

   describe('/GET  all mails', () => {
      it('it should get all mails', (done) => {
         chai
            .request(server)
            .get('/api/v1/messages')
            .send(allmails)
            .end((err, res) => {
               should.not.exist(err);
               res.should.have.status(200);
               res.body.should.be.a('object');
               expect(res.body.data).to.be.a("array");
               expect(res.body.data[0].subject).to.be.a("string");
               expect(res.body.data[0].message).to.be.a("string")
               expect(res.body.data[0].senderId).to.be.a("number")
               expect(res.body.data[0].receiverId).to.be.a("number")
               expect(res.body.data[0].parentMessageId).to.be.a("number")
               expect(res.body).to.have.haveOwnProperty("data");
               done();
            });
      });
      it('Should return an error for invalid user data',(done)=>{
         const newMail = {
            senderId: 1,
            receiver_Id:1,
            subject: "jdjhsdg",
            message: "dsbjhvs",
            parentMessageId: 1
        };
         chai.request(server)
             .post('/api/v1/messages/send')
             .send(newMail)
             .end((err,res)=>{
               res.should.have.status(201);
               res.body.should.be.a('object')
               res.body.should.haveOwnProperty("message")
               res.body.should.haveOwnProperty("status"); 
              
             })
             done();
           })
     
   });

   
   //unread mails

   describe('/unread/:id',()=>{
      it('It should throw a message that a user does not exist',done=>{
         chai
               .request(server)
               .get('/api/messages/unread/-1')
               .end((err, res)=>{
                 res.should.have.status(404)
               })      
         done();
      })
   })
   //sent mails
   describe('/Sent/:id',()=>{
      it('It should throw a message that a user does not exist',done=>{
         chai
               .request(server)
               .get('/api/messages/sent/-1')
               .end((err, res)=>{
                 res.should.have.status(404)
               })      
         done();
      })
   })



   //Mail by Id
   describe('/Get/:id ==> Get mail by id',()=>{
      it('It should throw a message that mail does not exist',done=>{
         chai
               .request(server)
               .get('/api/v1/messages/-1')
               .end((err,res)=>{
                  res.should.have.status(404)
                  res.body.should.have.property('status')
                  res.body.should.have.property('message')
                  expect(res.body.message).eql("Email with the given id does not exist")

               })
         done()
      })
      it('It should display a mail by its id',done=>{
         chai
               .request(server)
               .get('/api/v1/messages/1')
               .end((err,res)=>{
                  res.should.have.status(200)
                  res.body.should.have.property('status')
                  res.body.should.have.property('message')
                  expect(res.body.message).eql("Mail fetched successfully")

               })
         done()
      })
   })

   //Delete mail 

   describe('/Delete/:id mail', ()=>{
      it('It should throw the mail does not',done=>{
         chai
               .request(server)
               .delete('/api/v1/messages/-1')
               .end((err,res)=>{
                  res.should.have.status(404)
                  res.body.should.have.property('status')
                  res.body.should.have.property('message')
                  expect(res.body.message).eql('Email with the given id does not exist')
               })
         done();
      })

      it('It should throw the mail does not',done=>{
         chai
               .request(server)
               .delete('/api/v1/messages/1')
               .end((err,res)=>{
                  res.should.have.status(200)
                  res.body.should.have.property('status')
                  res.body.should.have.property('message')
                  expect(res.body.message).eql('The email was deleted')
               })
         done();
            })
      
   })
  
      

