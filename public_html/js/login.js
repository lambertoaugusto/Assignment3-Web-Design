var loginOk = false;
var passOk = false;

function checkLogin(login) {
    var pattern = /.{5,}/;
    if (!pattern.test(login)) {
        loginOk = false;
        if (document.getElementById("login-alert") == null) {
            html = '<div id="login-alert" class="alert fade alert-dismissable alert-success in">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                    '<label>Username must be at least 5 characters long</label>' +
                    '</div>';
            document.getElementById("index-login-alert").innerHTML += html;
        }
    }
    else{
        loginOk = true;
        document.getElementById("index-login-alert").innerHTML = "";
    }
    
    if(loginOk && passOk){        
        document.getElementById("login").disabled = false;
    }
    else{        
        document.getElementById("login").disabled = true;
    }
}

function checkPassword(password) {
    var pattern = /.{4,}/i;
    if (!pattern.test(password)){
        passOk = false;
        if(document.getElementById("password-alert") == null){    
            html = '<div id="password-alert" class="alert fade alert-dismissable alert-success in">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                        '<label>Password must be at least 4 characters long</label>' +
                    '</div>';
            document.getElementById("index-password-alert").innerHTML += html;
        }
    }
    else{        
        passOk = true;
        document.getElementById("index-password-alert").innerHTML = "";
    }
    
    if(loginOk && passOk){
        document.getElementById("login").disabled = false;
    }
    else{
        document.getElementById("login").disabled = true;
    }
}