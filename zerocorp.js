
function animateMobileElements() {

    const animations = [
        {
            element: document.querySelector('#newLayer'),
            keyframes: [{ bottom: '8%' }, { bottom: '7%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.zerocorp'),
            keyframes: [{ opacity: 0 }, { opacity: 0.15 }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleA'),
            keyframes: [{ left: '26%' }, { left: '23%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleC'),
            keyframes: [{ left: '19%' }, { left: '16%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleB'),
            keyframes: [{ right: '13%' }, { right: '10%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleD'),
            keyframes: [{ right: '21%' }, { right: '18%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },         
        {
            element: document.querySelector('.floating-title'),
            keyframes: [{ transform: 'translateX(100%)', opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.cave'),
            keyframes: [{ bottom: '-111%' }, { bottom: '-110%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.custom-element'),
            keyframes: [{ bottom: '5%' }, { bottom: '8%' }],
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
            keyframes: [{ bottom: '0%' }, { bottom: '-2%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.zerocorp'),
            keyframes: [{ opacity: 0 }, { opacity: 0.15 }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleA'),
            keyframes: [{ left: '33%' }, { left: '30%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleC'),
            keyframes: [{ left: '22%' }, { left: '20%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleB'),
            keyframes: [{ right: '15%' }, { right: '12%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('#immeubleD'),
            keyframes: [{ right: '22%' }, { right: '20%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },         
        {
            element: document.querySelector('.floating-title'),
            keyframes: [{ transform: 'translateX(100%)', opacity: 0 }, { transform: 'translateX(0)', opacity: 1 }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.cave'),
            keyframes: [{ bottom: '-113%' }, { bottom: '-110%' }],
            options: { duration: 1000, easing: 'ease-out' }
        },
        {
            element: document.querySelector('.custom-element'),
            keyframes: [{ bottom: '5%' }, { bottom: '8%' }],
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

    document.addEventListener('DOMContentLoaded', async () => {
        window.scrollTo(0, 0);
     
        if (window.innerWidth <= 767) {
            animateMobileElements();
        } else {
            animateElements();
        }
    });
    


function updateAnimation() {
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
    cave.style.bottom = `${caveBottom}%`;

    if (window.innerWidth <= 767) {
        document.querySelector('.zerocorp').style.opacity = 0.15 + scrollPercent * 0.55;
        document.querySelector('#immeubleA').style.left = `${23 - scrollPercent * 8}%`;
        document.querySelector('#immeubleC').style.left = `${16 - scrollPercent * 3.4}%`;
        document.querySelector('#immeubleB').style.right = `${10 - scrollPercent * 11.66}%`;
        document.querySelector('#immeubleD').style.right = `${18 - scrollPercent * 6.33}%`;
        document.querySelector('#newLayer').style.bottom = `${7 - scrollPercent * -1}%`;
        document.querySelector('.cables').style.right = `-${70 - scrollPercent * 50}%`;
        document.querySelector('.custom-element').style.bottom = `${8 - scrollPercent * -110}%`;   
    } else {  
    document.querySelector('.zerocorp').style.opacity = 0.15 + scrollPercent * 0.55;
    document.querySelector('#immeubleA').style.left = `${30 - scrollPercent * 20}%`;
    document.querySelector('#immeubleC').style.left = `${20 - scrollPercent * 15}%`;
    document.querySelector('#immeubleB').style.right = `${12 - scrollPercent * 11}%`;
    document.querySelector('#immeubleD').style.right = `${20 - scrollPercent * 15}%`;
    document.querySelector('#newLayer').style.bottom = `${-2 - scrollPercent * 5}%`;
    document.querySelector('.cables').style.right = `-${70 - scrollPercent * 50}%`;
    document.querySelector('.custom-element').style.bottom = `${8 - scrollPercent * -110}%`;
    }
    if (window.innerWidth <= 767) {
    document.querySelector('#immeubleA').style.bottom = `${7 - scrollPercent * -40}%`;
    document.querySelector('#immeubleC').style.bottom = `${7 - scrollPercent * -12}%`;
    document.querySelector('#immeubleB').style.bottom = `${7 - scrollPercent * -40}%`;
    document.querySelector('#immeubleD').style.bottom = `${7 - scrollPercent * -12}%`;
    } else { 
        document.querySelector('#immeubleA').style.bottom = `${5 - scrollPercent * -40}%`;
        document.querySelector('#immeubleC').style.bottom = `${5 - scrollPercent * -12}%`;
        document.querySelector('#immeubleB').style.bottom = `${5 - scrollPercent * -40}%`;
        document.querySelector('#immeubleD').style.bottom = `${5 - scrollPercent * -12}%`;
}
}
document.addEventListener('scroll', updateAnimation);
  

let animationPlayed = false;

window.addEventListener("scroll", () => {
    if (!animationPlayed && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
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
