namespace Marketplace {
    // window.addEventListener("click", handleLoad);
    // window.addEventListener("click", asfd);

    const startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
    startButton.addEventListener("click", handleLoad);
    const pastButton: HTMLInputElement = <HTMLInputElement>document.getElementById("past");
    pastButton.addEventListener("click", playPast);
    const presentButton: HTMLInputElement = <HTMLInputElement>document.getElementById("present");
    presentButton.addEventListener("click", playPresent);
    const futureButton: HTMLInputElement = <HTMLInputElement>document.getElementById("future");
    futureButton.addEventListener("click", playFuture);
    const stopButton: HTMLInputElement = <HTMLInputElement>document.getElementById("stop");
    stopButton.addEventListener("click", stopAudio);
    
    export let audioCtx: AudioContext;

    let pastAudio: AudioScene;
    let presentAudio: AudioScene;
    let futureAudio: AudioScene;


    
    
    
    const pastLoopMusic: HTMLAudioElement = new Audio("/AudioFiles/Past/MarketMusic_Past.wav");
    const pastLoop: HTMLAudioElement = new Audio("/AudioFiles/Past/MainMedieval.wav");
    const pastGenChurch: HTMLAudioElement = new Audio("/AudioFiles/Past/Church.wav");
    const pastGenCoins: HTMLAudioElement = new Audio("/AudioFiles/Past/Coins1.wav");
    const pastGenCrow: HTMLAudioElement = new Audio("/AudioFiles/Past/Crow.wav");
    const pastGenFight: HTMLAudioElement = new Audio("/AudioFiles/Past/Fight.wav");
    const pastGenHammering: HTMLAudioElement = new Audio("/AudioFiles/Past/Hammerring.wav");
    const pastGenHorsecart: HTMLAudioElement = new Audio("/AudioFiles/Past/Horsecart.wav");
    const pastGenTavern: HTMLAudioElement = new Audio("/AudioFiles/Past/Tavern.wav");
    
    // const pastAudio: AudioScene = new Past(pastLoopMusic, pastLoop, pastGenChurch, pastGenCoins, pastGenCrow, pastGenFight, pastGenHammering, pastGenHorsecart, pastGenTavern);
    
    
    const presentLoopMusic: HTMLAudioElement = new Audio("/AudioFiles/Present/MarketMusic_Present.wav");
    const presentLoopCrowd: HTMLAudioElement = new Audio("/AudioFiles/Present/crowd_loop.wav");
    const presentLoopWindleaves: HTMLAudioElement = new Audio("/AudioFiles/Present/windleaves_loop.wav");
    const presentLoopPigeons: HTMLAudioElement = new Audio("/AudioFiles/Present/pigeon_loop.wav");
    const presentGenCar: HTMLAudioElement = new Audio("/AudioFiles/Present/car1_stereo.wav");
    const presentGenTrain: HTMLAudioElement = new Audio("/AudioFiles/Present/train_stereo.wav");
    const presentGenSuperMarket1: HTMLAudioElement = new Audio("/AudioFiles/Present/supermarket1.wav");
    const presentGenSuperMarket2: HTMLAudioElement = new Audio("/AudioFiles/Present/supermarket2.wav");
    
    // const presentAudio: AudioScene = new Present(presentLoopMusic, presentLoopCrowd, presentLoopWindleaves, presentLoopPigeons, presentGenCar, presentGenTrain, presentGenSuperMarket1, presentGenSuperMarket2);
    
    
    const futureLoopMusic: HTMLAudioElement = new Audio("/AudioFiles/Future/MarketMusic_Future.wav");
    const futureLoop: HTMLAudioElement = new Audio("/AudioFiles/Future/FutureMain.wav");
    const futureGenFight: HTMLAudioElement = new Audio("/AudioFiles/Future/FutureFIght.wav");
    const futureGenSpaceship1: HTMLAudioElement = new Audio("/AudioFiles/Future/Spaceship Flyby.wav");
    const futureGenspaceship2: HTMLAudioElement = new Audio("/AudioFiles/Future/SpaceshipDeep.wav");
    
    // const futureAudio: AudioScene = new Future(futureLoopMusic, futureLoop, futureGenFight, futureGenSpaceship1, futureGenspaceship2);
    
    let theRandomizer: number;
    
    
    function handleLoad(_event: Event): void {
        asfd();
        startAudio();
        setInterval(createRandomizer, 1000);
    }
    
    function asfd(): void {
        audioCtx = new AudioContext();

        pastAudio = new Past(pastLoopMusic, pastLoop, pastGenChurch, pastGenCoins, pastGenCrow, pastGenFight, pastGenHammering, pastGenHorsecart, pastGenTavern);
        presentAudio = new Present(presentLoopMusic, presentLoopCrowd, presentLoopWindleaves, presentLoopPigeons, presentGenCar, presentGenTrain, presentGenSuperMarket1, presentGenSuperMarket2);
        futureAudio = new Future(futureLoopMusic, futureLoop, futureGenFight, futureGenSpaceship1, futureGenspaceship2);
    }

    function createRandomizer(): void {
        const randomizer: number = Math.floor(Math.random()*8);
        theRandomizer = randomizer;
        // console.log(randomizer);
    }

    function startAudio(): void {
        pastAudio.playLoopSound();
        setInterval(playRdmPast, 1000);
        presentAudio.playLoopSound();
        setInterval(playRdmPresent, 1000);
        futureAudio.playLoopSound();
        setInterval(playRdmFuture, 1000);
    }    

    function playPast(_event: Event): void {
        audioCtx.resume();
        const a = setInterval(() => pastAudio.increaseVolume(a), 200);
        const b = setInterval(() => presentAudio.decreaseVolume(b), 200);
        const c = setInterval(() => futureAudio.decreaseVolume(c), 200);
    }

    function playPresent(_event: Event): void {
        audioCtx.resume();
        const a = setInterval(() => pastAudio.decreaseVolume(a), 200);
        const b = setInterval(() => presentAudio.increaseVolume(b), 200);
        const c = setInterval(() => futureAudio.decreaseVolume(c), 200);
    }

    function playFuture(_event: Event): void {
        audioCtx.resume();
        const a = setInterval(() => pastAudio.decreaseVolume(a), 200);
        const b = setInterval(() => presentAudio.decreaseVolume(b), 200);
        const c = setInterval(() => futureAudio.increaseVolume(c), 200);
    }

    function playRdmPast(): void {
        pastAudio.playGenSound(theRandomizer);
    }
    
    function playRdmPresent(): void {
        presentAudio.playGenSound(theRandomizer);
    }
    
    function playRdmFuture(): void {
        futureAudio.playGenSound(theRandomizer);
    }
    
    function stopAudio(): void {
        const a = setInterval(() => pastAudio.decreaseVolume(a), 100);
        const b = setInterval(() => presentAudio.decreaseVolume(b), 100);
        const c = setInterval(() => futureAudio.decreaseVolume(c), 100);
    }
}