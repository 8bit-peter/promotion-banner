document.addEventListener('DOMContentLoaded', function () {

    const main = document.querySelector('#main');

    const shakeEvent = new Shake();
    
    shakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);

    //function to call when shake occurs
    function shakeEventDidOccur () {
        //put your own code here etc.
        alert('shake!');
        main.classList.add('step1');
    }
    
});