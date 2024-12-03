namespace Marketplace {
    const pastButton: HTMLInputElement = <HTMLInputElement>document.getElementById("past");
    pastButton.addEventListener("click", playPast);
    const presentButton: HTMLInputElement = <HTMLInputElement>document.getElementById("present");
    presentButton.addEventListener("click", playPresent);
    const futureButton: HTMLInputElement = <HTMLInputElement>document.getElementById("future");
    futureButton.addEventListener("click", playFuture);


    const pastLoopMusic: HTMLAudioElement = new Audio("/AudioFiles/Past/MarketMusic_Past.wav");
    const pastLoop: HTMLAudioElement = new Audio("/AudioFiles/Past/MainMedieval.wav");
    const pastGenChurch: HTMLAudioElement = new Audio("/AudioFiles/Past/Church.wav");
    const pastGenCoins: HTMLAudioElement = new Audio("/AudioFiles/Past/Coins1.wav");
    const pastGenCrow: HTMLAudioElement = new Audio("/AudioFiles/Past/Crow.wav");
    const pastGenFight: HTMLAudioElement = new Audio("/AudioFiles/Past/Fight.wav");
    const pastGenHammering: HTMLAudioElement = new Audio("/AudioFiles/Past/Hammerring.wav");
    const pastGenHorsecart: HTMLAudioElement = new Audio("/AudioFiles/Past/Horsecart.wav");
    const pastGenTavern: HTMLAudioElement = new Audio("/AudioFiles/Past/Tavern.wav");

    const pastAudio: AudioScene = new Past(pastLoopMusic, pastLoop, pastGenChurch, pastGenCoins, pastGenCrow, pastGenFight, pastGenHammering, pastGenHorsecart, pastGenTavern);


    const presentLoopMusic: HTMLAudioElement = new Audio("/AudioFiles/Present/MarketMusic_Present.wav");
    const presentLoopCrowd: HTMLAudioElement = new Audio("/AudioFiles/Present/crowd_loop.wav");
    const presentLoopWindleaves: HTMLAudioElement = new Audio("/AudioFiles/Present/windleaves_loop.wav");
    const presentLoopPigeons: HTMLAudioElement = new Audio("/AudioFiles/Present/pigeon_loop.wav");
    const presentGenCar: HTMLAudioElement = new Audio("/AudioFiles/Present/car1_stereo.wav");
    const presentGenTrain: HTMLAudioElement = new Audio("/AudioFiles/Present/train_stereo.wav");
    const presentGenSuperMarket1: HTMLAudioElement = new Audio("/AudioFiles/Present/supermarket1.wav");
    const presentGenSuperMarket2: HTMLAudioElement = new Audio("/AudioFiles/Present/supermarket2.wav");

    const presentAudio: AudioScene = new Present(presentLoopMusic, presentLoopCrowd, presentLoopWindleaves, presentLoopPigeons, presentGenCar, presentGenTrain, presentGenSuperMarket1, presentGenSuperMarket2);


    const futureLoopMusic: HTMLAudioElement = new Audio("/AudioFiles/Future/MarketMusic_Future.wav");
    const futureLoop: HTMLAudioElement = new Audio("/AudioFiles/Future/FutureMain.wav");
    const futureGenFight: HTMLAudioElement = new Audio("/AudioFiles/Future/FutureFIght.wav");
    const futureGenSpaceship1: HTMLAudioElement = new Audio("/AudioFiles/Future/Spaceship Flyby.wav");
    const futureGenspaceship2: HTMLAudioElement = new Audio("/AudioFiles/Future/SpaceshipDeep.wav");

    const futureAudio: AudioScene = new Future(futureLoopMusic, futureLoop, futureGenFight, futureGenSpaceship1, futureGenspaceship2);


    let theRandomizer: number = 0;
    setInterval(createRandomizer, 1000);
    console.log(theRandomizer);
    
    function playPast(): void {
        pastAudio.playLoopSound();
        setInterval(playRdmPast, 1000);
    }

    function playPresent(): void {
        presentAudio.playLoopSound();
        setInterval(playRdmPresent, 1000);
    }

    function playFuture(): void {
        futureAudio.playLoopSound();
        setInterval(playRdmFuture, 1000);
    }

    function createRandomizer(): void {
        const randomizer: number = Math.floor(Math.random()*8);
        theRandomizer = randomizer;
        console.log(randomizer);
    }

    function stopAudio(): void {
        window.location.reload();
    }

    function playRdmPast(): void {
        pastAudio.playGenSound(theRandomizer);
        pastButton.addEventListener("click", stopAudio);
        pastButton.value = "Stop";
    }

    function playRdmPresent(): void {
        presentAudio.playGenSound(theRandomizer);
        presentButton.addEventListener("click", stopAudio);
        presentButton.value = "Stop";
    }

    function playRdmFuture(): void {
        futureAudio.playGenSound(theRandomizer);
        futureButton.addEventListener("click", stopAudio);
        futureButton.value = "Stop";
    }



    export const audioCtx: AudioContext = new AudioContext();
    const music: HTMLAudioElement = new Audio("/AudioFiles/Past/MarketMusic_Past.wav");
    const loopi: HTMLAudioElement = new Audio("/AudioFiles/Present/pigeon_loop.wav");

    const musicVolume: GainNode = audioCtx.createGain();

    const track: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(music);
    track.connect(musicVolume).connect(audioCtx.destination);
    const track2: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(loopi);
    track2.connect(musicVolume).connect(audioCtx.destination);

    musicVolume.gain.value = 1;
    
    loopi.play();
    music.play();

    function crossfade(): void {

    }
}