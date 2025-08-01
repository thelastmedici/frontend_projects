document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector(".themeswitcher");


    themeToggle.addEventListener('click', () => {
            const body = document.body;
            const isDarkMode = body.classList.contains('bg-dark-gradient');
            const themeIcon = document.getElementById('theme-icon');
            const switcher = document.getElementById('switcher');
            const darkLogo = document.querySelector('.dark-logo')
            
            if (isDarkMode){
                body.classList.remove('bg-dark-gradient', 'text-neutral-100');
                body.classList.add('bg-light-gradient', 'text-gray-900');


                themeIcon.src = '../assets/images/icon-moon.svg';
                darkLogo.src = '../assets/images/extensions_logo_black_text.svg';

                switcher.classList.remove('bg-neutral-700');
                switcher.classList.add('bg-white', 'shadow-lg');


            } else {
                body.classList.add('bg-dark-gradient', 'text-neutral-100');
                body.classList.remove('bg-light-gradient', 'text-gray-900');

                themeIcon.src = '../assets/images/icon-sun.svg';
                darkLogo.src = '../assets/images/logo.svg';


                switcher.classList.add('bg-neutral-700');
                switcher.classList.remove('bg-white', 'shadow-lg');
            }
    })


});