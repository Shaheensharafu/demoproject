// let s=new String("javascript")
// let x=s.valueOf()
// console.log(typeof x,x);
// console.log(s,typeof s);
// let i=new Number(123)
// let i1=i.valueOf()
// console.log(i1,typeof i1);
// let s1="  javascript interpreted"
// console.log(s1.length);
// s2=s1.trim()
// console.log(s2.length);
let word="hello world"
for(let letter of word){
    console.log(letter); //it will print the letters in the word by using "of"
}
for(let index in word){
    console.log(index); //it will print the index in the word by usinf "in"
}

let sub_str=word.substring(3,8)
console.log(sub_str);
console.log(word.charAt(6)); // returning the letter on index 6
console.log(word[8]); //returning the letter on index 8
console.log(word.indexOf("l"));//return the index of l
console.log(word.lastIndexOf("l")); //return the index of last l
console.log(word.indexOf("l",3));
sub_str=word.slice(2,8)
console.log();


//write a string and get word count
function getWordcount(str){

}
