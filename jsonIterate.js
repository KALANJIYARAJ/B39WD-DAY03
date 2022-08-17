/*Looping Using JSON:

JSON stands for JavaScript Object Notation. 
It’s a light format for storing and transferring data from one place to another. 
So in looping, it is one of the most commonly used techniques for transporting data that is the array format or in attribute values. */

const json = '{"one":["11"], "two":["21","22"],"three":["31","32","33"],"four":["41","42","43","44"]}';
const obj = JSON.parse(json);


console.log("For Loop Example:");
//For Loop
for(var i=0; i<obj.one.length;i++)
{
    console.log(obj.one[i]);
}



// For ... in Loop
console.log("For...In Loop Example");
for(var i in obj.two)
{
    console.log(obj.two[i]); 
}



// For ... of Loop:
console.log("For Of Loop Example");
for(var i of obj.three)
{
    console.log(i); 
}



//For each Loop:
console.log("For Each Loop Example:");
obj.four.forEach(myFunction);

function myFunction(num)
{
console.log(num);
}