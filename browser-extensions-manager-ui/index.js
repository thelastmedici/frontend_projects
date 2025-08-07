document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector(".themeswitcher");
    const switchBtn = document.querySelectorAll('.extension-card .switch-button');

    themeToggle.addEventListener('click', () => {
            const body = document.body;
            const isDarkMode = body.classList.contains('bg-dark-gradient');
            const themeIcon = document.getElementById('theme-icon');
            const switcher = document.getElementById('switcher');
            const darkLogo = document.querySelector('.dark-logo');
            const extensionCards = document.querySelectorAll('.extension-card');
            const cardTitles = document.querySelectorAll('.font-semibold');
            const cardDesc = document.querySelectorAll('.leading-snug');
            const removeBtn = document.querySelectorAll('.remove-btn');
            const filterContainer = document.querySelector('.flex.gap-4');
            const filterBtn = filterContainer.querySelectorAll('button');
            const pText = document.querySelectorAll('.text-sm .text-gray-300');
            
            if (isDarkMode){
                body.classList.remove('bg-dark-gradient', 'text-neutral-100');
                body.classList.add('bg-light-gradient', 'text-gray-900');

                themeIcon.src = '../assets/images/icon-moon.svg';
                darkLogo.src = '../assets/images/extensions_logo_black_text.svg';

                themeToggle.classList.remove('bg-neutral-600')
                themeToggle.classList.add('bg-gray-200');

                switcher.classList.remove('bg-neutral-700');
                switcher.classList.add('bg-white', 'shadow-lg');

                extensionCards.forEach(card => {
                    card.classList.remove('bg-neutral-700');
                    card.classList.add('bg-white', 'shadow-lg', 'border', 'border-gray-200');
                });

                pText.forEach(text => {
                    text.classList.remove('text-gray-300');
                    text.classList.add('text-blue-950')

                });


                cardTitles.forEach(title =>{
                    title.classList.remove('text-white');
                    title.classList.add('text-blue-950');
                });


                cardDesc.forEach(desc =>{
                    desc.classList.remove('text-gray-300');
                    desc.classList.add('text-gray-500');
                });


                removeBtn.forEach(btn => {
                btn.classList.remove('text-white', 'border-gray-400', 'hover:bg-neutral-600');
                btn.classList.add('text-gray-700', 'border-gray-300', 'hover:bg-gray-100');
                });

                filterBtn.forEach(btn =>{
                    btn.classList.remove('bg-neutral-600', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-300');
                });


            } else {
                body.classList.add('bg-dark-gradient', 'text-neutral-100');
                body.classList.remove('bg-light-gradient', 'text-gray-900');

               

                themeIcon.src = '../assets/images/icon-sun.svg';
                darkLogo.src = '../assets/images/logo.svg';

                switcher.classList.add('bg-neutral-700');
                switcher.classList.remove('bg-white', 'shadow-lg');


                themeToggle.classList.add('bg-neutral-600')
                themeToggle.classList.remove('bg-gray-200');

                extensionCards.forEach(card => {
                    card.classList.remove('bg-white', 'shadow-lg', 'border', 'border-gray-200');
                    card.classList.add('bg-neutral-700');
                });
                
                pText.forEach(text => {
                    text.classList.add('text-gray-300');
                    text.classList.remove('text-blue-950')

                })

                cardTitles.forEach(title =>{
                    title.classList.remove('text-blue-950');
                    title.classList.add('text-white');

                });

                cardDesc.forEach(desc =>{
                    desc.classList.add('text-gray-300');
                    desc.classList.remove('text-gray-500');
                });

                removeBtn.forEach(btn => {
                btn.classList.add('text-white', 'border-gray-400', 'hover:bg-neutral-600');
                btn.classList.remove('text-gray-700', 'border-gray-300', 'hover:bg-gray-100');
                });


                filterBtn.forEach(btn =>{
                    btn.classList.add('bg-neutral-600', 'text-white');
                    btn.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-300');
                });
            }
    });

    switchBtn.forEach(switchBtn => {
    switchBtn.addEventListener('click', () => {
        const dot = switchBtn.querySelector('.dot');
        dot.classList.toggle('translate-x-6');
        switchBtn.classList.toggle('bg-red-400');
        switchBtn.classList.toggle('bg-gray-300');
    });
});

 async function loadExtension(){
    try {
        const response = await fetch('./data.json');
        const data = response.json()
        
    } catch (error) {
        console.error('Failed to load data:', error);
    }
 }

});