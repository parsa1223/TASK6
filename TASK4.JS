let a=0;
let b=0;
let o=0;
let magmoo10=0;
function isbn13(exe){
const firstStep=exe.split("");
// console.log(exe)
if(exe.length==10){
 magmoo10=(firstStep[0]*10)+(firstStep[1]*9)+(firstStep[2]*8)+(firstStep[3]*7)+(firstStep[4]*6)+(firstStep[5]*5)+(firstStep[6]*4)+(firstStep[7]*3)+(firstStep[8]*2)+(firstStep[9]*1);
// console.log(magmoo10)
}else if(exe.length==13){
for(let i=0;i<=6;i++){
r=Number(firstStep[2*i]);
a=r+a
};
for(let u=0;u<6;u++){
e=Number(firstStep[2*u+1]);
b=e*3+b
};
o=a+b;
// console.log(o)
}else {
    console.log('error')
}



 if(o%10!=0||magmoo10%11!=0){
   console.log("invalid");
}else if(magmoo10%11==0 && o==0){
    
    console.log(978+firstStep.join(''))
}else{
return "valid"}





}