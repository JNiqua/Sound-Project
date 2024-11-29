"use strict";
var Marketplace;
(function (Marketplace) {
    // const audio = new Audio("/AudioFiles/MarketMusic_Past.wav");
    // audio.loop = true;
    // audio.play();
    const pastMusic = new Audio("/AudioFiles/MarketMusic_Past.wav");
    const pastLoopAudio = new Audio("/AudioFiles/pigeon_loop.wav");
    const pastGenAudio = new Audio("/AudioFiles/car1_stereo.wav");
    const pastAudio = new Marketplace.Past(pastMusic, pastLoopAudio, pastGenAudio);
    pastAudio.playSound();
    setInterval(playUwU, 1000);
    let theRandomizer = 0;
    console.log(theRandomizer);
    function createRandomizer() {
        let randomizer = 1 /*Math.floor(Math.random()*10)*/;
        console.log(randomizer);
        theRandomizer = randomizer;
    }
    function playUwU() {
        createRandomizer();
        pastAudio.playGenSound(theRandomizer);
    }
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=main.js.map