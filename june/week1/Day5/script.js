console.log("Welcome qlith")

//let a=1
//let A=1
//let a=2
//console.log(a)
//cosole.log(A)

//let _="Qlith"
//console.log(_)

let $="Qlith Innovation"
console.log($);

let _name="pagal";
console.log(_name);

let nameOfStudent="krishna";
console.log(nameOfStudent)

//let a=20;
//console.log(a)
//console.log(typeof a)

//let name= `Qlith`
//console.log(typeof name)

let isPass="true"
console.log(isPass)
console.log(typeof isPass)

let empty=undefined
console.log(empty)
console.log(typeof empty)

let nullVlue="null";
console.log(nullVlue)
console.log(typeof nullVlue)

let b;
console.log(b);

let c=30;
console.log(c)
console.log(typeof typeof c)

let d=30.5;
console.log(typeof d)

//global declaration of the variable
var fullName="Qlith Innovation"
console.log(fullName)

{
    console.log(fullName)
}
function getName(){
    console.log(fullName)
}

//getName()
//normal block
//this is my block level declaration of variable
{
var a=40;
console.log("block level declaration of variable")
}

console.log("local access :",a)

function getA(){
    console.log("function level declaration",a)
}
getA();

function variableDeclare(){
}

//let name="Innovation"
//console.log(name)
//{
//    console.log(name)
//}

//function getName(){
  //  console.log(name)
//}
//getName()

//! block level declaration 
{
    let a=30;
    console.log(a)
}
console.log("local access :",a)

//!function level declaration
function getA(){
    console.log("function level declaration")
        console.log(name)
    
}
getA()

// ~ Differnece between var, let, const 

// redeclartion :
//    var =>possiable
//    let =>not possiable
//    const =>not

// ReInitialization
//    var =>possible
//    let =>possiable
//  const =>not possiable

// Only Declaraion possiable or not
//  var =>possiable
//  let =>possiable
//  const =>not possiable


//& way of declaration  and Access

// global declaration
//  var
// local access :var =>access
// block access :access
// function access :access

// let 
// local access : =>access
// block access :access
// function access :access

// const 
// local access : =>possiable
// block access :access
// function access :access


// Block level declaration
// var
// local access : =>possiable
// block access :access
// function access :access

// let 
// local access : =>not possiable
// block access :access
// function access :not access

// const 
// local access : => not possiable
// block access :access
// function access :not access


// function level declaratiotn
// var 
// local access : =>not possiable
// block access :not possiable
// function access :access

// let 
// local access : =>not possiable
// block access :not access
// function access :access

// const 
// local access : =>not possiable
// block access :not access
// function access :access