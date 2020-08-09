let year= 2011
let firstcheck= year % 4
let secondcheck= year % 400
let thirdcheck= year % 100
if( firstcheck== 0){
    if(secondcheck==0){
        console.log('yes');
    }else if(thirdcheck == 0){
        console.log('No');
    }else{
        console.log('Yes');
    }
}else{
    console.log('No');
}