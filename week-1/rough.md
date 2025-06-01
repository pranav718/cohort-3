Html,Css

Whatever we write under the title tag, it’ll appear on top
```
<head>
	<title>
		Visual Studio Code - Code Editor
	</title>
</head>
```
In head tag, we write metadata, that is which doesn’t occur on page
In body tag, whatever we write , appears.

div tag helps in structure, for example it creates multiple sections
span is similar but they don’t take the complete width

Use cmd+d to select and change all div tag to span tag

The html way to change the size of the font is by using h1,h2… (headline)tag, we can also use them inside span and h2 is slightly less in size than h1

B,i,u tag are bold, italic and underlined 
```
<center>
```
```
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
```
Here, using _blank opens the link in new tab

```
rgb(red_val,green_val,blue_val)
```
The val can be till 255

In style tag if we write for div, then each and every div will get that color change or any change that we’re doing
```
<div style="color: white; background-color: red; font-size: 20;">
```

When using padding , we pad up internally that is agar bg me red color hai and uske upar kuch likha hai, then the text get padded while the bg color is still there, that is the text gets padded internally 

While during margin, we pad up externally, that is, the red bg will get padded here too.

Adding ```<a href="/">``` in ```<a href="/"><span class="topLink">Updates</span></a>``` makes the hover or just adding cursor: pointer;

Originally the justify content is given flex start

Use of border radius in div for vsc site, where its written, "free:…"



JS

C++, Rust and Java are strictly typed whereas javascript is dynamically typed, we can change the data type that we want to be in a variable in javascript.

Diff between var, let and const
From now on only use let and const to define and not var.

Arrays in js is similar to arrays/vectors in c++

Objects in complex type are key value pairs 

Write a function that takes a user as an input and greets them with their name and age
first we will write the function such that we are giving the input 
then we will write the function such that we are asking for the input

```
function greet(profile){
    console.log("Hi " + profile.name + " your age is " + profile.age);
}

let profile = {
    name: "Pranav", 
    age: 18
}

greet(profile);
```

now we'll ask from the user
```
const prompt = require("prompt-sync")();

function greet(profile){
    console.log("Hi " + profile.name + " your age is " + profile.age);
}

let profile = {
    name: prompt("Enter your name: ") ,
    age: parseInt(prompt("Enter your age: "))
}

greet(profile);
```

```
const prompt = require("prompt-sync")();

const userInfo = [{
    name: prompt("Name 1: "),
    age: parseInt(prompt("age 1: "))
},{
    name: prompt("Name 2: "),
    age: parseInt(prompt("age 2: "))
}];

function vote(userInfo){
    for(let i = 0; i < userInfo.length; i++){
        if( userInfo[i].age >= 18){
            console.log("YESS " + userInfo[i].name + " you are eligible to vote!!");
        }else{
            console.log("NOO " + userInfo[i].name + " you can't vote yet.");
        }
    }
}


vote(userInfo);
```

Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS.
```
function getEvenNumbers(arrayOfNumbers){
    return arrayOfNumbers.filter(num => num % 2 == 0);
}
const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const evenNumbers = getEvenNumbers(arrayOfNumbers);
console.log(evenNumbers);
```






 
