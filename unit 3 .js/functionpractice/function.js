// what is a function
'A function is a set of intructions that performs a specific task or job.'

// you have two variations of functions
// b uilt in functions 
// users defined functions 
// built-in functions- These are instructions that are pre-written
//into the coding language,All we need to do is pass in data.

//exmples
var classname = 'coding class'
console.log(classname)

// user deffined functions are coustoms intructions written by enginers to make code that performs specific task
  // how to write user defined functions

  function examplefunction(){
    console.log('the function script is connected')
  }
  // in order to have a function work. we need to call it
  // the above code is the function definition-meaning
  // its only telling the computer the instruction - not to actually run it.

  // we acess or call a function by writing its name.
  examplefunction()


  let accountbalance = 1000

  function depositMoney(DespositAmount) {
    let newBalance= accountBalance + 10;
    document.getElmentById("data").innerHTML = newBalance;

  }
  // data that we want to manipulate goes inside of
  // round brackets
  // the instructions that we want the data to do go inside the curly brackets 

