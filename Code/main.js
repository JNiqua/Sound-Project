"use strict";
var Marketplace;
(function (Marketplace) {
    const pastButton = document.getElementById("past");
    pastButton.addEventListener("click", playPast);
    const presentButton = document.getElementById("present");
    presentButton.addEventListener("click", playPresent);
    const futureButton = document.getElementById("future");
    futureButton.addEventListener("click", playFuture);
    const pastLoopMusic = new Audio("/AudioFiles/Past/MarketMusic_Past.wav");
    const pastLoop = new Audio("/AudioFiles/Past/MainMedieval.wav");
    const pastGenChurch = new Audio("/AudioFiles/Past/Church.wav");
    const pastGenCoins = new Audio("/AudioFiles/Past/Coins1.wav");
    const pastGenCrow = new Audio("/AudioFiles/Past/Crow.wav");
    const pastGenFight = new Audio("/AudioFiles/Past/Fight.wav");
    const pastGenHammering = new Audio("/AudioFiles/Past/Hammerring.wav");
    const pastGenHorsecart = new Audio("/AudioFiles/Past/Horsecart.wav");
    const pastGenTavern = new Audio("/AudioFiles/Past/Tavern.wav");
    const pastAudio = new Marketplace.Past(pastLoopMusic, pastLoop, pastGenChurch, pastGenCoins, pastGenCrow, pastGenFight, pastGenHammering, pastGenHorsecart, pastGenTavern);
    const presentLoopMusic = new Audio("/AudioFiles/Present/MarketMusic_Present.wav");
    const presentLoopCrowd = new Audio("/AudioFiles/Present/crowd_loop.wav");
    const presentLoopWindleaves = new Audio("/AudioFiles/Present/windleaves_loop.wav");
    const presentLoopPigeons = new Audio("/AudioFiles/Present/pigeon_loop.wav");
    const presentGenCar = new Audio("/AudioFiles/Present/car1_stereo.wav");
    const presentGenTrain = new Audio("/AudioFiles/Present/train_stereo.wav");
    const presentGenSuperMarket1 = new Audio("/AudioFiles/Present/supermarket1.wav");
    const presentGenSuperMarket2 = new Audio("/AudioFiles/Present/supermarket2.wav");
    const presentAudio = new Marketplace.Present(presentLoopMusic, presentLoopCrowd, presentLoopWindleaves, presentLoopPigeons, presentGenCar, presentGenTrain, presentGenSuperMarket1, presentGenSuperMarket2);
    const futureLoopMusic = new Audio("/AudioFiles/Future/MarketMusic_Future.wav");
    const futureLoop = new Audio("/AudioFiles/Future/FutureMain.wav");
    const futureGenFight = new Audio("/AudioFiles/Future/FutureFIght.wav");
    const futureGenSpaceship1 = new Audio("/AudioFiles/Future/Spaceship Flyby.wav");
    const futureGenspaceship2 = new Audio("/AudioFiles/Future/SpaceshipDeep.wav");
    const futureAudio = new Marketplace.Future(futureLoopMusic, futureLoop, futureGenFight, futureGenSpaceship1, futureGenspaceship2);
    let theRandomizer = 0;
    setInterval(createRandomizer, 1000);
    console.log(theRandomizer);
    function playPast() {
        pastAudio.playLoopSound();
        setInterval(playRdmPast, 1000);
    }
    function playPresent() {
        presentAudio.playLoopSound();
        setInterval(playRdmPresent, 1000);
    }
    function playFuture() {
        futureAudio.playLoopSound();
        setInterval(playRdmFuture, 1000);
    }
    function createRandomizer() {
        const randomizer = Math.floor(Math.random() * 8);
        theRandomizer = randomizer;
        console.log(randomizer);
    }
    function stopAudio() {
        window.location.reload();
    }
    function playRdmPast() {
        pastAudio.playGenSound(theRandomizer);
        pastButton.addEventListener("click", stopAudio);
        pastButton.value = "Stop";
    }
    function playRdmPresent() {
        presentAudio.playGenSound(theRandomizer);
        presentButton.addEventListener("click", stopAudio);
        presentButton.value = "Stop";
    }
    function playRdmFuture() {
        futureAudio.playGenSound(theRandomizer);
        futureButton.addEventListener("click", stopAudio);
        futureButton.value = "Stop";
    }
    Marketplace.audioCtx = new AudioContext();
    const music = new Audio("/AudioFiles/Past/MarketMusic_Past.wav");
    const loopi = new Audio("/AudioFiles/Present/pigeon_loop.wav");
    const musicVolume = Marketplace.audioCtx.createGain();
    const track = Marketplace.audioCtx.createMediaElementSource(music);
    track.connect(musicVolume).connect(Marketplace.audioCtx.destination);
    const track2 = Marketplace.audioCtx.createMediaElementSource(loopi);
    track2.connect(musicVolume).connect(Marketplace.audioCtx.destination);
    musicVolume.gain.value = 1;
    loopi.play();
    music.play();
    function crossfade() {
    }
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=main.js.map