
let num = prompt('number for square');

function square(n){
  return n*n;
}

alert(square(num));
let s=[];
let array=[1,2,3,4,5];
for(let i=0;i<array.length;i++){
    s.push(square(array[i]));
}
console.log(s);
alert('look to console');