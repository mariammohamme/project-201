'use strict';
var score = 0;
var total ;
alert('welcome');
//question one
function guesswho (){
    var userHow = prompt('Do you know who I am?');
    if (userHow.toLowerCase() === 'y' || userHow.toUpperCase() === 'YES') {
        alert('this is Expected')
    } else if (userHow.toLowerCase() === 'n' || userHow.toUpperCase() === 'NO') {
        alert('lets try to know us');
    } else {
        console.log('please enter some answer like y or YES');
        alert("please enter some answer like y or YES");
    }
    return userHow;
}
guesswho();

/*var userHow = prompt('Do you know who I am?');
if (userHow.toLowerCase() === 'y' || userHow.toUpperCase() === 'YES') {
    alert('this is Expected')
} else if (userHow.toLowerCase() === 'n' || userHow.toUpperCase() === 'NO') {
    alert('lets try to know us');
} else {
    console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");*/


//question two
function guessTwinz(){
    var userTwinz = prompt('I have twins, how many twins do 1 ?!?');
    if (userTwinz.toLowerCase() === 'y' || userTwinz.toUpperCase() === 'YES') {
        alert('YES I HAVE JUST ONE TWINNS')
    } else if (userTwinz.toLowerCase() === 'n' || userTwinz.toUpperCase() === 'NO') {
        alert('BELIVE ME JUST ONE');
    } else {
        console.log('please enter some answer like y or YES');
        alert("please enter some answer like y or YES");
    }
    return userTwinz;
}
guessTwinz();

/*var userTwinz = prompt('I have twins, how many twins do 1 ?!?');
if (userTwinz.toLowerCase() === 'y' || userTwinz.toUpperCase() === 'YES') {
    alert('YES I HAVE JUST ONE TWINNS')
} else if (userTwinz.toLowerCase() === 'n' || userTwinz.toUpperCase() === 'NO') {
    alert('BELIVE ME JUST ONE');
} else {
    console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");*/

//question three
function guessSchool(){
    var userShool = prompt('I studied in 10 schools Do you believe me?!?');
    if (userShool.toLowerCase() == 'y' || userShool.toUpperCase() == 'YES') {
        alert('thx this is true ')
    } else if (userShool.toLowerCase() == 'n' || userShool.toUpperCase() == 'NO') {
        alert('why dont belive that');
    } else {
        //console.log('please enter some answer like y or YES');
        alert("please enter some answer like y or YES");
    }
    return userShool;
}
guessSchool();

/*var userShool = prompt('I studied in 10 schools Do you believe me?!?');
if (userShool.toLowerCase() == 'y' || userShool.toUpperCase() == 'YES') {
    alert('thx this is true ')
} else if (userShool.toLowerCase() == 'n' || userShool.toUpperCase() == 'NO') {
    alert('why dont belive that');
} else {
    //console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");*/

//question four
function guessAnimal(){
    var userAnimal = prompt('I have a phobia of all animals, unfortunately, do you have this phobia like me??');
    if (userAnimal.toLowerCase() == 'y' || userAnimal.toUpperCase() == 'YES') {
        alert('this is big problem i can feel u ')
    } else if (userAnimal.toLowerCase() == 'n' || userAnimal.toUpperCase() == 'NO') {
        alert('you are vary lucky belive me');
    }
    else {
        //console.log('please enter some answer like y or YES');
        alert("please enter some answer like y or YES");
    }
    return userAnimal;
}
guessAnimal();

/*var userAnimal = prompt('I have a phobia of all animals, unfortunately, do you have this phobia like me??');
if (userAnimal.toLowerCase() == 'y' || userAnimal.toUpperCase() == 'YES') {
    alert('this is big problem i can feel u ')
} else if (userAnimal.toLowerCase() == 'n' || userAnimal.toUpperCase() == 'NO') {
    alert('you are vary lucky belive me');
}
else {
    //console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");*/

//question five
function guessGust(){
    var userGust = prompt('now i know how are u??');
    if (userGust.toLowerCase() == 'y' || userGust.toUpperCase() == 'YES') {
        alert('wondreful ')
    } else if (userGust.toLowerCase() == 'n' || userGust.toUpperCase() == 'NO') {
        alert('i hope to know you soon');
    }
    else {
        console.log('please enter some answer like y or YES');
        alert("please enter some answer like y or YES");
    }
    return userGust;
}
guessGust();

/*var userGust = prompt('now i know how are u??');
if (userGust.toLowerCase() == 'y' || userGust.toUpperCase() == 'YES') {
    alert('wondreful ')
} else if (userGust.toLowerCase() == 'n' || userGust.toUpperCase() == 'NO') {
    alert('i hope to know you soon');
}
else {
    console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");*/


// QUASTION SIX
function guessFname (){
    for (var i=0 ; i<=3 ;i++)
    {
        var favNam = prompt('whitch number i think is my lucky')
        // if gaust '2' add 1 to totale
        if (parseInt(favNam ) === 2)
        {
            alert('you gust');
            score++;
            
        }else if (parseInt(favNam ) > 3)
        {
            alert('too hight');
        }else if (parseInt(favNam ) < 3)
        {
            alert('too low');
        }
        break;
    }
    return favNam;
}
guessFname();

/*for (var i=0 ; i<=3 ;i++)
{
    var favNam = prompt('whitch number i think is my lucky')
    // if gaust '2' add 1 to totale
    if (parseInt(favNam ) === 2)
    {
        alert('you gust');
        score++;
        
    }else if (parseInt(favNam ) > 3)
    {
        alert('too hight');
    }else if (parseInt(favNam ) < 3)
    {
        alert('too low');
    }
    break;
}*/

// QUASTION SAVEN
function guessFruit(){
    var i = 0;
    var fruat = ["appel", "orange", "banana", "mango"];
    var favfraut;
    while (i <= 5) {
        // if they choose 'orange' will total=sum+1
         favfraut = prompt('what my faverate fraute ?');
    
        if (favfraut.toLowerCase() === fruat[0]|| favfraut.toLowerCase() === fruat[1]||favfraut.toLowerCase() === fruat[2]||favfraut.toLowerCase() === fruat[3]) {
            alert('yes , i do');
            score++;
            break;
        }else {
            alert('wronge answer');
        }
        i++;
    }
    return favfraut;
}
guessFruit();

/*var i = 0;
var fruat = ["appel", "orange", "banana", "mango"];
var favfraut;
while (i <= 5) {
    // if they choose 'orange' will total=sum+1
     favfraut = prompt('what my faverate fraute ?');

    if (favfraut.toLowerCase() === fruat[0]|| favfraut.toLowerCase() === fruat[1]||favfraut.toLowerCase() === fruat[2]||favfraut.toLowerCase() === fruat[3]) {
        alert('yes , i do');
        score++;
        break;
    }else {
        alert('wronge answer');
    }
    i++;
}*/


alert('welcome    ' + '' + userName+ 'total score is=' + score);
var userName = prompt('what is your name??');
alert ('i hope see you soon ');


