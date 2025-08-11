document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector(".themeswitcher");
    const extList = document.querySelectorAll(".px-4.py-2.rounded-full");
    
    let allExtensions =[];
    extList.forEach(ext => {
        ext.addEventListener('click', ()=>{
           extList.forEach(btn => btn.classList.remove('bg-red-500'));
           ext.classList.toggle('bg-red-500');
           ext.classList.toggle("bg-neutral-600");

           const buttonText = ext.textContent.trim();
           filterExtension(buttonText);
        });
    });
    
    function filterExtension(filterType){
        const container = document.getElementById('extensions-container');

        let filteredExtensions;

        switch(filterType){
            case 'All':
                filteredExtensions = allExtensions;
                break;
            case 'Active':
                filteredExtensions = allExtensions.filter(ext => ext.isActive === true);
                break;
            case 'Inactive':
                filteredExtensions = allExtensions.filter(ext=>ext.isActive === false);
                break;
            default:
                filteredExtensions = allExtensions;
            
        }
        renderFilteredExtensions(filteredExtensions);
    }
    //filtered extension function

    function renderFilteredExtensions(extensions) {
        const container = document.getElementById('extensions-container');
        
        if (!extensions || extensions.length === 0){
            container.innerHTML = '<p class="col-span-full text-center text-gray-500">No extensions found for this filter.</p>';
            return;
        }

        // Clear container
        container.innerHTML = '';

        extensions.forEach(extension => {
            const card = document.createElement('div');
            card.className = 'extension-card bg-neutral-700 rounded-2xl p-4 flex flex-col transition-colors duration-300';
            card.dataset.isActive = extension.isActive; // Add data attribute
            
            card.innerHTML = `
                <div class="flex gap-4">
                    <img src="${extension.logo}" alt="${extension.name}" class="w-12 h-12" />
                    <div>
                        <h2 class="text-white font-semibold">${extension.name}</h2>
                        <p class="text-sm text-gray-300 leading-snug">${extension.description}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <button class="remove-btn text-white border border-gray-400 rounded-full px-3 py-1 text-sm hover:bg-red-400 transition">Remove</button>
                    <button class="switch-button w-12 h-6 ${extension.isActive ? 'bg-red-400' : 'bg-gray-300'} rounded-full relative">
                        <span class="dot absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${extension.isActive ? 'translate-x-6' : ''}"></span>
                    </button>
                </div>
            `;
            
            container.appendChild(card);

            // Switch button toggle
            const switchBtn = card.querySelector('.switch-button');
            const dot = switchBtn.querySelector('.dot');
            switchBtn.addEventListener('click', () => {
                // Update the extension data
                extension.isActive = !extension.isActive;
                card.dataset.isActive = extension.isActive;
                
                dot.classList.toggle('translate-x-6');
                switchBtn.classList.toggle('bg-red-400');
                switchBtn.classList.toggle('bg-gray-300');
            });

            // Remove button toggle background
            const removeBtn = card.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                removeBtn.classList.toggle('bg-red-500');
                removeBtn.classList.toggle('text-white');
            });
        });
    }

    // Theme toggle functionality
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

            themeIcon.src = './assets/images/icon-moon.svg';
            darkLogo.src = './assets/images/extensions_logo_black_text.svg';

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

            themeIcon.src = './assets/images/icon-sun.svg';
            darkLogo.src = './assets/images/logo.svg';

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
     
    // Load extensions data
    async function loadExtension() {
        try {
            const response = await fetch('./data.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to load data:", error);
        }
    }

    // Render extensions
    async function renderExtension(){
        const extensions = await loadExtension();
        allExtensions = extensions;
        const container = document.getElementById('extensions-container');

        if (!extensions || extensions.length === 0){
            container.innerHTML = '<p class="col-span-full text-center text-gray-500">Could not load extensions data.</p>';
            return;
        }

        // Clear container
        container.innerHTML = '';

        extensions.forEach(extension => {
            const card = document.createElement('div');
            card.className = 'extension-card bg-neutral-700 rounded-2xl p-4 flex flex-col transition-colors duration-300';
            
            card.innerHTML = `
                <div class="flex gap-4">
                    <img src="${extension.logo}" alt="${extension.name}" class="w-12 h-12" />
                    <div>
                        <h2 class="text-white font-semibold">${extension.name}</h2>
                        <p class="text-sm text-gray-300 leading-snug">${extension.description}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <button class="remove-btn text-white border border-gray-400 rounded-full px-3 py-1 text-sm hover:bg-red-400 transition">Remove</button>
                    <button class="switch-button w-12 h-6 ${extension.isActive ? 'bg-red-400' : 'bg-gray-300'} rounded-full relative">
                        <span class="dot absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${extension.isActive ? 'translate-x-6' : ''}"></span>
                    </button>
                </div>
            `;


            container.appendChild(card);
            // Switch button toggle
            const switchBtn = card.querySelector('.switch-button');
            const dot = switchBtn.querySelector('.dot');
            switchBtn.addEventListener('click', () => {
                dot.classList.toggle('translate-x-6');
                switchBtn.classList.toggle('bg-red-400');
                switchBtn.classList.toggle('bg-gray-300');
            });

            // Remove button toggle background
            const removeBtn = card.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                removeBtn.classList.toggle('bg-red-500');
                removeBtn.classList.toggle('text-white');
            });
        });
    }

    // Initialize the app
    renderExtension();
});
