
let num=5;

function fibo(num){
    if(num<2) return num
    else{
        return fibo(num-1)+ fibo(num-2)
    }
}

for(let i=0;i<num;i++){
    console.log(fibo(i));
}