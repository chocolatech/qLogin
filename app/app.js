$(document).ready(function () {
    //  $("#msgid").html("This is Hello World by JQuery");
    //  $.fn.myFunction = function(){
    //      alert('You have successfully defined the function!'); 
    //  }


    $('.login-form').find('button').on('click', function () {
        window.location.replace('/home.html');
        // window.location.replace('/error500.html');
        // window.location.replace('/index.html');
    });

    function goBack() {
        window.history.back();
    }


});
