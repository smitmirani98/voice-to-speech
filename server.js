const express=require('express');
const hbs=require('hbs');
const word=require('./views/access.js');

const targetBaseUrl= 'http://www.letsboot.com/';
const {MongoClient,ObjectID}=require('mongodb');
 var app=express();
var res;
 app.use(express.static( __dirname + 'views'));
 hbs.registerPartials( __dirname +'views/partials');
app.set('view engine','hbs');
app.get('/',(req,res)=>{
  // var user = req.param();
  // console.log(user);
  res.render('voice.hbs',{
    pageTitle:'voice recognition'
  })



  var ans1=word.process();
  console.log(ans1);
  console.log(word.userQuery);

  MongoClient.connect('mongodb://localhost:27017/studentInfo',(err,db)=>{
    if(err){
      return console.log('error occured during connection with database');
      }
      console.log('connected to database successfully');

      if(ans1==="sem1"){
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{
        // console.log(docs[0].ans1);
        res=JSON.stringify(docs[0].sem.sem1,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }
    else if (ans1==="sem2") {
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{
         // console.log(docs[0]);
        res=JSON.stringify(docs[0].sem.sem2,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }
    else if (ans1==="sem3") {
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{
        // console.log(docs[0].ans1);
        res=JSON.stringify(docs[0].sem.sem3,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }
    else if (ans1==="sem4") {
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{

        res=JSON.stringify(docs[0].sem.sem4,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }
    else if (ans1==="sem5") {
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{

        res=JSON.stringify(docs[0].sem.sem5,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }

    else if (ans1==="allAttendenceInfo") {
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{
        // console.log(docs[0].ans1);
        res=JSON.stringify(docs[0].attendence,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }



    else if (ans1==="ut1") {
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{
        // console.log(docs[0].ans1);
        res=JSON.stringify(docs[0].ut.ut1,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }
    else if (ans1==="ut2") {
      db.collection('student').find({rollno:46}).toArray().then((docs)=>{
        // console.log(docs[0].ans1);
        res=JSON.stringify(docs[0].ut.ut2,undefined,2);
        console.log(res);
      },(err)=>{
        if(err){
          console.log('cannot fetch data from database');
        }
      });
    }


  else if (ans1==="allStudentInfo") {
    db.collection('student').find({rollno:46}).toArray().then((docs)=>{
      // console.log(docs[0].ans1);
      res=JSON.stringify(docs[0],undefined,2);
      console.log(res);
    },(err)=>{
      if(err){
        console.log('cannot fetch data from database');
      }
    });
  }



      db.close();
  });



});
//
// var ans1=word.process();
// console.log(ans1);
// console.log(word.userQuery);
//
// MongoClient.connect('mongodb://localhost:27017/studentInfo',(err,db)=>{
//   if(err){
//     return console.log('error occured during connection with database');
//     }
//     console.log('connected to database successfully');
//
//     if(ans1==="sem1"){
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//       // console.log(docs[0].ans1);
//       res=JSON.stringify(docs[0].sem.sem1,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//   else if (ans1==="sem2") {
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//        // console.log(docs[0]);
//       res=JSON.stringify(docs[0].sem.sem2,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//   else if (ans1==="sem3") {
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//       // console.log(docs[0].ans1);
//       res=JSON.stringify(docs[0].sem.sem3,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//   else if (ans1==="sem4") {
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//
//       res=JSON.stringify(docs[0].sem.sem4,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//   else if (ans1==="sem5") {
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//
//       res=JSON.stringify(docs[0].sem.sem5,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//
//   else if (ans1==="allAttendenceInfo") {
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//       // console.log(docs[0].ans1);
//       res=JSON.stringify(docs[0].attendence,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//
//
//
//   else if (ans1==="ut1") {
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//       // console.log(docs[0].ans1);
//       res=JSON.stringify(docs[0].ut.ut1,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//   else if (ans1==="ut2") {
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//       // console.log(docs[0].ans1);
//       res=JSON.stringify(docs[0].ut.ut2,undefined,2);
//       console.log(res);
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });
//   }
//
//
// else if (ans1==="allStudentInfo") {
//   db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//     // console.log(docs[0].ans1);
//     res=JSON.stringify(docs[0],undefined,2);
//     console.log(res);
//   },(err)=>{
//     if(err){
//       console.log('cannot fetch data from database');
//     }
//   });
// }
//
//
//
//     db.close();
// });

app.get('/sem', (req, res) => {
  res.render('sem.hbs', {
    pointer: res

  });
});


app.get('/ut1', (req, res) => {
  res.render('ut1.hbs', {
    // csm1: ,
    // stqa1: ,
    // snmr1: ,
    // bda1:

  });
});

app.get('/ut2', (req, res) => {
  res.render('ut2.hbs', {
    // csm2: ,
    // stqa2: ,
    // snmr2: ,
    // bda2:

  });
});

app.get('/attendence', (req, res) => {
  res.render('attendence.hbs', {


  });
});

// function handleRedirect(req, res) {
//   const targetUrl = targetBaseUrl + req.originalUrl;
//   res.redirect(targetUrl);
// }
// app.get('*', handleRedirect);


app.listen(4000,()=>{
  console.log("server is up on port 4000");
});
