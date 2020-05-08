const deposit= (a, b) => {
   if((isNaN(a)==true)||(isNaN(b)==true)){
       return "Enter numbers only";
   }
 else{
     return a+b;
 }

};

console.log(deposit(10,20));
console.log(deposit(10,"shubham"));
console.log(deposit(30,30));
console.log(deposit(10,'kapoor'));
  
