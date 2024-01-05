var toggleIcon = document.getElementById('toggleIcon');
var cancelToggle = document.getElementById('cancelToggleIcon');
var nameValidation = document.getElementById('name-validation');
var emailValidation = document.getElementById('email-validation');
var messageValidation = document.getElementById('massege-validation');
var loadIcon = document.getElementsByClassName('send-loadIcon');
const contactButton = document.getElementById('contactButton');

$(document).ready(function () {
    $(nameValidation).hide();
    $(emailValidation).hide();
    $(messageValidation).hide();
    $(loadIcon).hide();

    $(toggleIcon).on('click', function () {
        $(toggleIcon).hide();
        $(cancelToggle).show();
    })

    $(cancelToggle).on('click', function () {
        $(toggleIcon).show();
        $(cancelToggle).hide();
    })

    $(contactButton).click(function () {
        var $this = $(this);
        $this.button('loading');
        setTimeout(function () {
            $this.button('reset');
        }, 50000)
    })
})