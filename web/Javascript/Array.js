let arr=[]
console.log(arr,typeof arr);
let arr1=new Array()
console.log(arr1,typeof arr1);
let names=["messi","ronaldo","neymar"]
console.log(names);
console.table(names);
console.log(names.length);
for(let name of names){
    console.log(name);
}
for(let index in names){
    console.log(index);
    console.log(names[index]); //prints names of thier index
}
names.push("ronaldo")
console.log(names);
let d=names.push("ronaldo")//to add element in rightend use push
console.log(d);
names.unshift("messi")//to add elebent in begning use unshift
console.log(names);
let s=names.unshift("messi")
console.log(s);
names.shift()//used to remove the element in the left side
console.log(names);
let names_new=names.concat(["aaa","bbb","ccc","ddd"])//concat is used for merging of two arrays
console.log(names_new);
names_new.splice(3,3)//splice is used to remove or add element from specific positions
console.log(names_new);
names_new.splice(4,2,"yyy","zzz")
console.log(names_new);
names_new[3]="shane" //to add on specific index
console.log(names_new);
console.log(names_new.includes("shane"));//to check that specific element present in array or not
names_new.sort()
console.log(names_new);
names_new.reverse()
console.log(names_new);
let array=["hi","hey","hoi","bei"]
let j=array.join("=")//used to join any symbols
console.log(j);