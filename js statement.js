
var a,b,c,d,e,f,g,i;
a=6;
a+=2;
b=8;
c=a+b;
e=a-b;
f=a%b;
g=a*b
i=10.500;
d=document.getElementById('aa').innerHTML=" tong la "+c;
console.log(d);
d=document.getElementById('bb').innerHTML=" hieu la "+e;
console.log(d);
d=document.getElementById('cc').innerHTML=" phep chia la "+f;
console.log(d);
document.getElementById('dd').innerHTML=" tich la "+g;
d=document.getElementById('ee').innerHTML=" tong la "+(5+2)+"5";
console.log(i);
console.log(a**2);
console.log(10%5);
function tinhtong(a,b){
    
    return(a+b);
}
var a = parseInt(prompt("Nhập số a"));
var b = parseInt(prompt("Nhập số b"));
var tong =tinhtong(a,b);
document.write("tong 2 so "+a+" +" +b+"la "+tong);
