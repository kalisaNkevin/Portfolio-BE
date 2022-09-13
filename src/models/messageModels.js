import mongoose from 'mongoose';
import validator from 'validator';

const { Schema, model } = mongoose;
const { isEmail } = validator;

const messageSchema = new Schema({
  fullNames: {
    type: String,
    required: 'Full names are required',
  },
  email: {
    type: String,
    required: [true, 'Please Provide your email!!'],
    validate: [isEmail, 'Please! provide valid email'],
  },
  subject: {
    type: String,
    required: [true, 'Please Provide subject!!'],
  },
  text: {
    type: String,
    required: [true, 'text can not be null'],
  },
  dateOfMessage: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message = model('Message', messageSchema);

export default Message;
