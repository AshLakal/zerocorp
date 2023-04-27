
// Disable browser's default scroll restoration behavior
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

let isStartingAnimation = true;

// Function to reset scroll position and retrigger animation
function resetScrollAndAnimation() {
    // Reset scroll position to the top
    window.scrollTo(0, 0);

    // Disable scrolling and retrigger animation
    isStartingAnimation = true;

    // Enable scrolling after the animation ends
    setTimeout(function () {
        isStartingAnimation = false;
        window.scrollTo(0, 0);
    }, 1000); // Replace 5000 with the duration of your starting animation in milliseconds
}

// Reset scroll position and retrigger animation on page load
resetScrollAndAnimation();

document.addEventListener('DOMContentLoaded', async () => {
    window.scrollTo(0, 0);
 
    if (window.innerWidth <= 767) {
        animateMobileElements();
    } else {
        animateElements();
    }
});

function animateMobileElements() {

    const animations = [
        // ...
        {
            element: document.querySelector('#immeubleA'),
            keyframes: [{ left: '26vw' }, { left: '23vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleC'),
            keyframes: [{ left: '10vw' }, { left: '7vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleB'),
            keyframes: [{ right: '13vw' }, { right: '10vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleD'),
            keyframes: [{ right: '21vw' }, { right: '18vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.cave'),
            keyframes: [{ bottom: '-111vh' }, { bottom: '-110vh' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.custom-element'),
            keyframes: [{ bottom: '5vh' }, { bottom: '8vh' }],
            options: { duration: 1000, easing: 'ease-out' }
        }
    ];

    for (const animation of animations) {
        animation.element.animate(animation.keyframes, animation.options);
    }
    const customElement = document.querySelector('.custom-element');
    customElement.animate(
        [
            { transform: 'translateX(-50%) rotate(0deg)' },
            { transform: 'translateX(-50%) rotate(90deg)' },
        ],
        { duration: 1000, easing: 'ease-out' }
        ).finished.then(() => {
            // Ajoutez cette ligne pour définir la valeur finale de l'animation
            customElement.style.transform = 'translateX(-50%) rotate(90deg)';
        });
    
}

function animateElements() {

    const animations = [
        {
            element: document.querySelector('#newLayer'),
            keyframes: [{ bottom: '0vh' }, { bottom: '-2vh' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        // ...
        {
            element: document.querySelector('#immeubleA'),
            keyframes: [{ left: '21vw' }, { left: '18vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleC'),
            keyframes: [{ left: '32vw' }, { left: '30vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleB'),
            keyframes: [{ right: '15vw' }, { right: '12vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleD'),
            keyframes: [{ right: '22vw' }, { right: '20vw' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.cave'),
            keyframes: [{ bottom: '-113vh' }, { bottom: '-110vh' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.custom-element'),
            keyframes: [{ bottom: '5vh' }, { bottom: '8vh' }],
            options: { duration: 1000, easing: 'ease-out' }
        }
    ];

    for (const animation of animations) {
        animation.element.animate(animation.keyframes, animation.options);
    }
    const customElement = document.querySelector('.custom-element');
    customElement.animate(
        [
            { transform: 'translateX(-50%) rotate(0deg)' },
            { transform: 'translateX(-50%) rotate(90deg)' },
        ],
        { duration: 1000, easing: 'ease-out' }
        ).finished.then(() => {
            // Ajoutez cette ligne pour définir la valeur finale de l'animation
            customElement.style.transform = 'translateX(-50%) rotate(90deg)';
        });
    }
    
    function updateAnimation() {
        if (isStartingAnimation) {
            return;
        }
        const scrollPos = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollPos / maxScroll;
    
        const floatingTitle = document.querySelector('.floating-title');
        const titleProgress = scrollPercent * 200;
        floatingTitle.style.transform = `translateX(${-titleProgress}%)`;
        floatingTitle.style.opacity = 1 - scrollPercent;
    
        // Animate the .cave element
        const cave = document.querySelector('.cave');
        const caveBottom = -110 + scrollPercent * 110; // Change the initial value and multiplier
        cave.style.bottom = `calc(${caveBottom}%)`; 
    
        if (window.innerWidth <= 767) {
            document.querySelector('.zerocorp').style.opacity = 0.15 + scrollPercent * 0.55;
            document.querySelector('#immeubleA').style.left = `calc(23vw - ${scrollPercent * 8}vw)`;
            document.querySelector('#immeubleC').style.left = `calc(7vw - ${scrollPercent * 3.4}vw)`;
            document.querySelector('#immeubleB').style.right = `calc(10vw - ${scrollPercent * 11.66}vw)`;
            document.querySelector('#immeubleD').style.right = `calc(18vw - ${scrollPercent * 6.33}vw)`;
            document.querySelector('#newLayer').style.bottom = `calc(7vh - ${scrollPercent * -70}vh)`;
            document.querySelector('.cables').style.right = `calc(-${70 - scrollPercent * 50}vw)`;
            document.querySelector('.custom-element').style.bottom = `calc(8vh - ${scrollPercent * -110}vh)`;   
        } else {  
            document.querySelector('.zerocorp').style.opacity = 0.15 + scrollPercent * 0.55;
            document.querySelector('#immeubleA').style.left = `calc(18vw - ${scrollPercent * 20}vw)`;
            document.querySelector('#immeubleC').style.left = `calc(30vw - ${scrollPercent * 15}vw)`;
            document.querySelector('#immeubleB').style.right = `calc(12vw - ${scrollPercent * 11}vw)`;
            document.querySelector('#immeubleD').style.right = `calc(20vw - ${scrollPercent * 15}vw)`;
            document.querySelector('#newLayer').style.bottom = `calc(-2vh - ${scrollPercent * 5}vh)`;
            document.querySelector('.cables').style.right = `calc(-${70 - scrollPercent * 50}vw)`;
            document.querySelector('.custom-element').style.bottom = `calc(8vh - ${scrollPercent * -110}vh)`;
        }
        if (window.innerWidth <= 767) {
            document.querySelector('#immeubleA').style.bottom = `calc(8vh - ${scrollPercent * -105}vh)`;
            document.querySelector('#immeubleC').style.bottom = `calc(8vh - ${scrollPercent * -80}vh)`;
            document.querySelector('#immeubleB').style.bottom = `calc(8vh - ${scrollPercent * -105}vh)`;
            document.querySelector('#immeubleD').style.bottom = `calc(vh - ${scrollPercent * -80}vh)`;
        } else { 
            document.querySelector('#immeubleA').style.bottom = `calc(5vh - ${scrollPercent * -40}vh)`;
            document.querySelector('#immeubleC').style.bottom = `calc(5vh - ${scrollPercent * -12}vh)`;
            document.querySelector('#immeubleB').style.bottom = `calc(5vh - ${scrollPercent * -40}vh)`;
            document.querySelector('#immeubleD').style.bottom = `calc(5vh - ${scrollPercent * -12}vh)`;
        }
    }
    
    document.addEventListener('scroll', updateAnimation);
  

let animationPlayed = false;

const youtubeButton = document.getElementById("youtube-button");
const youtubeButtonButton = youtubeButton.querySelector("button");

youtubeButtonButton.addEventListener("click", () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {

        setTimeout(() => {
            youtubeButton.classList.remove("hidden");
        }, 1500);
    }
});

window.addEventListener("scroll", () => {
    if (!animationPlayed && !isStartingAnimation && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        animationPlayed = true;
        setTimeout(() => {
            animateOrdi();
        }, 500);
    }
});


function animateOrdi() {
    const ordi = document.querySelector(".ordi");
    ordi.style.display = "block";

    const ordiAnimation = ordi.animate(
        [
            { transform: "translateX(-50%)" },
            { transform: "translateX(0)" }
        ],
        { duration: 1000, easing: "ease-out" }
    );

    ordiAnimation.finished.then(() => {
        // Set the final value of the animation
        ordi.style.transform = "translateX(-50)";
    });
}

