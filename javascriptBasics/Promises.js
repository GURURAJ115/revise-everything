function sum(n){
    var sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
//These are synchronous(line by line) js code
let ans =sum(5);
console.log(ans);

const fs = require("fs");
const wow = fs.readFileSync("a.txt","utf-8");
console.log(wow);
const omg = fs.readFileSync("b.txt","utf-8");
console.log(omg);

// Passing a function as an argument to another function

function sum(a,b){
    return a+b;
}
function prod(a,b){
    return a*b;
}

function result(a,b,op){
    return op(a,b);
}

let x= result(3,2,sum);
console.log(x);

const fs = require("fs");
function print(err,data){
    console.log(data);
    console.log(err);
}

const data = fs.readFile("a.txt","utf-8",print);
// console.log(data);
const data1 = fs.readFile("b.txt","utf-8",print);
console.log("hello");


console.log("hi");

function print(){           //what will execute first 
    console.log("Wow")
}
//This will be stuck in the call back queue
//Until the sync function gets exec
//because this is async 
setTimeout(print,1000);   //hi wow c 
var c=0;                    //or
for(let i=0;i<10000000000;i++){ // hi c wow?
    c=c+1;
}
console.log(c);



class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width*this.height
        return area;
    }
    paint(){
        console.log(`Painting the rectangle with color ${this.color}`);
    }
}

const rect = new Rectangle(3,45);
const area = rect.area();
rect.color = "blue"
console.log(area);
rect.paint();


const date = new Date();
console.log(date.toISOString());
console.log(date.getYear());
console.log(date.getFullYear());



const map = new Map();  //same as object
map.set('name','guru');
map.set('age',23);
console.log(map.get('name'));



//defining a promise is hard
//using a promise is easy

//Instead of writing like this 
// You can write like this.
//This leaves you in callback hell and looks ugly

setTimeout(function () {
    console.log("Work 1");
    setTimeout(function () {
        console.log("Work 2");
    }, 1000);
}, 1000);
console.log("End");


//Using promise it is way more syntactically good
function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    
    //returning object of the promise class.
}
function callback() {
    console.log("WORK");
}
setTimeoutPromisified(3000).then(callback);
setTimeoutPromisified(5000).then(callback);

let p= setTimeoutPromisified(3000).then(callback)
console.log(p);// this returns a promise which is pending


const fs = require("fs");
function readFilePromisified(path){
    return new Promise((resolve)=>
        fs.readFile(path,"utf-8",(err,data)=>{
            resolve(data);
    }));
}

function getData(data){
    console.log(data)
}

readFilePromisified("a.txt").then(getData);

async function print(){
    const data=await readFilePromisified("b.txt")
    console.log(data);
}
print();



function promisifiedSETtimeout(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    })
}
//This however gets rid of callback hell(indentation)
promisifiedSETtimeout(1000).then(()=>{
    console.log("Hi");
    return promisifiedSETtimeout(3000)
}).then(()=>{
    console.log("Hello");
    return promisifiedSETtimeout(5000)
}).then(()=>{
    console.log("How are you");
})
//This leads to promise chaining.



function setTimeOutPromisified(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    })
}
//this returns a promise
//cleaner syntax
//appears like syc functions, but under the hood it is just bunch of .then calls
async function solve(){
    await setTimeOutPromisified(1000);
    console.log("Hi")
    await setTimeOutPromisified(3000);
    console.log("Hi where")
    await setTimeOutPromisified(5000);
    console.log("Hi there")
}

solve();
console.log("after solve function")


const fs=require("fs")
function readFileAsync(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err){
                reject("file not found");
            }
            else{
                resolve(data);
            }
        })
    })
}
//reject.catch
readFileAsync("ass.txt").then((x)=>{console.log("file has been read :"+x)}).catch((e)=>{console.log(e)})