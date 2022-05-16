//Valididate Subscribe Form

function validateForm(){
    var email = document.forms["myForm"]["email"].value
    if(email === ''){
        onError("Email field cannot be empty")
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      onSuccess()
    }
    else{
        onError("Enter valid email")
    }
    console.log("joe")
    
}


const form = document.getElementById('my_form');
form.addEventListener('submit', (event)=>{
    
    
    validateForm()

    if(isFormValid() === true){
        form.submit()
    }else{
      event.preventDefault()
    }

    // form.reset()
    
})

function isFormValid(){
    let formField = document.querySelector('.form-control')
    let result = true
    if(formField.classList.contains('error-message')){
        result = false
    }

    return result
}
function onError(message){
    let formField = document.querySelector('.form-control')
    let messageEle = document.querySelector('.error')
    messageEle.style.visibility = 'visible';
    messageEle.innerText = message;
    messageEle.style.color = 'red';
    formField.classList.add("error-message")
    formField.classList.remove("success")
    
}
function onSuccess(){
    let formField = document.querySelector('.form-control')
    let messageEle = document.querySelector('.error');
    messageEle.style.visibility = 'hidden';
    messageEle.innerText = "";
    formField.classList.remove("error-message")
    formField.classList.add("success")
    
    
}


//For the Send message Form

const messageForm = document.querySelector('.quote');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#second-email');



messageForm.addEventListener('submit', (event)=>{
    // 
    validateMessageForm()
    if(isMessageFormValid() === true){
        messageForm.submit()
    }else{
        event.preventDefault();
    }

    // messageForm.reset()
})

function isMessageFormValid(){
    const inputContainers = messageForm.querySelectorAll('.input-group');
    let res = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error-line')){
            res = false;
        }
    });

    return res;
}

function validateMessageForm(){
    //USERNAME
    if(usernameInput.value.trim() == ""){
        setError(usernameInput, 'Name cannot be empty');
    }else{
        setSuccess(usernameInput)
    }

    //EMAIL
    if(emailInput.value.trim() === ""){
        setError(emailInput, 'Email field cannot be empty')
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))
    {
      setSuccess(emailInput)
    }
    else{
        setError(emailInput, "You have entered an Invalid email")
    }
    
    // if(emailInput.value.trim() === ""){
    //     setError(emailInput, 'Email Must be filled out');
    // }else if(emailInput.value.trim().length < 8 || emailInput.value.trim().length > 25){
    //     setError(emailInput, "Email must have values between values 5 and 15")
    // }
    // else if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
    //     setError(emailInput, "Email must include '@' or '.'");
    // }
    // else{
    //     setSuccess(emailInput)
    // }

}

function setError(element, errorMessage){
    const parent = element.parentElement;
    const paragragh = parent.querySelector('p');
    paragragh.innerText = errorMessage
    parent.classList.add('error-line');
    parent.classList.remove('success');
    
}

function setSuccess(element){
    const parent = element.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error-line');
}











