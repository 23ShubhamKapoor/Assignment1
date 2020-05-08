var student={
    1:"shubham",
    2:"john",
    3:"jack",
    4:"jill"

}

var employee={
    12:"shubham",
    13:"sandeep",
    14:"shrikant",
    15:"chandra"

}
const func= (obj,key) => {
   var val=obj[key];
   if (val==undefined){
       return "enter valid key";
   }
   else{
   return val;
   }
}



console.log(func(employee,12));
console.log(func(student,4));
console.log(func(student,14));
console.log(func(employee,15))

