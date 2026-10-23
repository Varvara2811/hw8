const openModalBtn = document.querySelector('[data-modal-open]')
const backdrobRef = document.querySelector('[data-modal]')
const closeBtnModal = document.querySelector('[data-modal-close]')

openModalBtn.addEventListener("click", ()=>{
backdrobRef.classList.remove("is__hidden")
})

closeBtnModal.addEventListener("click", ()=>{
backdrobRef.classList.add("is__hidden")
})
