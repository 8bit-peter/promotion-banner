document.addEventListener('DOMContentLoaded', function () {

    const shakeEvent = new Shake();

    shakeEvent.start();

    window.addEventListener('shake', shakeEventDidOccur, false);

    //function to call when shake occurs
    function shakeEventDidOccur () {
        //put your own code here etc.
        alert('shake!');
    }
    
});