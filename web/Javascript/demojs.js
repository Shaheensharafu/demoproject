// arguments or function parameters
function greetings(msg, date) {
    alert("hello all  "+msg+"date"+date)

}
// greetings("welcome", "4 - 01 - 2022")
// greetings()
function add(a,b){
    // local scoped
    let sum=a+b
    alert("sum="+sum);
    return sum
}
let n=add(2,3)
alert("result",n)
add(22,34)
let name=prompt("enter your name")

let result=add(2,3)
console.log(result);