//Operator
  //1.arithmetic operator

  let a=5;
  let b=30;
  console.log(a+b);//50
  console.log(a-b);//-10
  console.log(a*b);//600
  console.log(a/b);//0.66

  console.log(a%2);//1
  console.log(a**2);//25
  
  console.log(a++);//5
  console.log(++a);//7

  console.log(b--);//30
  console.log(--b);//28

  console.log("string"+30);//string30
  console.log(20+30+"string");//50string

  console.log(true+"string");//truestring
  console.log(+"30");//30
  console.log(+"text");//not a number
  console.log(typeof +"text");//number
  console.log(+true);//1
  console.log("20" + + "30");//2030
  console.log("20" + + "30"*2);//2060
  //console.log("20" ++);

  let c=40;
  c+=2;//c=c+2;
  console.log(c);//40
  c-=3;
  console.log(c);//39

  //compRISION operator
  let str1="XYZ";
  let str2="XYZ";
  console.log(str1==str2);
  console.log(str1==str2);

  let n1="40";
  let n2="20"
  //normal comarison
  console.log(n1==n2);//true
  //strict comparison
  console.log(n1===n2);//true

  //
  console.log(2>9);
  //let e="true"
  //console.log(true==e);
  //console.log(true!=e);

  //let e="true";
  //console.log(2 !=2);

  let is="true"
  console.log(is !=true);

  //LOGICAL OPERATOR
  console.log((2<4)&& (3<5));
 
let f=3;
console.log((2>4)&& (f++<5));
console.log(f);

console.log(!true);//false
console.log(!false);//true
