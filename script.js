$( document ).ready(function() {
    setTimeout(() => {
        $(".loader-holder").css("display","none");          
    }, 1500);
    window.location.replace("#");
});

$(window).scroll(function(){ 
    if ($(this).scrollTop() > 1200) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
}); 

$('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 1200 }, 600); 
    return false; 
});

$(".cta").click(function() {
    let currentBtnId=parseInt($(this).attr("value"));
    let eachItemClassName=document.getElementsByClassName("each-history");
    let eachItemId;
    for (let i = 0; i < eachItemClassName.length; i++) {
        eachItemId=parseInt(eachItemClassName[i].id)
        if(currentBtnId===eachItemId){
            $(eachItemClassName[i]).css("display","flex");
        }
        else{
            $(eachItemClassName[i]).css("display","none");
        }
    }
});