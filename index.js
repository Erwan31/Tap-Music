window.addEventListener('load', () => {
    const soundsEl = document.querySelectorAll('.sound');
    const padsEl = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#FF6F61",
        "#6B5B95",
        "#88B04B",
        "#92A8D1",
        "#F7CAC9",
        "#DD4124"
    ]

    //console.log(padsEl);

    // Get a sound
    padsEl.forEach( (pad, index) => {
        pad.addEventListener('click', function() {
            soundsEl[index].currentTime = 0;
            soundsEl[index].play();
            
            createBubbles(index);
        });
    });

    // Bubble function
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        } )
    }
})