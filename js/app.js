'use strict';
var score = 0;
var total ;
alert('welcome');
var userHow = prompt('Do you know who I am?');
if (userHow.toLowerCase() == 'y' || userHow.toUpperCase() == 'YES') {
    alert('this is Expected')
} else if (userHow.toLowerCase() == 'n' || userHow.toUpperCase() == 'NO') {
    alert('lets try to know us');
} else {
    console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");



var userTwinz = prompt('I have twins, how many twins do 1 ?!?');
if (userTwinz.toLowerCase() == 'y' || userTwinz.toUpperCase() == 'YES') {
    alert('YES I HAVE JUST ONE TWINNS')
} else if (userTwinz.toLowerCase() == 'n' || userTwinz.toUpperCase() == 'NO') {
    alert('BELIVE ME JUST ONE');
} else {
    console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");
var userShool = prompt('I studied in 10 schools Do you believe me?!?');
if (userShool.toLowerCase() == 'y' || userShool.toUpperCase() == 'YES') {
    alert('thx this is true ')
} else if (userShool.toLowerCase() == 'n' || userShool.toUpperCase() == 'NO') {
    alert('why dont belive that');
} else {
    //console.log('please enter some answer like y or YES');
    alert("please enter some answer like y or YES");
}
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");
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
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");

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
//console.log('this is test at the end');
//alert("please enter some answer like y or YES");

// QUASTION SIX
var favNam = prompt('whitch number i think is my lucky')
for (var i=0 ; i<=5 ;i++)
{
    // if gaust '2' add 1 to totale
    if (parseInt(favNam ) == 2)
    {
        alert('you gust');
       // total+=score;
        
    }else if (parseInt(favNam ) >= 5)
    {
        alert('too hight');
    }else if(parseInt(favNam ) >=4)
    {
        alert('too hight');
    }else(parseInt(favNam )<8)
    {
        alert('too low');
    }
}

// QUASTION SAVEN
var fruat = ["appel", "orange", "banana", "mango"];
var favfraut = prompt('what my faverate fraute ? gaust one of each :appel / mango / orange /bannan');
var i = 0;
while (i <= 3) {
    // if they choose 'orange' will total=sum+1
    if (toString(favfraut) === "orange") {
        alert('yes , i do');
        total+=score;
    } else if (toString(favfraut) === "appel") {
        alert('You dont gaus this i dont like appel');
    } else if (toString(favfraut) === "banana") {
        alert('you dont gaust i dont like banana');
    } else (toString(favfraut) === ' ' || favfraut === null)
    {
        alert('you dont gaust this is the theard time');
    }
    i++;
}



var userName = prompt('what is your name??');
alert('welcome    ' + '' + userName+ 'total score is=' + total);
alert ('i hope see you soon ');


