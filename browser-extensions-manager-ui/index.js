
document.addEventListener('DOMContentLoaded', ()=>{
    const themeToggle = document.querySelector('.themeswitcher');
    
    themeToggle.addEventListener('click', ()=>{
        const darkMode = document.body.classList.contains('bg-dark-gradient');
        if (darkMode){
            document.body.classList.remove('bg-dark-gradient');
            document.body.classList.add('bg-white');
        } else{
             document.body.classList.remove('bg-white');
            document.body.classList.add('bg-dark-gradient');
        }
    })
})
