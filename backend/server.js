const express = require('express')
const bodyParser=require('body-parser')
const database=require('./database/db');
const { error } = require('console');
const cors = require('cors');
const bycrpt=require('bcrypt');
const{signin,signup}=require('./conrollers/userController')

const {expense} =require('./conrollers/expensesController')

const app=express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send('hello');
})

const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


app.post('/signup',signup);

app.post('/signin',signin);

app.post('/expense',expense);


app.get('/data/:email',async(req,res)=>{

  const email = req.params.email; // Convert the ID to a number
  const db = await database();
  const collection = db.collection('expenses');

  const data=await collection.find({email:email}).toArray();
  
  
  
  

  res.send(data)
})







app.listen(3000,()=>{
    console.log('app is listening')
})