document.addEventListener('DOMContentLoaded', function () {

    const main = document.querySelector('#main');

    const shakeEvent = new Shake();
    
    shakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);

    function shakeEventDidOccur () {
        main.classList.add('step1');
        setTimeout(function(){ alert("step2 fired Up"); }, 5000);
    }
    
});