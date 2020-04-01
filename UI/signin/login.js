function validation() {

    // validation code for inputs
    // declare variable to access form element
    
    
    var email = document.getElementById('email_error');
    var password = document.getElementById('pass_error').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    //checking the validation of input
        if(email.value == '') {
            document.getElementById('username').innerHTML = "Email should not be empty";
            return false
        }
       
       
       if(password.length == ''){
        document.getElementById('password').innerHTML = "Please fill your Password";
        return false
       }

       if ((password.length < 6 ) || (password.length > 20)){
        document.getElementById('password').innerHTML = "Please your Password should be between 7 and 20";
        return false
       }

       if(email.value.match(mailformat)){
        return true}
       else{
        document.getElementById('email1').innerHTML = "Email format incorect";
        return false
       }
       
    
        }