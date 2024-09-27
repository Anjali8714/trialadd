 str="Hello world!";
 str1=" mrng...";
 txt=5;
console.log(str); //Hello world!
console.log(str[4]);//o
console.log(str.length);//12
console.log("Good Morning, "+ str); //Good Morning,Hello World
console.log(str.includes("world"));//true
console.log(str.includes('you'));//false
console.log(str.at(6));//w
console.log(str.at(-4));//r
console.log(str.slice(5,11));// world
console.log(str.slice(7));//orld!
console.log(str.slice(-10,-4));//oll wo
console.log(str.slice(-4,-10));//return empty
console.log(str.substring(3,7));//lo w
console.log(str.substring(4));//o world!
console.log(str.substring(-10,-4));//" "
console.log(str.substring(-4,-10));//" "
console.log(str.substring(10,4));
console.log(str.substr(3,7));
console.log(str.substr(-4,-10));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.concat(" " + str1));
console.log(str +" " + str1);
console.log(str.trim());
console.log(str1.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
// console.log(a=txt.padStart(4,"*"));
// console.log(a=txt.padEnd(6,"0"));
console.log(str.repeat(4));//the string return specified times 
//console.log(str.repeat(-1));//range error
console.log(str.repeat(0));//empy string
console.log(str.replace("world","javascript"));//Hello javascript!   Hello world!   Hello world!   
console.log(str.replace(/world/g,"javascript"));//Hello javascript!   Hello javascript!   Hello javascript!   
console.log(str.replace("WORLD","js"));//same str return
console.log(str.replace(/WORLD/i,"js"));//Hello js! Hello world!
console.log(str.replaceAll("world","javascript"));
console.log(str.replaceAll("WORLD","js"));
//console.log(str.replaceAll(/WORLD/i,"js"));
console.log(str.split(""));
console.log(str.split(" "));


let a=10;//declaration
a=15//redeclaration
console.log(a);
var b=45
console.log(b);
var b=34
console.log(b);
b=78
console.log(b);
var c=b+8
console.log(c);
const g=15
console.log(g);
s="hyhr"
console.log(typeof(s));
a=[1,2,3,4,5]
console.log(typeof(a));
d=function s(s){
    return a 
}
console.log(typeof(d));
r={1:"njdn",3:"jdndj"}
console.log(typeof(r));
a=10+"10";
console.log(a);
a="false"+"true"
console.log(a);
b=false+true
console.log(b);
f=true
console.log(typeof(f));
e='1'+"1"
console.log(e);
console.log(typeof(e));
t="1"-"1"
console.log(t);
console.log(typeof(t));

// function outerFunction() {
//     let outerVar = "Outer";

//     function innerFunction() {
//         let innerVar = "Inner";
//         console.log(outerVar);  // Accesses outer lexical environment
//     }

//     innerFunction();
// }

// outerFunction();

let outerVar = "I am in the outer scope";

function outerFunction() {
    let innerVar = "I am in the inner scope";

    function innerFunction() {
        console.log(outerVar);  // Can access outer scope variable
        console.log(innerVar);  // Can access inner scope variable
    }

    innerFunction();
}

outerFunction();











