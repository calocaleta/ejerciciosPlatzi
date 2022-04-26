const somethingWillHappend = () =>{
    return new Promise((resolve,reject) => {
        if (false) {
            resolve('Hey!');
        }
        else{
            reject('Whoopps!');
        }
    });
};

somethingWillHappend()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        }
        else{
            const error = new Error('Whoopps!!');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappend(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results',response);
    })
    .catch(err => {
        console.error(err);
    })