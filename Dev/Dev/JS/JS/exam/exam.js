const n=parseInt(prompt("Enter the length"));
let n1=0,n2=1,a;
console.log("Fibonacci Series:")
for( let i=1;i<=n;i++){
    console.log(n1);
    a=n1+n2;
    n1=n2;
    n2=a;
}