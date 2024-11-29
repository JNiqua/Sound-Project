namespace Marketplace {
    export class Future extends AudioScene {
        loopSound1: HTMLAudioElement;
        genSound1: HTMLAudioElement;
        genSound2: HTMLAudioElement;
        genSound3: HTMLAudioElement;

        constructor(_music: HTMLAudioElement, _loopSound1: HTMLAudioElement, _genSound1: HTMLAudioElement, _genSound2: HTMLAudioElement, _genSound3: HTMLAudioElement) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
        }

        playLoopSound(): void {
            this.music.loop = true;
            this.music.play();
            this.loopSound1.loop = true;
            this.loopSound1.play();
        }

        playGenSound(_randomizer: number): void {
            switch(_randomizer) {
                case 1:
                    this.genSound1.play();
                case 2:
                    this.genSound2.play();
                case 3:
                    this.genSound3.play();    
            }
        }
    }
}