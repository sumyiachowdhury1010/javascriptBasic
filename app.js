let year = 2000;
let firstCheck = year % 4
let secondCheck = year % 100
let thirdcheck = year % 400
if(secondCheck == 0 ){
    if(firstCheck == 0){
       console.log("yes");}
    }else if(thridcheck == 0){
        console.log("yes");
    }else{
        console.log("no");
    }
