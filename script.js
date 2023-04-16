const navigationhamburger = document.getElementById('hamburger')
const sidebarcontent = document.getElementById('sidebarContainer')
const blurcontent = document.getElementById('blurcontent')
const backbutton = document.getElementById('backbtn')


navigationhamburger.addEventListener('click', () =>{
    sidebarcontent.style.display = 'flex'
})

blurcontent.addEventListener('click', () => {
    sidebarcontent.style.display = 'none'
})
backbutton.addEventListener('click', () => {
    sidebarcontent.style.display = 'none'
})