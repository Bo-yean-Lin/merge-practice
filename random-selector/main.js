/*
window.onload=function(){
    //document.write("Hello JavaScript");
};
*/

$(document).ready(function(){
    $("input").click(function(){
       // alert("Hi");
       //$("H1").text("Hello");
       let numberOfListItem = $("#choices li").length;
       let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
       $("H1").text($("#choices li").eq(randomChildNumber).text());
       $("img").attr("src",images[randomChildNumber]);
    });
});