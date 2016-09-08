$(document).ready(function () {
    //  $("#msgid").html("This is Hello World by JQuery");
    //  $.fn.myFunction = function(){
    //      alert('You have successfully defined the function!'); 
    //  }


    $('button').on('click', function () {
        window.location.replace("http://stackoverflow.com");
    });

    $.router.add("/signin", function(){
        alert('You have successfully defined the function!'); 
    });


});
