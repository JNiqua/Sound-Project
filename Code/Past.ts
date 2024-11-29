namespace Marketplace {
    export class Past extends AudioScene {

        constructor(_music: HTMLAudioElement, _loopSound: HTMLAudioElement, _genSound1: HTMLAudioElement/*, _genSound2: HTMLAudioElement, _genSound3: HTMLAudioElement, _genSound4: HTMLAudioElement*/) {
            super(_music, _loopSound, _genSound1/*, _genSound2, _genSound3, _genSound4*/);
        }

        playSound(): void {
            this.music.loop = true;
            this.music.play();
            this.loopSound.loop = true;
            this.loopSound.play();
        }

        playGenSound(_randomizer): void {
            if(_randomizer = 1) {
                this.genSound1.play();
            }
        }
    }
}