let age=20;

if(age>18)// if is a conditional statement which is used to check the condition
{
    console.log("You are an adult");
}
else if(age<18) // else if is used to check multiple conditions
{
    console.log("You are a child");
}
else// else is used to execute the code when the condition is false
{
    console.log("You are a teenager");
}
// torenory operators:
age>=18?console.log("You are an adult"):console.log("You are a child");

switch(age) // switch case is used to check multiple conditions
{
    case 18:
        console.log("You are 18");
        break;
    case 20:
        console.log("You are 20");
        break;
    default:
        console.log("You are not 18 or 20");
        break;
}
