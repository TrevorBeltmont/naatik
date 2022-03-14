function anim(){
    let header = document.getElementById('header');
    header.style.transition = 'all 2s ease 0s';
    header.style.bottom = '20px';
    setTimeout(function(){
        header.style.bottom = '0px';
    }, 2000); 
}

setInterval(anim, 4000);




