import express from 'express';
import {
    getMessages,
    createMessage,
    getMessage,
    deleteMessage
  } from '../controllers/messageController.js';
  
  const messageRouter = express.Router();
  messageRouter
  .route('/')
  .get(getMessages)
  .post(createMessage);

  messageRouter
  .route('/:id')
  .get(getMessage)
  .delete(deleteMessage);

export default messageRouter;