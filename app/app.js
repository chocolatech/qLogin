$(document).ready(function () {
 
    $('#alert').hide();
    $('.login-form').find('button').on('click', function () {

        var inputs = $('.login-form').find('input');
        var values = {};


        inputs.each(function () {
            values[this.name] = $(this).val();
        });

        $.post('/login', values, function (data) {

        })
            .done(function (response) {
                 window.location.replace('/home.html');
                 $.get('/userInfo', function(d){
                    // $( ".result" ).html( d );
                    console.log(d);
                 });
            })
            .fail(function (response) {
                if (response.status === 500) {
                    window.location.replace('/error500.html');
                }
                else if (response.status === 401) {
                    $('#alert').show();
                }
            });

    });




});
