let n1=0;
let n2=1;
let c;

function onclickjs(){
    n=document.getElementById("number").value;
    for(let i=1;i<=n;i++)
    {   if(n1==0){
          
           document.write(<i class="fa-solid fa-pen"></i>+n1+"\t");
           document.write(<i class="fa-solid fa-pen"></i>+n2+"\t");
         
        }
        c=n1+n2;
        n1=n2;
        n2=c;
       
        document.write(<i class="fa-solid fa-pen"></i>+c+"\t");


    }
}