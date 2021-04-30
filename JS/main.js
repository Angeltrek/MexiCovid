const admin_button = document.getElementById('admin-button');
const admin_panel = document.querySelector('.admin-panel');
const acces = document.getElementById('acces');


admin_button.addEventListener('click', () => {
    admin_button.classList.toggle('click');

    if(admin_button.classList.contains('click')) admin_panel.classList.add('show');
    else {
        admin_panel.classList.remove('show');
        document.getElementById('user').value = '';
        document.getElementById('password').value = '';
    }
});

acces.addEventListener('click', () =>{
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if(user === "admin" && password === "administrator") alert('accedio');
    else alert('no se ha podido acceder');
});