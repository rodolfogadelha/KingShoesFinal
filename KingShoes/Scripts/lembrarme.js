$(function() {
    if (localStorage.chkbx && localStorage.chkbx != '') {
        $('#remember_me').attr('checked', 'checked');
        $('#login').val(localStorage.usrname);
        $('#senha').val(localStorage.pass);
    } else {
        $('#remember_me').removeAttr('checked');
        $('#login').val('');
        $('#senha').val('');
    }

    $('#remember_me').click(function() {

        if ($('#remember_me').is(':checked')) {
            // salva o login e senha
            localStorage.usrname = $('#login').val();
            localStorage.pass = $('#senha').val();
            localStorage.chkbx = $('#remember_me').val();
        } else {
            localStorage.usrname = '';
            localStorage.pass = '';
            localStorage.chkbx = '';
        }
    });
});