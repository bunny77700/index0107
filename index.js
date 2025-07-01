// console.log("Hello, World!");
// function sayHello() {
//   console.log("Hello from sayHello function!");
// }   
// sayHello();
// console.log("This is a simple JavaScript program.");

// console.log("two");
// setTimeout(() => {
//   console.log("hello World");
// },5000);
// console.log("three");
// console.log("four");

// function sum(a, b) {
//   console.log( a + b);
// }
// function calculator(a,b,ds){
//     ds(a,b);
// }
// calculator(5, 10, sum);

// calculator(5, 10, (a, b) => {
//   console.log(a + b);
// });
// calculator(5,8,(a,b)=>{
//     console.log(a*b);
// });
// console.log("one");
// console.log("two");
// const hello=() => {
//   console.log("Hello, World!");
// }   
// setTimeout(hello, 5000);
// console.log("three");
// console.log("four");
// for (let i=0;i<5;i++){
//     let str="";
//     for(let j = 0; j < 5; j++)
//     {
//         str +=j;
    
//     }
//     console.log(i,str);
// }
function getData(dataid){
    setTimeout(()=>{
        console.log("Fetching data for id:", dataid);

    },5000);
}
getData(1);
getData(2);     
getData(3);
function getData(dataid,getnextdata){
    setTimeout(()=>{
        console.log("Fetching data for id:", dataid);
        if (getnextdata) {
            getnextdata();
        }       
    },5000);
}
// call backhell nested call back stacked below one another forming a pyramid structure 
getData(1,() =>{
    console.log("getting data 2 .................")
    getData(2,()=>{
        console.log("getting data 3 .................")
       getData(3);
    });
});
// to over come this we will use promises 
// promise for eventually completion of an operation 
// promise is an object that respresents the eventual completiion or failure of an asynchronous operation and its resulting value
//Its allows you to write asynchronous code in a more manageable way, avoiding callback hell.



// promise syntax
//const myPromise = new Promise ((resolve , reject)=>{..})
//resolve is called When the operation is successful
//reject is called when asynchronous operation fails 
//

 const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const success = false;
        if (success){
            resolve("Data fetched sucessfully");

        }else{
            reject("Error fetching data");
        }
    },2000);
 });
 myPromise
 .then((data) =>{
    console.log("promise resolved with data:",data);
 })
 .catch((error) =>{
    console.error("promise rejected with error:",error);

 });

 let promise = new Promise((resolve,reject) =>{
    console.log("iam a promise");
    if(1<0){
        resolve(123);
    }
    reject("something went wrong");
    }
 );
  //promise states
  //1. pending - initial state, neither fulfilled nor rejected
  //2. fulfilled - operation completed successfully 
    //3. rejected - operation failed

  function getData(dataid){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Fetching data for id:",dataid);
            resolve("success");
        },5000);
        });
    }
    let result =getData(123);
    result
    getData(101)
    .then(result =>{
        console.log("First fetch:",result);
        return getData(102);

    })
    .then(result =>{
        console.log("Second fetch:",result);
        return getData(103);

    });
