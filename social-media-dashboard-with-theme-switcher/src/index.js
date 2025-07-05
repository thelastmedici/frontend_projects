document.addEventListener('DOMContentLoaded', ()=>{
    const toggle = document.getElementById('toggleTheme');
    const track = document.getElementById('track');
    const thumb = document.getElementById('thumb');
    const blackText = document.querySelector('.black-text');



    toggle.addEventListener('click', () => {
        if(toggle.checked){
            thumb.classList.add("translate-x-full", "bg-white");
            track.classList.remove("bg-gradient-to-r", "from-blue-500", "to-green-400");
            track.classList.add("bg-gray-300");
            h1.classList.add("text-black");
        }else{
             thumb.classList.remove("translate-x-full", "bg-white");
             thumb.classList.add("left-1", "bg-very-dark-blue-bg");
            track.classList.remove("bg-gray-300");
            track.classList.add("bg-gradient-to-r", "from-blue-500", "to-green-400");
             h1.classList.remove("text-black");
        }
    })
})