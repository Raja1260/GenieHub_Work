/*const color = ["red","blue","black","green","purple","white"];
let x = color.indexOf("black");
console.log(x+1);*/
/*const color = ["red","blue","black","green","purple","white"];
color.reverse();
console.log(color);
const run =[18,45,10,7];
run.sort(function(a,b){return a-b});
console.log(run);
const run =[18,45,10,7];
run.sort(function(a,b){return b-a});
console.log(run[0]);
console.log(Math.floor(Math.random() * 100)); Random number
console.log(Math.floor(Math.round(5.6)));  ROUND VALUE
console.log(Math.floor(Math.abs(-6.899))); ABS VALUE 
console.log(Math.floor(Math.sin(90 * Math.PI /180))); trigonometry 
console.log(Math.floor(Math.min(0,89,-65,99,77,-7))); MIN VALUE IN A LIST
console.log(Math.floor(Math.max(0,89,-65,99,77,-7))); MAX VALUE IN A LIST
const color = ["red","blue","black","green","purple","white"];
color.pop();
color.pop();
color.push("purple");
color.push("red");
console.log(color); PUSH & POP */
 
/*LOOP'S for,while, dowhile,forin,forof
sum=0;
for(let i=1;i<=100;i++)
{
    sum=sum+i;                      //sum of 100 numbers.
}
 1...
 console.log("sum =",sum); 
 sum=0;
 for( i=1;i<=10;i++)
 {
    if(i%2==0)
    {
    console.log(i);
    sum=sum+i;
    }
 } 
 2.....
  console.log("sum =",sum);      //PRINT EVEN && ODD numbers with its sum also......
  sum=0;
  for( i=1;i<=10;i++)
  {
     if(i%2!==0)
     {
     console.log(i);
     sum=sum+i;
     }
  }
   console.log("sum =",sum); 
   n=36;
   count=0;
   for(i=1;i<=n;i++)
   {
    if(n%i==0)                                //PRIME NUMBER OR NOT.....
    {
     count++; 
                         
    }
   }  
    if(count==2)
      console.log("Number is prime");
    else
      console.log("Number is not prime"); */ 
    /*let gamenum = 45
    let usernum = prompt("Guess the game number");        //GAME-----1.
    while (usernum != gamenum)                            // GUESS NUMBER IS CORRECT OR WROUG......
    {
    usernum = prompt("You Entered number is wroung,Guess again");
    }
    console.log("Congratulation,You Entered the correct number");
    
   /* ## STRING IN JS(NOTE---here original string does't change) 
    let str1 = "My name is raja yadav";
    let str2 = 'MCA 2nd year student';
     console.log(str1[0]);                     //check index alpa & length of str...
     console.log(str2[4]);
     console.log(str1.length);


     ****** TEMPLATE LITERALS OR STR INTERPOLATION ******
let specialString = `my name is raja yadav`;
console.log(specialString);
console.log(typeof (specialString));
  
let obj = {item:"pen", price:45}
console.log("The cost of", obj.item, "is",obj.price,"rupees");  //OLD.......
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);  //NEW.......HERE ,notice 45 in output(part of string)

let specialString = `my name is raja yadav ${1+4+5}`;
console.log(specialString);
//-----> ESCape tags uses like \n ...//
console.log("Raja\n yadav");
console.log("Raja\t yadav");

// UPPER and LOWER METHOD
let str = "Raja yadav";
let new1str = str.toUpperCase();
let new2str = str.toLowerCase();
console.log(str);
console.log(new1str);
console.log(new2str);*/

// take input user name = "raja yadav" then username should be "@rajayadav9"
 /*let fullname = prompt("Enter your fullname without space");
 console.log(fullname);                                              //PROBLEM----
 let username = "@" + fullname +fullname.length;
 console.log(username);

 // ARRAY IN JS(NOTE---here array we can change itt)
  let marks = [67,89,95,80,82]                        
  console.log(marks); 
  console.log(marks.length); 
  marks[0] = 77  //change in array
  console.log(marks);                                 
  let heroes = ["ironman","spiderman","hulk","batman","thor","doremon"];
  console.log(heroes);
  let info = ["raja",82,"indore","SGSITS","rollno = 45"];
  console.log(info);
  let cities = ["indore","delhi","dehradun","bhopal","dewas","ujjain"];
  for (let city of cities)
  {
    console.log(city);
    console.log(city.toUpperCase);
  }

  // TO find average marks in  given array [82,67,77,90,95,56]...
   let marks = [82,67,77,90,95,56];
   let sum = 0;
   for (let val of marks)                           //PROBLEM......
   {
     sum += val;
   }
   let avg = sum /marks.length;
   console.log("Average marks is =", avg); 

  // Discount 10% of each given items [100,200,300,400,500,600,700,800,900,1000]
  
  let items =  [100,200,300,400,500,600,700,800,900,1000];
  console.log("Without discount is =",items);
  for (let i = 0; i < items.length ; i++)
   {
    let offer = items[i] / 10;                       //PROBLEM......
    items[i] -= offer;
   }
   console.log("Applied discount is =",items); 

  //ARRAY METHOD LIKE Push , Pop , tostring(convert aary to string)
   
  let cities = ["indore","delhi","dehradun","bhopal","dewas","ujjain"];
  cities.push("rau");
  console.log(cities);
  cities.push("pritampur","ratlam","nagda");
  console.log(cities);                          //NOTE---- insert & delete both last end in array...
  cities.pop();
  console.log(cities);
 let marks = [82,67,77,90,95,56];
  marks.toString()
  console.log(marks);

// Concat()....(join mutiplr array) using shift & unshift method

let cities = ["indore","delhi","dehradun","bhopal","dewas","ujjain"];
cities.unshift("rau");
console.log(cities);                          // NOTE---- here insert from start end....
cities.shift("rau");
console.log(cities);                        // NOTE---- here delete  from start end.....
   
// slice()----(return a peice of array)------slice(startidx,endidx)

let cities = ["indore","delhi","dehradun","bhopal","dewas","ujjain"];
console.log(cities.slice(0,2));
console.log(cities.slice(1,3));                     // print n-1

//Splice()----change original array(add, remove, repalce)----splice(startidx,delcount,newelementadd)

let arr = [1,2,3,4,5,6,7,8];
arr.splice(2,1,9);
console.log(arr);
arr.splice(4,3); 

// create arr to store company-- ["bloomberg","microsoft","uber","google","netflix","amazon"]

let cname = ["bloomberg","microsoft","uber","google","netflix"];
cname.splice(0,1);               // delete 1st compnay ...
console.log(cname);
cname.splice(1,1,"ola");         // uber replace ola...       //PROBLEM
console.log(cname);              
cname.push("amazon");
console.log(cname);  */            // add amazon at the last.....
 
//****//-----function-----

/*function myline()       // without parameter
{
  console.log("welcome io rajwada");
  console.log("indore is very clean");    
  console.log("my name raja yadav");
}
  myline();        // 2times function call
  myline(); 
  
  function myfunction(msg)     // Parameter ----> input.
 {
  console.log(msg)
 }
 myfunction("i love indore");  //Argument....

 // sum of 2no using function 
  
 function sum(x,y)
{
  s = x+y;
  return s;
}
  let val = sum(6,8)
  console.log(val); */

  //****/ ARROW Function----> let or const functionName = (para1,para2,...) =>  { do work };  

 /*function sum(x,y)
 {
  return x+y;
 } 
  const arrowsum = (x,y) =>
  {
    console.log(x+y);
  };

  function mult (a,b)
  {
    return(a*b);
  }
    let arrowmult = (a,b) =>
    {
      console.log(a*b);
    }; 

let printhello = () => 
{
  console.log("hello");
}; 

// Given String deduct vowel with its count using Function.......

function countvowel (str)
{
  let count =0;                //PROBLEM
  for(let char of str)
  {
    if(char==="a" || char==="e" || char=="i" || char==="o" || char==="u")
    {
      count++;
    }
  }
   console.log(count);
} 

// Same Problem solve by arrow function.....
let countvowel =(str) =>
{
  let count =0;                //PROBLEM
  for(let char of str)
  {
    if(char==="a" || char==="e" || char=="i" || char==="o" || char==="u")
    {
      count++;
    }
  }
   console.log(count);
}

//*****----> Foreach loop in array.
/*let arr = [1,2,3,4,5];
arr.forEach(function printval(val)
{
  console.log(val);
});*/

/*let arr= ["indore","pune","delhi","kolkata"];
arr.forEach((val,idx,arr) =>
{                                        
  console.log(val.toUpperCase(),idx,arr); //parameter acc to need we can take it...        
});*/

//*****// find square of given numbers using foreach loop
/*let nums = [12,13,14,15,16];
{
   nums.forEach((num) =>
   {
    console.log(num*num);
  })
}
//OOOORRRRR
let nums = [12,13,14,15,16];
{
   nums.forEach((num) =>
   {
    console.log(num**2); // changes only this line (n**2 or n*n both are same)
  })
}*/

//DOOOOOOOOOOMMMMMMMM ------ basic 
//console.log(window);                  // All info about window.
//alert("bhailog");

/*let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText += " from SGSITS";*/
 
/*let divs = document.querySelector(".box");
divs[0].innerText*/




///// Game....... ROCK, PAPER, SCISSPRS>>>>>>

/*let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 
  // Generate comp choice
const genCompChoice =() =>
{
  // rock ,paper,scissor randomly using array
const options = [ "rock","paper","scissors"];
const randidx = Math.floor(Math.random() *3 )
return options[randidx];
};

 const drawGame = () =>
 {
  msg.innerText = "Game was draw , again play";
  msg.style.backgroundColor = "black";
 };
 
 const showWinner = (userWin,userChoice,compChoice) =>
 {
  if(userWin)
  {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = 'You win!';
    console.log(compChoice);
    msg.style.backgroundColor = "green";
  }
  else
  {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = 'you lost.';
    console.log(compChoice);
    msg.style.backgroundColor = "red";
  }
 };

const playGame = (userChoice) =>
{
  const compChoice = genCompChoice();
 if(userChoice === compChoice)
 {
  drawGame();
 }
  else
  {
    let userWin = true;
    if (userChoice === "paper")
    {
      // scissors,paper
      userWin = compChoice === "scissors"? false:true;
      if(userWin)
        console.log("You win")
      else
        console.log("Computer win")
     }
     else if (userChoice ==="scissors")
     {
       // rock,scissors
       userWin = compChoice === "rock"? false : true;
       if(userWin)
        console.log("You win")
      else
        console.log("Computer win")
    

     }
      else 
      {
        userWin = compChoice === "paper" ? false : true;  
        if(userWin)
        console.log("You win")
      else
        console.log("Computer win")
      }
      showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) =>
{
  choice.addEventListener("click", () =>
  {
    const userChoice= choice.getAttribute("id");
    playGame(userChoice); 
  });
});*/
    
    
    
    
     //------------Object &&&& Class......
/*class car 
{
  constructor(name,brand,color)
  {
    this.brand = name,brand,color;
     this.color = name;
     this.tyre = name;
  }
  start(speed)
  {
    this.runsat=speed;
  }
}
const mycar = new car("BMW");
const mycolor = new car("Red");
const mytyre = new car("MRF");
mycar.start(130);
console.log(mycar.runsat);
console.log(mycar.brand);
console.log(mycolor.color);
console.log(mytyre.tyre);

// object......
const student =
{
  fullname: "Raja yadav",
  marks: 82,
  place: "Indore",
  printMarks: function ()
  {
    console.log("marks =",this.marks);
  },
};


// Without constuctor but every class by default generated constructer.....in js 


class ToyotaCar
{
  start () {
    console.log("car is run");
}
  stop () {
    console.log("car is stop");
  }

  setBrand(brand)
  {
    this.brand = brand;
  }
 }

 let fortuner = new ToyotaCar();
 fortuner.setBrand("fortuner");
 let lexus = new ToyotaCar();
 lexus.setBrand("lexus"); 



 // Here we use contructer.....

 class ToyotaCar
{
  constructor ()
  {
    console.log("creating a new object");
  }
  start () {
    console.log("car is run");
}
  stop () {
    console.log("car is stop");
  }

  setBrand(brand)
  {
    this.brand = brand;
  }
 }

 let fortuner = new ToyotaCar(); // constructor
 let lexus = new ToyotaCar();  // constructor 
*/


 // Inheritence in js..........

 class person 
 {
  eat() {
  return (" Eat");
  }
  sleep() {
    return ("Sleep");
  }
  work(){
  
    return ("Nothing");
  }
 }

 class engineer extends person 
 {
  work()
  {
    return "working at Amazon";
  }
}
 
class doctor extends person
{
  work(){
    return "work at applo hospital";
}
}

const obj = new engineer();
const obj1 = new doctor();
const obj2 = new person();
console.log(obj.work());
console.log(obj1.work());
console.log(obj2.work());
console.log(obj2.eat());
console.log(obj2.sleep());














 






















  







    






  
























































 

    


 

  


