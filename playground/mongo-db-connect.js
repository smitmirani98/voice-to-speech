const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/studentInfo',(err,db)=>{
  if(err){
    return console.log('error occured during connection with database');
    }
    console.log('connected to database successfully');
    db.collection('student').find({rollno:61}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      if(err){
        console.log('cannot fetch data from database');
      }
    });


    // db.close();
});
