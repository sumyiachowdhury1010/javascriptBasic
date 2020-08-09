function checkLeapYear(year){
    let firstCheck= year % 4
    let secondCheck= year % 400
    let thirdCheck= year % 100
    if( firstCheck== 0){
        if(secondCheck==0){
            console.log('yes');
        }else if(thirdCheck == 0){
            console.log('No');
        }else{
            console.log('Yes');
        }
    }else{
        console.log('No');
    }
}


checkLeapYear(2020);