function chocolate(nSmall,nBig,order){
const a=2;
const b=5;
const bishVazn=Math.min(nBig,Math.floor(order/b))
const vaznAdy=order-(bishVazn*b);
if(vaznAdy<=(nSmall*a)){
    return nSmall;
}else{
    return -1;
}
}