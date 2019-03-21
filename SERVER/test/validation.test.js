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
      
      const result = validation.validateReistration(user.password)      
      result.should.not.eql('')
      });

   //    it("It sould throw an error that password should not be empty", () => {
   //       const user =  {
   //          firstname: "benedicte",
   //          lastname: "msyugds",
   //          email: "benemusa@.com",
   //          password: "",
   //          username: "iwacu",
   //    }

   //     validation.validateReistration(user.password).should.be.a("object");
   //     validation.validateReistration(user.password).should.not.eql("");
   //    });
   //   });
  
    
   })
 })