import moongose from 'mongoose';
import { config } from 'dotenv';
import messageModel from '../../src/models/messageModels.js';


config({ path: '.env' });

const DB_TEST = process.env.DATABASE_TEST

 moongose.connect(DB_TEST).then(() => console.log('Test DB connected successful !'));

beforeEach(done => {
  messageModel.deleteMany({}, function(err) {});
  
  done();
});

afterEach(done => {
  messageModel.deleteMany({}, function(err) {});
 
  done();
});