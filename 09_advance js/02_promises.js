// let promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is completed!");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })





// let promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name: "Umair", email: "umair@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })




// let promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Umair", pass: "123"})
//         }
//         else{
//             reject('Error: something went wrong')
//         }
//     }, 2000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.pass
// })
// .then((pass) => {
//     console.log(pass);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))




// let promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Ansari", Pass: "321"})
//         }
//         else{
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// async function ConsumePromiseFive(){
//     try {
//         let response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// ConsumePromiseFive()





// fetching data from server using async function "try-catch"
// async function getAllUsers(){
//     try{
//         let response = await fetch('https://api.github.com/users/Umair24')
//         let data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log('error!', error);
//     }
// }
// getAllUsers()



// fetching data from server using "then-catch" function
fetch('https://api.github.com/users/Umair24')
.then((Response) => {
    return Response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
