alert('give me 5 number');

let num=[];
num[0]=prompt('first num');
num[1]=prompt('2th num');
num[2]=prompt('3th num');
num[3]=prompt('4th num');
num[4]=prompt('5th num');


function max_min(){
    let min=100 ,max=0;
    for(let i=0;i<num.length;i++){
        if(min >= num[i]) min=num[i];
        if(max <= num[i]) max=num[i];
        console.log(min);
    }
    return [min,max]
}
console.log(max_min());
alert('miximum ='+max_min()[1] + ' \n minimum = '+max_min()[0] );