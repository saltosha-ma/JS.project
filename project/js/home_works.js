// GMAIL BLOCK
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');
const regExp =   /[\w._%+-]+@gmail\.com/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {        
      gmailSpan.innerHTML = 'OK';
      gmailSpan.style.color = 'green';    
   } else {
      gmailSpan.innerHTML = 'NOT OK';        
      gmailSpan.style.color = 'red';
    }};


// MOVE BLOCK
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
let positionX = 0
let positionY = 0
const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight
const moveBlock = () => {    
   if (positionX < offsetWidth && positionY === 0){
        positionX++        
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)    
      }else if(positionX >= offsetWidth && positionY < offsetHeight){
        positionY++        
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)    
      }else if(positionY >= offsetHeight && positionX > 0){
        positionX--        
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)    
      }else if(positionX === 0 && positionY > 0) {
        positionY--        
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)    }
}
moveBlock()
// TIME BLOCK
let counter = 0
let intervalId
const secondsElement = document.getElementById('seconds');const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');const resetButton = document.getElementById('reset');
    function updateCounter() {
        secondsElement.textContent = counter        
        counter++
    }
    startButton.addEventListener('click', () => {        
      if (!intervalId) {
            intervalId = setInterval(updateCounter, 1000);        
         }
   });
    stopButton.addEventListener('click', () => {        
      clearInterval(intervalId);
        intervalId = null;    
   });

    resetButton.addEventListener('click', () => {        
      clearInterval(intervalId);
      intervalId = null;        
      counter = 0;
      secondsElement.textContent = counter;    
   });