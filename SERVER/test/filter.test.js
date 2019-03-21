

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Filter from '../Helper/filter';
import allmails from '../models/Mails'

chai.use(chaiHttp);

describe('Filter function',()=>{
   const result = Filter.filteredArray(allmails)
   expect(result).to.be.a('array')
})