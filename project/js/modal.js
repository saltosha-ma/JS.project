// MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
const openModal = () => {   modal.style.display = 'block'
   document.body.style.overflow = 'hidden'}
const closeModal = () => {
   modal.style.display = 'none'   
   document.body.style.overflow = ''
}
modalTrigger.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
   if (event.target === modal){      
      closeModal()
   }}
setTimeout(openModal, 4000)

const handleScroll = () => {   
   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      openModal()      
      window.removeEventListener('scroll', handleScroll)
   }}
window.addEventLi
