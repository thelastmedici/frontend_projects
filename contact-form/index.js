document.addEventListener('DOMContentLoaded', function() {
  
  const $ = (selector) => document.querySelector(selector);
  const successState = $('.success-state')
  successState.style.display = 'none'
  
  const fields = {
      fName:{
        input: $('.F-name input'),
        error:$('#fnameError'),
        container:$('.F-name')
      },

      lName:{
        input:$('.L-name input'),
        error:$('#lnameError'),
        container:$('.L-name'),
      },
      
      email:{
        input:$('input[type="email"]'),
        error:$('#emailError'),
      },
      message:{
        input:$('.message textarea'),
        error:$('#msgError'),
      },
      consent:{
        input:$('input[type="checkbox"]'),
        error:$('#consentError'),
      },
      query:{
         error:document.querySelector('.query-section .error-message')
      }
  };

  
  const radios = [$('.radio1'), $('.radio2')];
  const clearErrors = () =>{
    Object.values(fields).forEach(({ input, error, container }) => {
      if (error) error.textContent = '';
      if (input) input.classList.remove('input-error');
      if (container) container.classList.remove('input-error');
    });

    radios.forEach(radio=> radio.classList.remove('.input-error'));

  };

   const validationRequired = (fieldKey, message= "This field is required") => {
    const {input, error, container} =fields[fieldKey];
    if(input && input.value.trim() === ""){
      if(error) error.textContent = message;
      if(input) input.classList.add('input-error');
      return false;
    }
    return true;
   };

    const validateEmail = () => {
      const { input, error} = fields.email;
      const emailValue = input.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(emailValue === "" || !emailPattern.test(emailValue)){
        error.textContent = "Please enter a valid email address"
        input.classList.add("input-error");
        return false;
      }
      return true;
    };

    const validateQuery = () =>{
      const isAnyChecked = radios.some(radio => radio.checked);
      if(!isAnyChecked){
        if(fields.query.error){
          fields.query.error.textContent = "Please select a query type.";
        }
        radios.forEach(radio => radio.classList.add('error-message'));
        return false;
      } 
      return true;
    };

    //message validation
    const validateMsg = () => {
     const {input, error} = fields.message;
     if(input.value.trim() === ""){
      error.textContent = "The field is required";
      input.classList.add('input-error');
      return false;
     }
     return true;
     
    };

    const validateConsent = () =>{
      const {input, error} = fields.consent;
      const checkedInput = input.checked;
      if(!checkedInput){
        error.textContent ="To submit this form, please consent to being contacted "
        return false;
      }
      return true;
    }

    // reset form  function
    const clearForm = () =>{
      Object.values(fields).forEach(({input, container}) => {
        if(input) input.value = "";
        if(input && input.type === 'checkbox'){
          input.checked = false;
        }
        if(container){
          container.classList.remove('input-error');
        }
      });

      radios.forEach(radio => radio.checked = false);
      fields.query.error.textContent = "";
      successState.style.display="block";
      setTimeout(()=>{
        successState.style.display = "none";
      }, 5000);

    }
 
   $('button').addEventListener('click', function(e){
    e.preventDefault();
    clearErrors();

    let isValid = true;

    ['fName', 'lName'].forEach(field =>{
      if(!validationRequired(field)){
        isValid = false;
      }
    });

     if(!validateEmail()){
      isValid = false;
     }
     if(!validateQuery()){
      isValid = false;
     }
     if(!validateMsg()){
      isValid = false;
     }
     if(!validateConsent()){
      isValid = false;
     }
     
    // Submit and show success fom
    if (isValid){
      clearForm();
      
      
     }
   })
    
  });
