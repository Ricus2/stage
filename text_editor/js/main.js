//Alignement of text
document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.btnposition').forEach(function(btnposition){
        btnposition.onclick = function(){
            document.querySelector('.text-editor').style.textAlign = btnposition.dataset.position;
        }
    })
})

//Colors of text
document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.btncolors').forEach(function(btncolors){
        btncolors.onclick = function(){
            document.querySelector('.text-editor').style.color = btncolors.dataset.color;
        }
    });
});

