import express from 'express';
import messageRouter from './routes/messageRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
const { urlencoded , json } = bodyParser;

app.use(json());
app.use(cors());
app.use(urlencoded ({extended: false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.header('origin'));
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });


// Creating Routes 

app.get('/', (req, res) => {
    res.send('Welcome To My Homepage')
})
 

app.use('/api/v1/message', messageRouter);

export default app;