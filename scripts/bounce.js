document.querySelectorAll('.nav-text').forEach(element => {
    element.addEventListener('mouseenter', function() {
        console.log('Event triggered');
        console.log(element.textContent);

        var tmp = element.textContent;

        element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: '.letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 750,
                delay: (el, i) => 75 * i
            });

        //element.textContent = tmp;
    });
    }
);
