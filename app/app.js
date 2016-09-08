$(document).ready(function(){
 $("#msgid").html("This is Hello World by JQuery");
 $.fn.myFunction = function(){
     alert('You have successfully defined the function!'); 
 }

});
