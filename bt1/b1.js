function check() {
    if(login_form.username.value.length > 5 && login_form.password.value.length > 8) {
        alert("Welcome to world of JavaScript");
        return true;
    } else {
        alert("Invalid Username or password");
        return false;
    }
}