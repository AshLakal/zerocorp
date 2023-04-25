<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>ZeroCorp.io</title>
    <link rel="stylesheet" href="zerocorp.css">
</head>
<body>
    <div class="web-container">
        <div class="container">
            <div class="bg"></div>
            <div class="moon"></div>
            <img class="zerocorp" src="zerocorp.png" alt="zerocorp">
            <img class="building" id="newLayer" src="newLayer.png" alt="newLayer">
            <h1 class="floating-title">ZERO CORP</h1>
            <img class="building" id="immeubleC" src="immeubleC.png" alt="immeubleC">
            <img class="building" id="immeubleD" src="immeubleD.png" alt="immeubleD">
            <img class="building" id="immeubleA" src="immeubleA.png" alt="immeubleA">
            <img class="building" id="immeubleB" src="immeubleB.png" alt="immeubleB">
            <img class="custom-element" src="custom-element.png" alt="custom-element">
            <img class="cave" src="cave.png" alt="cave">
            <img class="cables" src="cables.png" alt="cables">
            <a class="contact-link" href="mailto:miniconi.marius@gmail.com">Contact</a>
            <div class="button-image-wrapper">
                <img class="ordi" src="ordi.png" alt="ordi" style="display: none;">
                <div id="youtube-button" class="hidden">
                    <button onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');">
                        <img src="button.png" alt="Watch on YouTube">
                    </button>
                </div>
            </div>
        </div>
    </div>
    <script>
        const youtubeButton = document.getElementById("youtube-button");

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        setTimeout(() => {
            youtubeButton.classList.remove("hidden");
        }, 1500);
    }
});
    </script>
    <script src="zerocorp.js"></script>
</body>
</html>
