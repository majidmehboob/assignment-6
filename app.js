/*
Question 1:           All natural numbers?


var user:string | null=prompt("Enter your last numbr to print?");
var user1:number=Number(user);
var a:number=0;
while(a<user1){
    console.log(++a);
    
}
Question 2:          All natural numbers in reverse?


var user:string | null=prompt("Enter your first numbr to print?");
var user1:number=Number(user);
var a:number=user1;
while(a>0){
    console.log(a--);
    
}
Question 3 Print alphabets?


  var i:number=65;
  var convert:string;
  while(i<=90){
    convert=String.fromCharCode(i++);
    console.log(convert);
    
  }
Question 4:           Even numbers?


var a:number=1;
while(a<=100){
    a++;
    if(a%2==0){
        console.log(a);
    }
}
Question 5:            Odds number?


var a:number=0;
while(a<100){
    a++;
    if(a%2!==0){
        console.log(a);
    }
}
Question 6:            Sum of natural number?


var a:number=0;
var sum:number=0;
while(a<100){
    a++;
    sum+=a;
}
console.log(sum);
Question  7:         Sum of even number?


var a:number=0;
var sum:number=0;
while(a<=100){
    if(a%2==0){
        sum+=a;
    }
    a++;
}
console.log(sum);
Question 8:         Sum of odd number?


var a:number=0;
var sum:number=0;
while(a<=100){
    if(a%2!==0){
        sum+=a;
    }
    a++;
}
console.log(sum);
Question 9:          Multipii  Table?


var a:number=10;
for(var i=1;i<=10;i++){
   console.log(a,' X',i,'=',i*a);
   
}
Question 10:          Count digit?

var a:number=1231;
var c:number=0;
var b:number;
while(a>=1){
    b=a%10;
    a=a/10;
    c++;
}
console.log(c);
Question 11:            Find first and last digit

var a:number=2345;
var b:number=0;
b=a%10;
while(a>=10){
    a=a/10;
}
console.log(Math.floor(a));
console.log(b);
Question 12 :          Sum of first and last number?


var a:number=2345;
var b=0;
b=a%10;
while(a>=10){
    a=a/10;
}
console.log(Math.floor(a+b));
Question  13:          Swap first and Last  number?


var a:number=2345;
var b=0;
b=a%10;
while(a>=10){
    a=a/10;
}
var temp:number=a;
a=b;
b=temp;
console.log("first digit bacame last",a)
console.log("Last digit bacame First",Math.floor(b))
Question   14:            Sum of digit of number?


var a:number=1231;
var b:number;
var sum:number=0;
while(a>=1){
    b=a%10;
    a=a/10;
    sum+=Math.floor(b);
}
console.log(sum);

Question  15:              product of digit of number?

var a:number=1231;
var b:number;
var product:number=1;
while(a>=1){
    b=a%10;
    a=a/10;
    product*=Math.floor(b);
}
console.log(product);
Question  16:              Digit in reverse?
  

var a:number=1234;
var b:number=0;
var reverse:number=0;
while(a>=1){
    b=a%10;
    a=a/10;
    reverse=Math.floor((reverse*10)+b);
}
console.log(reverse);
Question 17:               Palmedrone or not?


var a:number=1001;
var b:number=0;
var c:number=a;
var reverse:number=0;
while(a>=1){
    b=a%10;
    a=a/10;
    reverse=Math.floor((reverse*10)+b);
}
if(reverse==c){
    console.log(c, "This is palindrome");
}
else{
    console.log("No, it is not");
}
   Question 18     frequency of a number

 
 var a:number=3434;
 var c:number=0;
 var b:number=4;
 var d:number=0;
 while(a>=1){
    c=a%10;
    if(c==b){
        d++;
    }
    a=Math.floor(a/10)
 
 }
 console.log(d);
  Question 20                    print all ASCII character



 var convert:string
 var i:number = 1;
while (i <= 127) {
     convert= String.fromCharCode(i++);
     console.log(convert);
     }
    Question 22.         All factors
    

     var nmbr:number = 8
     var factor:number = 0;
     while(factor<=nmbr) {
        if (nmbr % factor == 0) {
             console.log(factor);
         }
         factor++;
     }
     Question 23        factorial .
 var nmbr:number = 8;
var factorial:number = 1;
 while(nmbr>=1){
  factorial=factorial*nmbr;
  nmbr--;
 }
console.log(factorial);

    
Question 32:             To find number  id perfect or not?
var sum:number=0;
var i:number=1;
var num:number=8128;
//496,8128;
while(i<num){
    if(num%i==0){
        sum=sum+i;
        
    }
    i++
}

if(sum==num){
    console.log("it is perfect number");}
    else{
        console.log("it is not perfect number");

Question  power of a value?
  var power:number=2;
  var value:number=3;
  var num:number=value;
  var i:number=1;
  while(i<power){
   value=value*num;
    i++;
  }
  console.log(value);
    
  //Question 30:      Armstrong or not?
  
  var a:number=371;
  var c:number=a;
  var b:number=0;
  var sum:number=0;
  while(a>=1){
    b=a%10;
    a=Math.floor(a/10)
    sum=sum+(b*b*b);
  }
  if(sum==c){
    console.log("this is armstrong number "); }
  else{
    console.log("It is not armstrong number"); }*/
// 24. Write a ts program to find HCF (GCD) of two numbers.
var a = 36;
var b = 60;
var hcf = 1;
for (var index = 0; index <= a || index <= b; index++) {
    if (a % index == 0 && b % index == 0) {
        hcf = index;
    }
}
console.log(hcf);
