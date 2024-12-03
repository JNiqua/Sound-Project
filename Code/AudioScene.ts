namespace Marketplace {
    export abstract class AudioScene {
        music: HTMLAudioElement;
        

        constructor(_music: HTMLAudioElement) {
            this.music = _music;
            
        }

        increaseVolume(_intervalId: number): void {}

        decreaseVolume(_intervalId: number): void {}
        
        playLoopSound(): void {}

        playGenSound(_randomizer: number): void {}

        pauseAudio(): void {}
    }
}