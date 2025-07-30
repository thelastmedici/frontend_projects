document.addEventListener('DOMContentLoaded', ()=>{     
    const themeToggle = document.querySelector('.themeswitcher');          
    
    themeToggle.addEventListener('click', ()=>{         
        const darkMode = document.body.classList.contains('bg-dark-gradient');         
        const extList = document.querySelector('.extension-list');         
        const logoImg = document.getElementById('logo-img');         
        const themeLogo = document.querySelector('.themeswitcher img');
        const switchTheme = document.getElementById('switcher');
        
        
                  
        if (darkMode){             
            document.body.classList.remove('bg-dark-gradient');             
            document.body.classList.add('bg-light-gradient');             
            extList.classList.add('text-black');             
            logoImg.src = '../assets/images/extensions_logo_black_text.svg';             
            themeLogo.src = '../assets/images/icon-moon.svg';   
            switchTheme.classList.remove('bg-neutral-700');
            switchTheme.classList.add('bg-white');                   
        } else{             
            document.body.classList.remove('bg-light-gradient');             
            document.body.classList.add('bg-dark-gradient');             
            extList.classList.remove('text-black');             
            logoImg.src = "../assets/images/logo.svg";             
            themeLogo.src = '../assets/images/icon-sun.svg';
            switchTheme.classList.add('bg-neutral-700');
            switchTheme.classList.remove('bg-white');        
        }     
    }); 
});