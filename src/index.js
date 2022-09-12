import mongoose from 'mongoose';
import express from 'express';
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`|Portfolio Backend Server Started && Listening on PORT: ${port}|`)});


 mongoose
   .connect(process.env.DATABASE_NAME)
   .then(() => { console.log('|******Portfolio Backend Database connected successful!!!******|');})
   .catch((error) => {
    console.log('Portfolio backend Database Not Connected');
    console.log({ Error_Message: error });
   })

