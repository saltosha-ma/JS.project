// PHONE BLOCK
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document .querySelector('#phone_result')
const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'OK'        
        phoneSpan.style.color = 'green'
    }else {        
      phoneSpan.innerHTML = 'NOT OK'
      phoneSpan.style.color = 'red'    
      
   }
}


// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

let currentTab = 0

const hideTabContent = () => {    
   tabContentBlocks.forEach((item) => {
      item.style.display = 'none'     
   })
   tabs.forEach((item) => {        
      item.classList.remove('tab_content_item_active')
   })
}

const showTabContent = (index = 0) => {
   tabContentBlocks[index].style.display = 'block'    
   tabs[index].classList.add('tab_content_item_active')
}

const switchTab = () => {
   hideTabContent()
   currentTab = (currentTab + 1) % tabs.length
   showTabContent(currentTab)
}

hideTabContent()
showTabContent()
setInterval(switchTab, 3000)


tabParent.onclick = (event) => {     
   if (event.target.classList.contains('tab_content_item')){ 
      tabs.forEach((item, index) => {             
         if (event.target === item){                   
            hideTabContent()
            showTabContent(index)
            currentTab = index 
            showTabContent(currentTab)    
         } 
      });     
   } 
};


// CONVERTER

const somInput = document.getElementById('som')
const usdInput = document.getElementById('usd')
const eurInput = document.getElementById('eur')


const converter = (element, targetElement1, targetElement2) => { 
   element.oninput = () => { 
      const request = new XMLHttpRequest()
      request.open('GET', '../data/converter.json') 
      request.setRequestHeader('Content-type', 'application/json')     
      request.send()

      request.onload = () => { 
         const data = JSON.parse(request.response)

         if (element.id === 'som') {
            targetElement1.value = (element.value / data.usd).toFixed(2)
            targetElement2.value = (element.value / data.eur).toFixed(2)
         } else if (element.id === 'usd') {
            targetElement1.value = (element.value * data.usd).toFixed(2)
            targetElement2.value = (element.value * data.usd / data.eur).toFixed(2)
         } else if (element.id === 'eur') {
            targetElement1.value = (element.value * data.eur).toFixed(2)
            targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
         }

         if (element.value === '') {
            targetElement1.value = ''
            targetElement2.value = ''
         }
      }
   }
}

converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)