// 18-09-2024 -date
//Code1:- num is +Ve,-ve,0;Even,Odd;  

var num=10
if (num>0){
    console.log("Positive")
    if(num%2==0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
else if(num<0){
    console.log("Negative")
}
else{
    console.log("0")
}

//Code2:- add two number only even 

var n1=6
var n2=4
if (n1%2==0 && n2%2==0){
    console.log(n1+n2)
}
else{
    console.log("Not valid")
}

// code3:- num multiples table 

var n=5
var i=1
for (i=1; i<=10;i++){
    console.log(n+"*"+i+"="+n*i)
}
