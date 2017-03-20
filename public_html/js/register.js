var usernameOk = false;
var firstnameOk = false
var lastnameOk = false;
var emailOk = false;

function checkUsername(username) {
    var pattern = /(^([a-z0-9\s\u005f\u002d]{5}))(([a-z0-9\s\u005f\u002d]*)$)/i;
    if (!pattern.test(username)) {
        usernameOk = false;
        if (document.getElementById("username-alert") == null) {
            html = '<div id="username-alert" class="alert fade alert-dismissable alert-success in">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                    '<label>Username must be at least 5 characters long, consisting of letters, numbers, "&#95;", "&#45;" and space</label>' +
                    '</div>';
            document.getElementById("register-username-alert").innerHTML += html;
        }
    } else {
        usernameOk = true;        
    }

    if (usernameOk && firstnameOk && lastnameOk && emailOk) {
        document.getElementById("signup").disabled = false;
    } else {
        document.getElementById("signup").disabled = true;
    }
}

function checkFirstName(name) {
    var pattern = /(^([A-Z]{1}))(([a-z0-9\s]*)$)/;
    if (!pattern.test(name)) {
        firstnameOk = false;
        if (document.getElementById("firstname-alert") == null) {
            html = '<div id="firstname-alert" class="alert fade alert-dismissable alert-success in">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                    '<label>First name must start with a capital characters whilst the rest must be lower case of letters, numbers, and space</label>' +
                    '</div>';
            document.getElementById("register-firstname-alert").innerHTML += html;
        }
    } else {
        firstnameOk = true;        
    }

    if (usernameOk && firstnameOk && lastnameOk && emailOk) {
        document.getElementById("signup").disabled = false;
    } else {
        document.getElementById("signup").disabled = true;
    }
}

function checkLastName(name) {
    var pattern = /(^([A-Z]{1}))(([a-z0-9\s]*)$)/;
    if (!pattern.test(name)) {
        lastnameOk = false;
        if (document.getElementById("lastname-alert") == null) {
            html = '<div id="lastname-alert" class="alert fade alert-dismissable alert-success in">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                    '<label>Last name must start with a capital characters whilst the rest must be lower case of letters, numbers, and space</label>' +
                    '</div>';
            document.getElementById("register-lastname-alert").innerHTML += html;
        }
    } else {
        lastnameOk = true;        
    }

    if (usernameOk && firstnameOk && lastnameOk && emailOk) {
        document.getElementById("signup").disabled = false;
    } else {
        document.getElementById("signup").disabled = true;
    }
}

function checkEmail(email) {
    var pattern = /([^@])@.*((\.([^@]{2,}))$)/;
    if (!pattern.test(email)) {
        emailOk = false;
        if (document.getElementById("email-alert") == null) {
            html = '<div id="email-alert" class="alert fade alert-dismissable alert-success in">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                    '<label>Email must contain an &#64; character, as well as it should end with an en extension of 2 or more characters</label>' +
                    '</div>';
            document.getElementById("register-email-alert").innerHTML += html;
        }
    } else {
        emailOk = true;        
    }

    if (usernameOk && firstnameOk && lastnameOk && emailOk) {
        document.getElementById("signup").disabled = false;
    } else {
        document.getElementById("signup").disabled = true;
    }
}