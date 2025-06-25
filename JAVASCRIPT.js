//frist javascript program using console.log
console.log("hello world");
console.log("welcome to react");
// javascript program using a variable:
//method-1:
num=3//declaring a variable as num
console.log(num+2);
//method-2:
$num=2+2
console.log($num);
//method-3:
console.log(2+6);
//javascript program using let method:
//method-1:
let num1=100//let is keyword but using let we cannot change variable by using let  we can change values
console.log(num1);
//method-2:
let num2=200
console.log(num2+12);
//method-3:
let username="megha shyam"
console.log(username);
//method-4:
let user_name="girish"
console.log(user_name);
//method-5:
let radius=5
let pi=3.14
let area
area=pi*radius*radius
console.log(area);
//method-6:
let $radius_number=2
let $pi_number=4
let $area_number
$area_number=$radius_number*$radius_number*$pi_number
console.log($area_number);
//javascript program using constant
//method-1:
let radius1=18
const $pi=4//by using const we cannot change value  and  we cannot use variable anywhere that we have declared in the program
let area1
area1=radius1*radius1*pi
console.log(area1);
//method-2:
let length = 0.1
let breath = 0.2
const area_triangle = 1/2*length*breath
console.log(area_triangle);
//javascript programs using datatypes:
//number:
//method-1:
let num0=123456789
console.log(num0*2);
//method-2:
let $num1=7416785615
console.log(typeof $num1);//here typeof is an operator that defines what type that you declare a variable
//method-3:
const num3=2468101214161820
console.log(num3+2);
//method-4:
const $num4=1234
console.log($num4-3);
//method-5:
const Num_number=3691215
console.log(Num_number%4);
//hexa decimal:
//method-1:
let hexa=0xff
console.log(hexa);
//method-2:
const $hexa_decimal=0xff
console.log(typeof $hexa_decimal);
//exponential:
//method-1:
let exp=1.5e12
console.log(exp);
//method-2:
let $exp1=5/0
console.log(Number.MAX_VALUE+10);
//method-4:
const  exponential=-5/0
console.log(Number.MAX_VALUE*10);
//method-5:
const $exponential_value=105050505005051n
console.log($exponential_value+2n);
//string:
//method-1:
let user1="girish"
console.log(typeof user1);
//method-2:
const $user_name="megha shyam"
console.log($user_name);
//method-3:
let msg="lokesh sir"
console.log(msg);
//method-4:
const $firstname="banu"
const $lastnaame="prakash"
const $user=$firstname+$lastnaame
console.log($user);
//method-5:
const employee="sai venkata"
const $employee="pranush"
const myfriend=employee+""+$employee
console.log(myfriend);
//method-6:
const $myfriend="soulanki\"teja\""
console.log($myfriend);
//method-7:
const my_friend="saif\nali khan"
console.log(my_friend);
//method-8:
const $my_friend="shaik\tkhadeer"
console.log($my_friend);
//method-9:
const $employee_name="rohith\bsharma"
console.log($employee_name);
//Boolean:
//method-1:
const my_dear_friend=5>6
console.log(my_dear_friend);
//method-2:
const $my_dear_friend=5<6
console.log($my_dear_friend);
//Null:
//method-1:
const dosth=null
console.log(dosth);
//method-2:
const $dosth=null
console.log(typeof $dosth);
//Undefined:
//method-1:
let prayi_dosth// by using const we cann't use undefined  datatype and we cann't declare a variable but by using let we can use undefined datatype and we can declare a variable
console.log(prayi_dosth);
//method-2:
let $prayi_dosth
console.log($prayi_dosth);
//javascript program using typeconversion:
//converting number to string:
//method-1:
let employee_id=6
console.log(employee_id);
console.log(employee_id,typeof employee_id);
//method-2:
const $employee_id="6"
console.log($employee_id,typeof $employee_id);
//converting string to number:
//method-1:
let adhar="123"
console.log(adhar)
console.log(adhar, typeof adhar);
//method-2:
let x
console.log(x,typeof x);
//method-3:
x=8
console.log(x,typeof x);
//method-4:
x=x+""
console.log(x,typeof x);
//method-5:
x=x-2
console.log(x,typeof x);
//boolean:
//method-1:
x=!x
console.log(x,typeof x);
//method-2:
console.log(Boolean(+7));
//method-3:
console.log(Boolean(-7));
//method-4:
console.log(Boolean(0));//flase , because all the positive and numbers are true except 0
//method-5:
console.log(Boolean(null));//flase , bacause null is a flase value
let parseint=('123 navin')
console.log(parseint);//first start with number only
//Arthematic operator in javascript:
//method-1:
let num4=4
let num5=2
let result=num4+num5
console.log(result);
//method-2:
let num6=5
num6=num6+2
console.log(num6);
//method-3:
let num7=5
num7=num7-3
//method-4:
let num8=4
num8++
console.log(num7);
//method-5:
let num9=5
num9--
console.log(num9);
//method-6:
let num10=6
let y=num10++
console.log(y,num10);
//method-7:
let num11=7
let z=num11--
console.log(z,num11);
//method-8:
let num12=8
let a=++num12
console.log(a,num12);
//method-9:
let num13=9
let b=--num13
console.log(b,num13);
//method-10:
let num14=10
let result1=num14*num14*num14
console.log(result1);
//method-11:
let num15=11
let result2=4**4
console.log(result2);
//Relational operator in javascript:
//method-1:
console.log(5>6);
//method-2:
console.log(7>6);
//method-3:
let data=7>6
console.log(data);
//method-4:
let data1=7<6
console.log(data1);
//method-5:
let data2=6<=6
console.log(data2);
//method-6:
let x1=6
let y1=6
let data3=x1>=y1
console.log(data3);
//method-7:
let x2="pen"
let y2="book"
let data4=x2>y1
console.log(data4);
//method-8:
let x3="pen"
let y3="pencil"
let data5=x3>y3
console.log(data5);
//method-9:
let x4="2"
let y4=3
let data6=x4>y4
console.log(data6);
//method-10:
let x5=3
let y5=3
let data7=x5==y5
console.log(data7);
//method-11:
let x6="3"
let y6=3
let data8=x6==y6
console.log(data8);
//method-12:
let x7=3
let y7=3
let data9=x7===y7
console.log(data9);
//method-13:
let x8="3"
let y8=3
let data10=x8===y8
console.log(data10);
//Logical operator in javascript
//method-1:
let x9=7,y9=8,z1=9
let result3=x9>y9
console.log(result3);
//method-2:
let result4=x9<y9
console.log(result4);
//method-3:
let result6=x9<y9&&x9<z1
console.log(result6);
//method-4:
let result7=x9<y9||x9<z1
console.log(result7);
//method-5:
let x10=7,y10=2,z2=5
let result8=x10<y10||x10<z2
let n=!result8
console.log(result8,n);
//Conditional statements in javascript:
//If-else:
//method-1:
let num16=4;
let num17=6;
let result9=num16>num17
if(result9)
    console.log("num16 is greater");
else
console.log("num17 is greater");
//method-2:
let num18=4;
let num19=3;
let result10=num18<num19
if(result10)
    console.log("num19 is greater");
else
console.log("num18 is greater");
//method-3:
let num20=6;
let num21=4;
if(num20>num21)
    console.log("num20 is greater");
else
console.log("num21 is greater");
//If-else if:
//method-1:
let num22=6;
let num23=4;
let num24=7;
if(num22>num23&&num23>num24){
    console.log("num22 is greatest");
}
else if (num24<num23 && num23<num22){
    console.log("num24 is greater");
}
else
console.log("num23 is greast")
//method-2:
let num25=4;
let num26=6;
if (num25%2==0 && num26%2==0)
    console.log(num25,"and",num26,"are even numbers");
else if (num25%1==0 && num26%1==0)
    console.log(num25,"and",num26,"are odd numbers");
else
console.log(num25,"and",num26,"are prime numbers");
//Ternary operator:
//Even/odd:
let num27=8;
let result20;
result20=num27%2===0?"even":"odd"//?: is to declare a ternary operator 
console.log(result20)
//Switch case statement:
let day="monday";
switch(day){
    case 'monday':
        console.log("today is monday class timings 9:00 am to 10:00pm");
        break
    case 'tuesday':
        console.log("today is tuesday class timings 10:00 am to 11:00pm");
        break
    case 'wednusday':
        console.log("today is wednusday class timings 11:00 am to 12:00pm");
        break
    case 'thursday':
        console.log("today is thursday class timings 12:00 am to 1:00pm");
        break
    case 'friday':
        console.log("today is friday class timings 1:00 am to 2:00pm");
        break
    case 'saturday':
        console.log("today is saturday class timings 2:00 am to 3:00pm");
        break
    case 'sunday':
        console.log("today is sunday class fest day");
        break
    default:
        console.log("today is holiday");
}
console.log("you got your day")
//Template literal:
let num28=7
let num29=4
let result21=num28+num29
//method-1:
console.log("the addition of"+num28+"and"+num29+"is"+result21)
//method-2:
console.log(`the addition of ${num28}and ${num29} is ${result21}`)
// //Loops:
// //While loop:
// //method-1:
// let i=1;
// while(i<=5)
// {
//     console.log("hi");
//     i++
// }
// //method-2:
// let i1=5;
// while(i>=0)
// {
//     console.log("hi",i1);
// }
// //Do-while loop:
// //method-1:
// let i2=10;
// do
// {
//     console.log("hi",i2);
// }while(i<=5)
// //method-2:
// let i3=20
// do{
//     console,log("hi",i3);
// }while(i<=10)
// //For loop
// for(let i4=1;i4<=5;i4++)
// {
//     console.log("hi",i4);
// }
// //Nested loop:
// for(let i5=1;i<=5;i++)
// {
//     console.log("hi",i5)
//     for(let j=1;j<=5;j++)
//         console.log("hello",j)
// }
//Objects in javascript:
//method-1:
let alien ={}//object
console.log(alien)
let alien1={
    name:'R.Megha Shyam',//declaring properties in alien1 object
    technology:'Java script',
}
console.log(alien1);
alien1=
{
    work_experience:4
};
console.log(alien1['work_experience']);
//method-2:
let input='name'
let alien2={
    name:'R.Vani',
    technology:'Python',
    work_experience:3
}
console.log(alien2[input])