var cl = console.log;
cl('app.js file')

cl(addtoNum(2,2,));
// function decl

function addtoNum(x,y){
    return x + y;
}

// cl(AddtoNum(2,4)) //  AddtoNum is not function

// function expression

var  AddtoNum = function(x,y){
    return x + y;
}
cl(AddtoNum(2,4))

//  OR

//  ES6 arrow function provides us a alternative way of writing function with shorter syntax


var AddtoNum = (x,y) =>{
    return x + y;
}
cl(AddtoNum(2,3));

// OR

var ADDtoNum = (x, y) => x + y;
cl(ADDtoNum(2,5));


var AddthereNum = (x,y,z) => cl(x + y + z);
AddthereNum(2,3,4);

var MultiplyBy = (x) => x * 2;
cl(MultiplyBy(10));
// OR
var MultiplyBy1 = x => x * 3;
cl(MultiplyBy1(20));

// we can't this key word in arrow function
// In Arrow function 'this' keyword always point to window object

/* var person ={
    fname : 'jhone',
    lname : 'Doe',
    age : 33,
    fullName : function(){
        return `${this.fname} ${this.lname}`
    }
} */

// cl(person);

/* var person ={
    fname : 'jhone',
    lname : 'Doe',
    age : 33,
    fullName : () =>{
        cl(this);
        return `${this.fname} ${this.lname}`
    }
}

cl(person.fullName()); */

var person1 ={
    fname : 'jhone',
    lname : 'Doe',
    age : 33,
    fullName : () => `${person1.fname} ${person1.lname}`
}
cl(person1.fullName());
  
// divided
var dividedBy = (x) => x / 2;
cl(dividedBy(80));

// modulus

var modulusBY = (x) => x % 4;
cl(modulusBY(30))

// divided

var divedtwo = (x,y) => x * y;
cl(divedtwo(20,20))  


///

var person = {
	fname : "jhon",
	lname: "doe",
	profile : "Mean Stack",
	place : "puna",
	age : 73,
	CanDrive : true,
	
	fullName : () => `${person.fname} ${person.lname}`
}
cl(person.fullName());

// addition 
var addition = (x,y)=> x + y;
cl(addition(10, 20));

var ThrernumAdd = (x,y,z)=>x + y + z;
cl(ThrernumAdd(30, 40, 50));

var AddFourNum= (x, y, z, p)=>x + y + z + p;
cl(AddFourNum(100, 200, 300, 400));

var AddFiveNum = (a,b,c,d,e) =>a+b+c+d+e;	
cl(AddFiveNum(10,20,30,40,50));

var  AddSixNum = (a,s,d,f,g,h) =>a+s+d+f+g+h;
cl(AddSixNum(100, 200,300,400,500,600));

var AddSevenNum= (q,w,e,r,t,y,u) =>q+w+e+r+t+y+u;
cl(AddSevenNum(12,22,35,46,57,68,79));

var AddEigthNum = (a,s,d,f,g,h,j,k) => a+s+d+f+g+h+j+k;
cl(AddEigthNum(19,28,37,46,55,64,73,28));

var AddNineNum = (x,y,z,a,b,c,p,q,r) => x+y+z+a+b+c+p+q+r;
cl(AddNineNum(92,81,73,64,45,45,33,24,15));

var AddTenNum =(a,b,c,p,q,r,x,y,z,v) =>a+b+c+p+q+r+x+y+z+v;
cl(AddTenNum(101010,999,888,777,6666,555,444,333,222,111));


// sub

var SubNumbertwo = (x,y) =>x - y;
cl(SubNumbertwo(39,29));

var SubThreeNum = (a,b,c) => a-b-c;
cl(SubThreeNum(50,20,10));

// multi

var multiplyby = (x)=> x * 2;
cl(multiplyby(12));

var twomultipy = (x,y) => x * y;
cl(twomultipy(10,2))

// divided by

var onedivided = (x) => x / 2;
cl(onedivided(200));

var twodivide = (x,y) => x / y;
cl(twodivide(200,20))

// modulus 

var onemodulus = x => x % 3;
cl(onemodulus(29));

var twomodulus = (x,y) => x % y;
cl(twomodulus(21,2));

// PI
var getValueOfPI = () =>  Math.PI;
cl(getValueOfPI());

var  getValueofPI = () => Math.PI * 2; 
cl(getValueofPI());

// round
var mathround = () => Math.round(3.4);
cl(mathround());

// ceil
var mathceil = () => Math.ceil(4.1);
cl(mathceil());

// floor
var mathfloor =  () => Math.floor(4.9);
cl(mathfloor());

// absolute 
var mathabsolute = () => Math.abs(-2);
cl(mathabsolute());

// pow 
var pow = () => Math.pow(2,3);
cl(pow()) 

// sqrt
var sqrt = () => Math.sqrt(144);
cl(sqrt());
// min
var min = () => Math.min(10,23,45,56,78,90,09);
cl(min());
// max 
var max = () => Math.max(10,3,24,56,78,90,90,67,890);
cl(max());
// random
var random = () => 7 + Math.floor(Math.random()* 7);
cl(random());

// sqrtNum
var sqrtNUm = x => x * x;
cl('sqrtNum 11 to 21');
cl(sqrtNUm(11));
cl(sqrtNUm(12));
cl(sqrtNUm(13));
cl(sqrtNUm(14));
cl(sqrtNUm(15));
cl(sqrtNUm(16));
cl(sqrtNUm(17));
cl(sqrtNUm(18));
cl(sqrtNUm(19));
cl(sqrtNUm(20));
cl(sqrtNUm(21));

// mutipl

var addtonumMul = x => x *10;
cl('addtonumMul ')
cl(addtonumMul(50));
cl(addtonumMul(100))
cl(addtonumMul(150))
cl(addtonumMul(200))