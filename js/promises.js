"use strict";

// // Callback version
// function http(url,method, successCallback, errorHandler){
//     // Timer simulates a delayed request from a server
//     setTimeout(function(){
//         let data = 'this is the data';
//         if (data) {
//             successCallback(data);
//         } else {
//             errorHandler('No data');
//         }
//     }, 1500);
// }

// http('https://google.com', 'GET', 
//     function(data){
//         console.log(data);
// }, function(err){
//         console.log(err);
// });


// Promises version

function http(url,method){
    let promise = new Promise(function(resolve,reject){

        setTimeout(function(){
            let data = 'data present';
            if (data) {
                resolve(data);
            } else {
                reject('No data');
            }
        }, 1500);
    });

    return promise;
}
http('https://www.google.com', 'GET')
    //on success
    .then( function(data){
        return data.toUpperCase();
    })
    .then( function(dataModified){
        console.log(dataModified);
        return dataModified;
    })
    // on faliure
    .catch(function(err){
        console.log(err);
    });