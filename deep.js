const employee = {
    name: "Shubham",
    empId: 12345,
  };
  
  const newEmployee = { ...employee};
  
  console.log(employee === newEmployee);
  
 newEmployee.name = "Ram";
 newEmployee.salary=20000;
 newEmployee.age=22;
 newEmployee.sex="Male";

employee.EMPID=54321;
 delete employee.empId;
  
  console.log(employee);
  console.log(newEmployee);
