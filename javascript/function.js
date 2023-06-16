var k=2
var arr=[1,2,3,4,89,44,,35,1,34,43,0,7]
var n=arr.length
function searching(arr,k,n){

    for(let i =0;i<n;i++){
        let count=0;
        if(arr[i]==k){
            //console.log("element found in the index"+ i)
            count+1;
            
        
        }else{
            count=0
        }
if(count>0){
    console.log(i);
}
    }

}(searching(arr,k));
var mulplication=(a,b)=>console.log(a*b);
var hello = (val,d) => console.log(val+d);
hello(4,5);
mulplication(8,6);

/*function sorting(arr){


}*/
    
