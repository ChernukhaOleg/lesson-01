//let name = prompt('меня зовут','');
//console.log (`твое имя: ${name}`);
/*
let officialNameJS = prompt('введите число', '');

if (officialNameJS > 0){
    alert(1)
}else if(officialNameJS<0){
    alert(-1)
}else if(officialNameJS == 0){
    alert(0)
}else{
    alert('это не число')
};

let login = prompt('введите логин', '');

if(login == 'admin'){
    let pass = prompt('введите пароль');
        if (pass == 'xxx'){
            alert('hy')
        }else if(pass == null){
            alert('otmena')
        }else{
            alert('ne tot parol')
        }
}else if(login == null){
    alert('otmena')
}else{
    alert('ya was ne znayu')
}
*/
/*
let i = 1;
while (i <= 4){
    alert (i);
    i++
}
*/
/*
let sum = 0;

while(true){
    let value = +prompt('введите число');
    if (!value) break;

    sum += value;
  

}
console.log(sum);
*/
/*
for(let i = 2; i<=10;i++){
    if(i % 2==0){
        console.log(i)
    }
    
}

let z = 0;

while(i<3){
    alert(`number ${z}!`);
    z++
}
*/
/*
function showmin (a, b){
    return a<b ? a : b;
}

console.log(showmin(2,5));
console.log(showmin(10,5))
console.log(showmin(25,6))
console.log(showmin(499,500))

function pow( a, b){
    let summ=a;
    for(let i = 1; i<b; i++){
        summ=summ*a;
    }
    return summ
}
console.log(pow(3, 2));
*/
/*
for(let i = 1; i<100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`NA VSE ${i}`)
    }else if(i % 5==0){
        console.log(`na 5 ${i}`)
    }else if(i % 3 ==0){
        console.log(`na 3 ${i}`)
    }
}

let user = {};
user.name = 'john';
user.surname = 'smith';
user.name = 'pete';
delete user.name;
console.log(user.name)
console.log(user.surname)

*/

/*
let salaries = {
    jpohn: 100,
    ann: 160,
    ivan: 130,
    
}


function summSalaeies(arr){
    let summ = 0;
 for (let key in arr){
  summ = summ + arr[key];

 }
 return summ
}

console.log(summSalaeies(salaries));

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
console.log(typeof (menu.width))
  
function multiplyNumeric(arr){
    for(let key in arr){
        if(typeof(arr[key])== 'number'){
            arr[key]=arr[key]*2
        } 
    }
}

  multiplyNumeric(menu);
  console.log(menu.width);
  console.log(menu.height);
  console.log(menu.title)
  

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );


  */

 let x = 5;

 if (x >= 0){
     console.log('XXXX')
 }else{
     console.log('xxx')
 };

/*
 let ss = 50;

 for(let i = 0; i<= ss; i+=5){
     console.log('aaa' + i)
     for(let z =1; z<10; z++){
         console.log('bbbb' + z)
     }

     }
 */

 //------------------------------------------
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