// Hell CallBack

// setTimeout(() => {
//    const product = {
//       name: 'Milk',
//       price: '4$'
//    }
//    logger(product)
//    setTimeout(() => {
//       product.name = 'Pepsi'
//       product.price = '6$'
//       logger(product)
//       setTimeout(() => {
//          product.name = 'Fanta'
//          product.price = '7$'
//          logger(product)
//          setTimeout(() => {
//             product.name = 'Coca-cola'
//             product.price = '6$'
//             logger(product)
//             setTimeout(() => {
//                product.name = 'Mirinda'
//                product.price = '8$'
//                logger(product)
//                setTimeout(() => {
//                   product.name = 'Fuse Tea'
//                   product.price = '5$'
//                   logger(product)
//                   setTimeout(() => {
//                      product.name = 'Sprite'
//                      product.price = '6$'
//                      logger(product)
//                      setTimeout(() => {
//                         product.name = 'Pepsi'
//                         product.price = '6$'
//                         logger(product)
//                      }, 1200)
//                   }, 1200)
//                }, 1200)
//             }, 1200)
//          }, 1200)
//       }, 1200)
//    }, 1200)
// }, 1500)

//Деструктуризация

// const object = {
//    key1: 'value1',
//    key2: 'value2'
// }

// const {key1, key2} = object 

//Promise

// const logger = (object) => {
//    const {name, price} = object
//    console.log(`name: ${name}\nprice: ${price}`);
// }   
// console.log('Loading...');
// // // Promice => (rejected <--- pending ---> fulfiled)


// const promise = new Promise((resolve, reject) => {
//    // throw new Error() // Ручная ошибка
//    setTimeout(() => {
//       const product = {
//          name: 'Milk',
//          price: '$4'
//       }
//       logger(product)
//       resolve(product)
//       reject() 
//    }, 1500)
// })

// promise.then((product) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          product.name = 'Ice Cream'
//          product.price = '5$'
//          logger(product)
//          resolve(product)
//       }, 1200)
//    })
// }, () => {
//    console.log('reject');
// }).then((product) => {
//    return new Promise((resolve) => {
//       setTimeout(() => {
//          product.name = 'Milk Shake'
//          product.price = '$7'
//          logger(product)
//          resolve()
//       }, 1300)
//    })
// }, () => {
//    console.log('reject 2');
// }).then(() => {
//    console.log('Ok');
// })
 
// fetch()

// fetch('data.json')
//    .then(response => response.json())
//    .then(data => console.log(data))



// API - application programing interface
// Интерфейс программного приложения

// const url = 'https://jsonplaceholder.typecode.com/todos'

// fetch(url)
//    .then(response => response.json())
//    .then(data => console.log(data))



// fetch(url)
//    .then(response => response.json())
//    .then(data => {
//       data.forEach(item => {
//          const h2 = document.createElement('h2')
//          h2.innerHTML = item.little
//          document.body.innerHTML = item.little
//       });
//    })

