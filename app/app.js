$(document).ready(function () {
    //  $("#msgid").html("This is Hello World by JQuery");
    //  $.fn.myFunction = function(){
    //      alert('You have successfully defined the function!'); 
    //  }


    $('.login-form').find('button').on('click', function () {

        var inputs = $('.login-form').find('input');
        var values = {};
        var alert = document.getElementById('alert').innerHTML;
        

        inputs.each(function () {
            values[this.name] = $(this).val();
        });

        $.post('/login', values, function (data) {
            console.log(data);
        })
            .done(function () {
                window.location.replace('/home.html');
                $('#alert').alert('close')

            })
            .fail(function (response) {
                console.log(response);
                if (response.status === 500) {
                    window.location.replace('/error500.html');
                }
                else if (response.status === 401) {
                    window.location.replace('/index.html');
            }
            });


    });




});
