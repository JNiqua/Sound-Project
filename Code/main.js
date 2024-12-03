"use strict";
var Marketplace;
(function (Marketplace) {
    window.addEventListener("load", handleLoad);
    const pastButton = document.getElementById("past");
    pastButton.addEventListener("click", playPast);
    const presentButton = document.getElementById("present");
    presentButton.addEventListener("click", playPresent);
    const futureButton = document.getElementById("future");
    futureButton.addEventListener("click", playFuture);
    const stopButton = document.getElementById("stop");
    stopButton.addEventListener("click", stopAudio);
    Marketplace.audioCtx = new AudioContext();
    Marketplace.audioCtx.suspend();
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
    let theRandomizer;
    function handleLoad(_event) {
        startAudio();
        setInterval(createRandomizer, 1000);
    }
    function createRandomizer() {
        const randomizer = Math.floor(Math.random() * 8);
        theRandomizer = randomizer;
        // console.log(randomizer);
    }
    function startAudio() {
        pastAudio.playLoopSound();
        setInterval(playRdmPast, 1000);
        presentAudio.playLoopSound();
        setInterval(playRdmPresent, 1000);
        futureAudio.playLoopSound();
        setInterval(playRdmFuture, 1000);
    }
    function playPast(_event) {
        Marketplace.audioCtx.resume();
        const a = setInterval(() => pastAudio.increaseVolume(a), 200);
        const b = setInterval(() => presentAudio.decreaseVolume(b), 200);
        const c = setInterval(() => futureAudio.decreaseVolume(c), 200);
    }
    function playPresent(_event) {
        Marketplace.audioCtx.resume();
        const a = setInterval(() => pastAudio.decreaseVolume(a), 200);
        const b = setInterval(() => presentAudio.increaseVolume(b), 200);
        const c = setInterval(() => futureAudio.decreaseVolume(c), 200);
    }
    function playFuture(_event) {
        Marketplace.audioCtx.resume();
        const a = setInterval(() => pastAudio.decreaseVolume(a), 200);
        const b = setInterval(() => presentAudio.decreaseVolume(b), 200);
        const c = setInterval(() => futureAudio.increaseVolume(c), 200);
    }
    function playRdmPast() {
        pastAudio.playGenSound(theRandomizer);
    }
    function playRdmPresent() {
        presentAudio.playGenSound(theRandomizer);
    }
    function playRdmFuture() {
        futureAudio.playGenSound(theRandomizer);
    }
    function stopAudio() {
        const a = setInterval(() => pastAudio.decreaseVolume(a), 100);
        const b = setInterval(() => presentAudio.decreaseVolume(b), 100);
        const c = setInterval(() => futureAudio.decreaseVolume(c), 100);
    }
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=main.js.map