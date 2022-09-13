import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

chai.use(chaiHttp);
const api = chai.request(server).keepOpen();
const { expect } = chai;


describe('Message test for web users !!!', () => {

  const validEmail = {
    fullNames: 'Kalimba kevin',
    email: 'kalimbakevin25@gmail.com', //Faulty email validation should catch this...
    subject: 'andela',
    text: 'nsjdfbgvkjhvbfdvf'

  };
  const inValidEmail = {
    fullNames: 'Kalimba kevin',
    email: 'kalimbakevin25gmail.com', //Faulty email validation should catch this...
    subject: 'andela',
    text: 'nsjdfbgvkjhvbfdvf'

  };
  const validAddress = {
    fullNames: 'Kalimba kevin', //Faulty email validation should catch this...
    subject: 'andela',
    text: 'nsjdfbgvkjhvbfdvf'

  }

it('A user should send a message ! ', done => {
   // contact me section
    const newMessage = {
      fullNames: 'Kalimba kevin',
      email: 'kalimbakevin25@gmail.com', 
      subject: 'andela',
      text: 'nsjdfbgvkjhvbfdvf'
    };
   api
      .post('/api/v1/message')
      .send(newMessage)
      .end((err, res) => {
      // Asserts
     expect(res.status).to.be.equal(201);
     expect(res.body).to.be.a('object');
        done();
      });
  }).timeout(30000);


  it('A user should have a welcome message ! ', done => {
// welcome to the homepage
   api
      .get('/')
      .end((err, res) => {
        done();
      });
  }).timeout(30000);
  
});
