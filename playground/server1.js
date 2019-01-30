const express=require('express');
const hbs=require('hbs');


const {MongoClient,ObjectID}=require('mongodb');
 var app=express();
var res;
 app.use(express.static( __dirname + 'views'));
 hbs.registerPartials( __dirname +'views/partials');
app.set('view engine','hbs');


MongoClient.connect('mongodb://localhost:27017/studentInfo',(err,db)=>{
  if(err){
    return console.log('error occured during connection with database');
    }
    console.log('connected to database successfully');


    db.collection('student').find({rollno:46}).toArray().then((docs)=>{
      // console.log(docs[0].ans1);
      res=JSON.stringify(docs[0].sem.sem1,undefined,2);
      console.log(res);
    },(err)=>{
      if(err){
        console.log('cannot fetch data from database');
      }
    });
  db.close();
});
app.get('/views',(req,res)=>{
  // var user = req.param();
  // console.log(user);
  res.render('sem.hbs',{
    pointer:'voice recognition'
  })
});
app.listen(3000,()=>{
  console.log("server is up on port 3000");
});
