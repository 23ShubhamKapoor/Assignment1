const student= new Object({
    1:"shubham",
    2:"john",
    3:"jack",
    4:"jill"

});

const employee= new Object({
    12:"shubham",
    13:"sandeep",
    14:"shrikant",
    15:"chandra"

})
const func= (obj,key) => {
   var val=obj[key];
   if (val==undefined){
       return null;
   }
   else{
   return val;
   }
}



console.log(func(employee,12));
console.log(func(student,4));
console.log(func(student,99));
console.log(func(employee,15));
console.log(func(employee,121));

