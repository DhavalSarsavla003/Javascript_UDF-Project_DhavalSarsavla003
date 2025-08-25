//1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning.

function Greeting(message){
    if(message == undefined)
    {
        document.write("Ans1. Without Argument Good Morning..!!");
    }else{
        document.write("<br/>Ans1. " + message);
    }
}
Greeting();
Greeting("With Argument => Hello..!! ");

//2. Write a JAVASCRIPT Program to find Circle area (area = pi*r*r) using return type with argument function
function Circle(r){
    let pi=3.14;
    return pi*r*r;
}

let r=5;
document.write("<br/> Ans2. The Area Of Circle Is => "+ Circle(r));   


//3. Write a JAVASCRIPT Program to find Triangle area ( area = (l*h)/2 ) using return type with argument function.

let l=5,h=5;

function Triangle(l,h){
    return (l*h)/2;
}
document.write("<br/>Ans3.  The Area Of Triangle Is => " + Triangle(l,h));

//4.  Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

function Rectangle(l,h)
{
    return l*h;
}
document.write("<br/>Ans4. The Area Of Rectangle Is => " + Rectangle(l,h));

//5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function.

let a=5,b=6,c=7;

let Formula_1 = (a,b,c) =>{
    return ((b*b)*(4*a*c))/(2*a);
}
document.write("<br/>Ans5. Formula-1 ((b*b)(4*a*c))/(2*a) => " + Formula_1(a,b,c));

//6.  Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function

let Formula_2 = (a,b) => {
    return (a*a) + (2*a*b) + (b*b);
}
document.write("<br/>Ans6. Formula-2 (a*a) + (2*a*b) + (b*b) => " + Formula_2(a,b));

//7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function

let f=89;
function Fahrenheit_To_Celsius(f)
{
    return (f-32/1.8);
}

document.write("<br/>Ans7. Fahrenheit to Celsius Is => " +Fahrenheit_To_Celsius(f));

//8.  Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32 ) using return type with argument function

let celsius=37;

function Celsius_to_Fahrenheit(celsius){
    return (celsius * 1.8)+32;
}   
document.write("<br/>Ans8. Celsius to Fahrenheit Is => " +Celsius_to_Fahrenheit(celsius));

//9.  Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.
let num=10;
function Odd_Even(){
    if(num%2==0)
    {
        document.write("<br/>Ans9. The Number " +num+ " Is Even..!! ");
    }else{
        document.write("<br/>Ans9. The Number " +num+ " Is Odd..!! ");
    }
}
Odd_Even(num);

//10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type

function Swaping(a,b)
{   
    document.write("<br/> --- Before Swaping A => " + a +" & " +" B => " + b + " ---");
    a=a+b;
    b=a-b;
    a=a-b;
    document.write("<br/>Ans10. After Swaping  A => " + a +" & " + " B => " + b)
}
Swaping(a,b);