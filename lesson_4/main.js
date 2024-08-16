// JSON - javascript object notation 

// const userObject = {
//    name: 'Saltanat',
//    age: 17
// }

// const jsonUser = JSON.stringify(userObject)
// console.log(jsonUser);


// const newUserObject = JSON.parse(jsonUser)

// XML - eXtensible Markup Language
// AJAX - Asyncgronous JavaScript and XML


// HTTP- HyperText Transfer Protocol
// HTTPS- HyperText Transfer Protocol Secure

// XHR - XMLHttpRequest

const button = document.querySelector('.btn')

button.onclick = () => {
   const request = new XMLHttpRequest() // 1.Создание запроса
   request.open('GET', 'data.json') // 2. Указывание метода запроса и пути  
   request.setRequestHeader('Сontent-type', 'application/json') // 3.Указывание заголовка
   request.send() // 4.Отправка запроса

   request.onload = () => {
      const data = JSON.parse(request.response)
      document.querySelector('.name').innerHTML = data.name
      document.querySelector('.age').innerHTML = data.age
   }
} 