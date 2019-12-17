import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()


export default function fetchApi(methodType, url, data){
const bodyContent = methodType.toLowerCase() === 'get' ? {} :  JSON.stringify(data);

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
