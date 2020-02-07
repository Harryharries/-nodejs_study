// use promise to solve the multi-callback problem
const promise = new Promise(function (resolve,reject) {

    setTimeout(function(){
        resolve('ok')
    },3000)
});

async function getName(){
    return new Promise(function (resolve,reject) {

        setTimeout(function(){
            resolve('ok')
        },1000)
    });
}

async function main(){
    let name = await getName();
    console.log(name);
}


// promise.then(function (data) {
//     console.log(data);
// }).catch(function (data) {
//     console.log('error',error);
// });