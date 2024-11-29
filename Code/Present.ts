namespace Marketplace {
    export class Present extends AudioScene {
        loopSound1: HTMLAudioElement;
        loopSound2: HTMLAudioElement;
        loopSound3: HTMLAudioElement;
        genSound1: HTMLAudioElement;
        genSound2: HTMLAudioElement;
        genSound3: HTMLAudioElement;
        genSound4: HTMLAudioElement;

        constructor(_music: HTMLAudioElement, _loopSound1: HTMLAudioElement, _loopSound2: HTMLAudioElement, _loopSound3: HTMLAudioElement, _genSound1: HTMLAudioElement, _genSound2: HTMLAudioElement, _genSound3: HTMLAudioElement, _genSound4: HTMLAudioElement) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.loopSound2 = _loopSound2;
            this.loopSound3 = _loopSound3;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.genSound4 = _genSound4;
        }

        playLoopSound(): void {
            this.music.loop = true;
            this.music.play();
            this.loopSound1.loop = true;
            this.loopSound1.play();
            this.loopSound2.loop = true;
            this.loopSound2.play();
            this.loopSound3.loop = true;
            this.loopSound3.play();
        }

        playGenSound(_randomizer: number): void {
            switch(_randomizer) {
                case 1:
                    this.genSound1.play();
                case 2:
                    this.genSound2.play();
                case 3:
                    this.genSound3.play();    
                case 4:
                    this.genSound4.play();
                            


            }
        }
    }
}