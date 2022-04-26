const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));

/*
fetchData(API,function (error1, data1) {
    if(error1) return console.error(error1);

    fetchData(API + data1.results[0].id,function (error2, data2) {
        if(error2) return console.error(error2);
    
        fetchData(data2.origin.url,function (error3, data3) {
            if(error3) return console.error(error3);
        
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            
        });
        
    });
   
});
*/