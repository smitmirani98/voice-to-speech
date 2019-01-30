
const keyword_extractor = require("keyword-extractor");
var ans;
module.exports.retriveSemInfo=(extraction_result)=>{
console.log("sem");

for(var i=0;i<=extraction_result.length;i++){
  if(extraction_result[i]==="5"||extraction_result[i]==="5th"){
    ans="sem5";
  }
else if(extraction_result[i]==="6"||extraction_result[i]==="6th"){
  ans="sem6";
}
else if(extraction_result[i]==="4"||extraction_result[i]==="4th"){
  ans="sem4";
}
else if(extraction_result[i]==="3"||extraction_result[i]==="3rd"){
  ans="sem3";
}
else if(extraction_result[i]==="2"||extraction_result[i]==="2nd"){
  ans="sem2";
}
else if(extraction_result[i]==="1"||extraction_result[i]==="1st"){
  ans="sem1";
}
}
return ans;
}

module.exports.retriveAttendenceInfo=(extraction_result)=>{
console.log("attendence");
for(var i=0;i<=extraction_result.length;i++){
if(extraction_result[i]==="attendence"){
 ans="allAttendenceInfo";
}
// else if(extraction_result[i]==="defaulters" || extraction_result[i]==="defaulter"){
//  ans="lessThan75"
// }
}
return ans;
}

module.exports.retriveUnitTestInfo=(extraction_result)=>{
console.log("ut");
if(extraction_result[i]==="1"||extraction_result[i]==="1st"){
  return ans="ut1";
}
else if(extraction_result[i]==="2"||extraction_result[i]==="2nd"){
  return ans="ut2";
}

}

module.exports.retriveProgfileInfo=(extraction_result)=>{
console.log("profile");
return ans="allStudentInfo";
}
