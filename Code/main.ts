namespace Marketplace {
    // const audio = new Audio("/AudioFiles/MarketMusic_Past.wav");
    // audio.loop = true;
    // audio.play();

    const pastMusic: HTMLAudioElement = new Audio("/AudioFiles/MarketMusic_Past.wav");
    const pastLoopAudio: HTMLAudioElement = new Audio("/AudioFiles/pigeon_loop.wav");
    const pastGenAudio: HTMLAudioElement = new Audio("/AudioFiles/car1_stereo.wav")

    const pastAudio: AudioScene = new Past(pastMusic, pastLoopAudio, pastGenAudio);

    pastAudio.playSound();
    setInterval(playUwU, 1000);
    let theRandomizer: number = 0;
    console.log(theRandomizer);
    
    function createRandomizer(): void {
        let randomizer: number = 1/*Math.floor(Math.random()*10)*/;
        console.log(randomizer);
        theRandomizer = randomizer;
    }
    
    function playUwU(): void {
        createRandomizer();
        pastAudio.playGenSound(theRandomizer);

    }
}