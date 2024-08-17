const people = document.querySelector('#people')

const persons = new XMLHttpRequest()
persons.open('GET', 'persons.json')
persons.setRequestHeader('Content-type', 'application/json')
persons.send()

persons.onload = () => {
   const data =  JSON.parse(persons.response)
   data.forEach(person => {
      const card =document.createElement('div')
      card.classList.add('cards')
      card.innerHTML = `
      <h2>${person.name}</h2>
      <img src= '${person.image}' class="person__photo">
      <span>${person.old}<span>`;
      people.appendChild(card)
   });

}

const button = document.querySelector('#info')

button.onclick = () => {
   const request = new XMLHttpRequest()
   request.open('GET', 'any.json')
   request.setRequestHeader('Content-type', 'application/json')
   request.send()

   request.onload = () => {
      const data = JSON.parse(request.response)
      data.forEach(info => {
         console.log(info);
         
      })
   }
}