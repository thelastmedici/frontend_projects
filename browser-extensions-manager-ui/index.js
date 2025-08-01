document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector(".themeswitcher");


    themeToggle.addEventListener('click', () => {
            const body = document.body;
            const isDarkMode = body.classList.contains('bg-dark-gradient');
            const themeIcon = document.getElementById('theme-icon');
            const switcher = document.getElementById('switcher');
            
            if (isDarkMode){
                body.classList.remove('bg-dark-gradient', 'text-neutral-100');
                body.classList.add('bg-light-gradient', 'text-gray-900');


                themeIcon.src = '../assets/images/icon-moon.svg';

                switcher.classList.remove('bg-neutral-700');
                switcher.classList.add('bg-white', 'shadow-lg');

            } else {
                body.classList.add('bg-dark-gradient', 'text-neutral-100');
                body.classList.remove('bg-light-gradient', 'text-gray-900');

                themeIcon.src = '../assets/images/icon-sun.svg';


                switcher.classList.add('bg-neutral-700');
                switcher.classList.remove('bg-white', 'shadow-lg');
            }
    })


});