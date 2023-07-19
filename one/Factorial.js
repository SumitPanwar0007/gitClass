let n=5;

function facto( n){
    if(n==0) return 1

    return facto(n-1)*n;
}
const result= facto(n);
console.log(result);