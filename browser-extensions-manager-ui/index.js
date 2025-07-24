document.addEventListener('DOMContentLoaded',()=>{
    const toggle = document.getElementById('simpleToggle');
    toggle.addEventListener('click', () =>{
        toggle.classList.toggle('bg-red-500');
        toggle.querySelector('.dot').classList.toggle('translate-x-6');
    });
});