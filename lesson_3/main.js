// DOM - document object model
// DOM => DOCUMENT => HTML

// query - запрос
// select - выбрать
// all - все

// const button = document.querySelector('#btn')
// const button = document.querySelector('.btn')
// const button = document.querySelector('button')

// buttons[0].classList.add('red')
// buttons[0].classList.remove('red')

// const wrapper = document.querySelector('.wrapper')

// const buttons = document.querySelectorAll('button')

// buttons.forEach((button) => {
//    button.onclick = (event) => {
//       if (event.target.classList.contains('red')){
//          event.target.classList.remove('red')
//       }else {
//          event.target.classList.add('red')
//       }
//    }
// })


// Делигирование событий

const wrapper = document.querySelector('.wrapper')


wrapper.onclick = (event) => {
   if (event.target.tagName.toLowerCase() === 'button'){
      if (event.target.classList.contains('red')){
          event.target.classList.remove('red')
      }else {
         event.target.classList.add('red')
      }
   }
}

// const newButton = document.createElement('button')
// wrapper.append(newButton)