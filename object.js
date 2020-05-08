const employee = new Object({
    name: "shubham",
    empId: 1234,
    mobileNumber: [12345, 67890],
    getInfo: function () {
      return this.name + "   " + this.empId;
    },
  });
  
  console.log(employee.name);
  console.log(employee.mobileNumber);
  console.log(employee.getInfo());