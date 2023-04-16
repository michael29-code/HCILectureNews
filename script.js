const navigationhamburger = document.getElementById('hamburger')
const sidebarcontent = document.getElementById('sidebarContainer')
const blurcontent = document.getElementById('blurcontent')
const backbutton = document.getElementById('backbtn')
const profileicon = document.getElementById('profile-icon')
const profilemenu = document.getElementById('profilemenu')


navigationhamburger.addEventListener('click', () =>{
    sidebarcontent.style.display = 'flex'
})

blurcontent.addEventListener('click', () => {
    sidebarcontent.style.display = 'none'
})
backbutton.addEventListener('click', () => {
    sidebarcontent.style.display = 'none'
})

profileicon.addEventListener('click', () => {
    if (profileicon.classList.contains('clicked')) {
        profilemenu.style.display = 'none'
        profileicon.classList.remove('clicked')
    }else if(!profileicon.classList.contains('clicked'))
    {
        profileicon.classList.add('clicked')
        profilemenu.style.display = 'flex'
    }
})