const sum = (a) => {
    return (b) => {
        if(b){
            return sum(a+b);

        }
     return a;
    };
  };
  console.log(sum(204)(452)(100)(44)());