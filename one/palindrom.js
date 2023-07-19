let str='srtrm'

let i=0,j=str.length-1,count=0;

while(i<j){
    if(str[i]==str[j])
    {
        i++;
        j--;
    }
    else{
        count++;
    }
   

}
if(count==0){
    console.log("yes it is a Palindrom");
}
else{
    console.log("Not a Palindrom");
}