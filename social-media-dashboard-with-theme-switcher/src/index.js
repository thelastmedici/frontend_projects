document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector("body");
    const toggle = document.getElementById('toggleTheme');
    const track = document.getElementById('track');
    const thumb = document.getElementById('thumb');
    const blackText = document.querySelectorAll('.black-text'); // Use querySelectorAll for multiple elements
    const allTextElements = document.querySelectorAll('h1, h2, p'); // Target all text elements
    const cards = document.querySelectorAll('.bg-dark-desaturated-blue-card-bg'); // Target all cards
    const mainContainer = document.querySelector('.w-96'); 
    
    toggle.addEventListener('click', () => {
        if (toggle.checked) {
            // Light mode styles
            thumb.classList.add("translate-x-full", "bg-white");
            track.classList.remove("bg-gradient-to-r", "from-blue-500", "to-green-400");
            track.classList.add("bg-gray-400");
            
            // Change body background to white
            body.classList.remove("bg-very-dark-blue-bg");
            body.classList.add("bg-white");
            
            // Change main container background
            mainContainer.classList.remove("bg-very-dark-blue-bg");
            mainContainer.classList.add("bg-white");
            
            
            // Change all text elements to black
            allTextElements.forEach(element => {
                element.classList.add("text-black");
                element.classList.remove("text-white", "text-text-blue");
            });
            
            // Change card backgrounds to white
            cards.forEach(card => {
                card.classList.remove('bg-dark-desaturated-blue-card-bg');
                card.classList.add('bg-white', 'border', 'border-gray-200');
            });
            
        } else {
            // Dark mode styles (revert back)
            thumb.classList.remove("translate-x-full", "bg-white");
            track.classList.remove("bg-gray-400");
            track.classList.add("bg-gradient-to-r", "from-blue-500", "to-green-400");
            
            // Change body background back to dark
            body.classList.remove("bg-white");
            body.classList.add("bg-very-dark-blue-bg");
            
            // Change main container background back
            mainContainer.classList.remove("bg-white");
            mainContainer.classList.add("bg-very-dark-blue-bg");
            
            // Change text colors back to white
            blackText.forEach(element => {
                element.classList.remove("text-black");
                element.classList.add("text-white");
            });
            
        
            allTextElements.forEach(element => {
                element.classList.remove("text-black");
                // Restore original colors based on element type
                if (element.classList.contains('text-text-blue')) {
                    element.classList.add("text-text-blue");
                } else {
                    element.classList.add("text-white");
                }
            });
            
        
            cards.forEach(card => {
                card.classList.remove('bg-white', 'border', 'border-gray-200');
                card.classList.add('bg-dark-desaturated-blue-card-bg');
            });
        }
    });
});