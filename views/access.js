console.log('hello world');
const keyword_extractor = require("keyword-extractor");
const {MongoClient,ObjectID}=require('mongodb');
const magic=require('./all-functions.js');

// MongoClient.connect('mongodb://localhost:27017/studentInfo',(err,db)=>{
//   if(err){
//     return console.log('error occured during connection with database');
//     }
//     console.log('connected to database successfully');
//
//     db.collection('student').find({rollno:46}).toArray().then((docs)=>{
//       console.log(JSON.stringify(docs[0].ut,undefined,2));
//     },(err)=>{
//       if(err){
//         console.log('cannot fetch data from database');
//       }
//     });


//     db.close();
// });
var finalResult;
var userQuery=1;
  var sentence = "show me my attendence";
module.exports.process=()=>{

  //  Extract the keywords
  var extraction_result = keyword_extractor.extract(sentence,{
                                                                  language:"english",
                                                                  remove_digits: false,
                                                                  return_changed_case:true,
                                                                  return_chained_words:false,
                                                                  remove_duplicates: false
                                                             });
    console.log(extraction_result);


for(var i=0;i<extraction_result.length;i++){
  if(extraction_result[i]=="semester" || extraction_result[i]==="pointer"){
    userQuery=1;
    console.log("user query :",userQuery);
  }
  else if(extraction_result[i]==="attendence" || extraction_result[i]==="defaulter") {
    userQuery=2;
    console.log("user query :",userQuery);
  }
  else if(extraction_result[i]==="unit test" || extraction_result[i]==="term test") {
    userQuery=3;
    console.log("user query :",userQuery);
  }
  else if(extraction_result[i]==="profile" || extraction_result[i]==="overall detail") {
    userQuery=4;
    console.log("user query :",userQuery);
  }
}
switch (userQuery) {
  case 1:
    finalResult = magic.retriveSemInfo(extraction_result);
    break;
  case 2:
    finalResult = magic.retriveAttendenceInfo(extraction_result);
    break;
  case 3:
    finalResult = magic.retriveUnitTestInfo(extraction_result);
    break;
  case 4:
    finalResult = magic.retriveProfileInfo(extraction_result);
    break;
}
return finalResult;
}
