 var array1;
     array1= [];

 function towerHanoi(n,s,a,d){ 
    
    if(n==1){
        
        array1.push("step")
        
        return 
        
    }
    towerHanoi(n-1,s,d,a)
    array1.push("step")
    towerHanoi(n-1,a,s,d)
    return
    
}

function  result(){
console.log(array1.length)
};