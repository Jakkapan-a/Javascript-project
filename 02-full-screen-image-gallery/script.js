// Full screen image gallery script
// Version: 1.0
(function(){
    let el = document.querySelectorAll('li img');
    let covered = document.querySelector('.covered');
    let str = document.querySelector('.text');

    for(let i=0 ; i<el.length ; i++){
        el[i].addEventListener('click', function()
        {
            str.style.display = 'none';
            covered.style.background = 'url('+this.getAttribute('src')+')';
            covered.style.backgroundSize = 'cover';
            covered.style.height = '100vh';
            
        });
    }
})();

