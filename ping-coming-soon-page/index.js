document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const errorMsg = document.getElementById('emailError');
    const notifyBtn = document.querySelector('.notifyBtn');
    const inputField = document.getElementById('email');
   
    notifyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
        
        if (!email.value.match(emailPattern)) {
            errorMsg.textContent = "Please provide a valid email address";
            errorMsg.style.display = "block";
            email.style.border = "2px solid red";
        
        } else {
            errorMsg.textContent = "";
            errorMsg.style.display = "none";
            email.style.border = "2px solid hsl(0, 0%, 90%)";
            alert("Email notification sent successfully");
            email.value = '';
        
        }
            
    });

    inputField.addEventListener('focus', function() {
        errorMsg.textContent = "";
        errorMsg.style.display = "none";
        email.style.border = "2px solid hsl(0, 0%, 90%)";
    });
});
