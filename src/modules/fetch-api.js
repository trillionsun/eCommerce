import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()

export const APIs={
   getApi,
    fetchApi
}


function getApi(methodType, url){
    return fetch(url, {
        method: methodType,
        headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'X-Requested-With' : 'XMLHttpRequest'
        },
        credentials: 'same-origin'
    })
}


  function fetchApi(methodType, url, data){
const bodyContent = methodType.toLowerCase() === 'get' ? null:  JSON.stringify(data);
return fetch(url, {
    method: methodType,
    headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'X-Requested-With' : 'XMLHttpRequest'
    },
    credentials: 'same-origin',
    body:  bodyContent
})

}
// .then(response => response.json())

