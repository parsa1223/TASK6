let unit=['zero','one','two','three',
'four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen'
];
let tens=['','','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninty'];
function toEN(n){
if(n<20){
return unit[n];
}else if(n<100){
if(n%10==0){
return tens[n/10]
}else{
    return tens[(n-(n%10))/10]+' '+unit[n%10]
}
}else if(n<1000){
if(n%100==0){
return unit[n/100]+"hundred"
}else{
    return unit[(n-(n%100))/100]+"hundred"+' '+toEN(n%100)
}
}else{
return 'کمتر از هزار'
}
};