$(document).ready(function(){
    $(".menu-icon").click(function(){
        
        $(".header").toggleClass("active");
        $(".menu-icon").toggleClass("fa-times")     
    });
});