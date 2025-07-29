
document.addEventListener('DOMContentLoaded', ()=>{
    const themeToggle = document.querySelector('.themeswitcher');
    
    
    themeToggle.addEventListener('click', ()=>{
        const darkMode = document.body.classList.contains('bg-dark-gradient');
        const extList = document.querySelector('.extension-list');
        if (darkMode){
            document.body.classList.remove('bg-dark-gradient');
            document.body.classList.add('bg-white');
            extList.classList.add('text-black')
            
        } else{
             document.body.classList.remove('bg-white');
            document.body.classList.add('bg-dark-gradient');
            extList.classList.remove('text-black')
        }
    })
})
