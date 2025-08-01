document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector(".themeswitcher");

    themeToggle.addEventListener('click', () => {
            const body = document.body;
            const isDarkMode = body.classList.contains('bg-dark-gradient');
            const themeIcon = document.getElementById('theme-icon');
            const switcher = document.getElementById('switcher');
            const darkLogo = document.querySelector('.dark-logo');
            const extensionCards = document.querySelectorAll('.extension-card');
            const cardTitles = document.querySelectorAll('.font-semibold');
            const cardDesc = document.querySelectorAll('.leading-snug')
            
            if (isDarkMode){
                body.classList.remove('bg-dark-gradient', 'text-neutral-100');
                body.classList.add('bg-light-gradient', 'text-gray-900');

                themeIcon.src = '../assets/images/icon-moon.svg';
                darkLogo.src = '../assets/images/extensions_logo_black_text.svg';

                themeToggle.classList.remove('bg-neutral-600')
                themeToggle.classList.add('bg-neutral-300');

                switcher.classList.remove('bg-neutral-700');
                switcher.classList.add('bg-white', 'shadow-lg');

                extensionCards.forEach(card => {
                    card.classList.remove('bg-neutral-700');
                    card.classList.add('bg-white', 'shadow-lg', 'border', 'border-gray-200');
                });


                cardTitles.forEach(title =>{
                    title.classList.remove('text-white');
                    title.classList.add('text-blue-950');
                });


                cardDesc.forEach(desc =>{
                    desc.classList.remove('text-gray-300');
                    desc.classList.add('text-gray-500');
                });


            } else {
                body.classList.add('bg-dark-gradient', 'text-neutral-100');
                body.classList.remove('bg-light-gradient', 'text-gray-900');

               

                themeIcon.src = '../assets/images/icon-sun.svg';
                darkLogo.src = '../assets/images/logo.svg';

                switcher.classList.add('bg-neutral-700');
                switcher.classList.remove('bg-white', 'shadow-lg');


                themeToggle.classList.add('bg-neutral-600')
                themeToggle.classList.remove('bg-neutral-300');

                extensionCards.forEach(card => {
                    card.classList.remove('bg-white', 'shadow-lg', 'border', 'border-gray-200');
                    card.classList.add('bg-neutral-700');
                });

                cardTitles.forEach(title =>{
                    title.classList.remove('text-blue-950');
                    title.classList.add('text-white');

                });

                cardDesc.forEach(desc =>{
                    desc.classList.add('text-gray-300');
                    desc.classList.remove('text-gray-500');
                });
            }
    })
});