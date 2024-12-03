namespace Marketplace {
    export abstract class AudioScene {
        music: HTMLAudioElement;
        

        constructor(_music: HTMLAudioElement) {
            this.music = _music;
            
        }

        increaseVolume(): void {}

        decreaseVolume(): void {}
        
        playLoopSound(): void {}

        playGenSound(_randomizer: number): void {}
    }
}