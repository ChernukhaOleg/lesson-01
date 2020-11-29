
 let x = 5;

 if (x >= 0){
     console.log('XXXX')
 }else{
     console.log('xxx')
 };
//-------------------------------------------------

let count = 0;
let sum = 0;
 for(let i = 0; i<100; i++){
     if(i%5===0){
         count +=1;
         sum +=i;
         
     }
     if(count===10)break;
 }
 console.log(sum);

 let numbers = [ 254, 115, 78, 25, 91, 45, 37 ];

 //-------------------------------------------

 for(let i =0; i<numbers.length; i++){
     if(numbers[i]>50){
        console.log(numbers[i])
     }
     
 }
