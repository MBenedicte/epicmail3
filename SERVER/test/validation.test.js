import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import validation from '../Helper/validation'


const should = chai.should();
chai.use(chaiHttp);
// const should = chai.should()

describe("Test validator helper", () => {
    
    describe("/Password", () => {
         it("It sould throw an error that password should not be less than 8", () => {
         const user =  {
            firstname:"dssdgudsgu",
            lastname: "msyugds",
            email: "benemusa@gmail.com",
            password: "",
            username: "iwacu",
      }
      
      const result = validation.validateRegistration(user.password)      
      result.should.not.eql('')
      });

      describe("/Firstname", () => {
         it("It sould throw an error that the firstname should not be empty ", () => {
         const user =  {
            firstname:"",
            lastname: "msyugds",
            email: "benemusa@gmail.com",
            password: "",
            username: "iwacu",
      }
      
      const result = validation.validateRegistration(user.password)      
      result.should.not.eql('')
      });
   }) 

   describe("/Lastname", () => {
      it("It sould throw an error that the lastname should not be empty ", () => {
      const user =  {
         firstname:"sdjhsd",
         lastname: "",
         email: "benemusa@gmail.com",
         password: "",
         username: "iwacu",
   }
   
   const result = validation.validateRegistration(user.password)      
   result.should.not.eql('')
   });
}) 

   })
 })