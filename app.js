document.addEventListener('DOMContentLoaded', function () {
    alert('działa')

    const shakeEvent = new Shake();

    const shakeHandler = () => {
        alert('shake działa')
    };

    shakeEvent.start(shakeHandler);
});