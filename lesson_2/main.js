//  Основы асинхронности 

// Синхронный код

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


// Асинхроннный код

// setTimeout(() => {
//    console.log(1);
// }, 1000)

// console.log(2);

// const interval = setInterval(() => {
//    console.log('ok');
   
// }, 1000)

// setTimeout(() => {
//    clearInterval(interval)
// }, 5000)



// let num = 0
// const h2 = document.querySelector('h2')
// setInterval(() => {
//    num++
//    h2.innerHTML = num
// }, 1000)


// const button = document.querySelector('button')

// button.onclick = () => {
//    setTimeout(() => {
//       console.log(1);
//    }, 800)
// }
// console.log(2);


//Event Loop - Цикл событий 

// JS =>  V8 (движок chrome) => Event Loop => Вызов


const characters = [
   {
      name: "John Wick",
      age: 42
   },
   {
      name: "Luffy",
      age: 16
   },
   {
      name: "Pudge",
      age: 30
   },
   {
      name: "Zoro (one piese)",
      age: 16
   },
   {
      name: "Piter Parker",
      age: 17
   },
   {
      name: "Tony Stark",
      age: 30
   },
   {
      name: "Bokuta",
      age: 18
   },
   {
      name: "Geralt из Ривии",
      age: 87
   },
   {
      name: "Terror Blade",
      age: 120
   },
   {
      name: "Blair Waldorf",
      age: 19
   },
]

const wrapper = document.querySelector('.wrapper')
const userPhoto = ''

characters.forEach((person) => {
   const personBlock = document.createElement('div')
   personBlock.setAttribute('class', 'person_block')

   personBlock.innerHTML = `
      <div class = "person_photo">
         <img scr="${person.photo || userPhoto}" alt="${person.name}"/>
      </div>
      <h2>${person.name}</h2>
      <p>age: ${person.age}</p>
   `

   wrapper.append(person)
})
