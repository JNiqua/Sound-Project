namespace Marketplace {
    export abstract class AudioScene {
        music: HTMLAudioElement;
        

        constructor(_music: HTMLAudioElement) {
            this.music = _music;
            
        }

        playLoopSound(): void {}

        playGenSound(_randomizer: number): void {}
    }
}