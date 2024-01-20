export {}

var credential = {
    user: "admin",
    password: "password123",
  };
  
  var submit = (arg:validCred) => {
    console.log(arg.user);
    console.log(arg.password);
  };
  
  submit(credential);

  interface validCred{
    
    user : string,
    password : string

  }
  