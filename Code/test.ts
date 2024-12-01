namespace Marketplace {
    const audioCtx: AudioContext = new AudioContext();
    const audio = new Audio("/AudioFiles/Past/MarketMusic_Past.wav");

    const source = audioCtx.createMediaElementSource(audio);
    source.connect(audioCtx.destination);

    audio.volume = 4; 
    audio.play();
}