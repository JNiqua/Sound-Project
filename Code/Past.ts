namespace Marketplace {
    export class Past extends AudioScene {
        loopSound1: HTMLAudioElement;
        genSound1: HTMLAudioElement;
        genSound2: HTMLAudioElement;
        genSound3: HTMLAudioElement;
        genSound4: HTMLAudioElement;
        genSound5: HTMLAudioElement;
        genSound6: HTMLAudioElement;
        genSound7: HTMLAudioElement;
        pastVolume: GainNode = audioCtx.createGain();

        constructor(_music: HTMLAudioElement, _loopSound1: HTMLAudioElement, _genSound1: HTMLAudioElement, _genSound2: HTMLAudioElement, _genSound3: HTMLAudioElement, _genSound4: HTMLAudioElement, _genSound5: HTMLAudioElement, _genSound6: HTMLAudioElement, _genSound7: HTMLAudioElement) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.genSound4 = _genSound4;
            this.genSound5 = _genSound5;
            this.genSound6 = _genSound6;
            this.genSound7 = _genSound7;

            this.setupSound();
        }

        setupSound(): void {
            
            const music: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.music);
            music.connect(this.pastVolume).connect(audioCtx.destination);
            const loop1: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.loopSound1);
            loop1.connect(this.pastVolume).connect(audioCtx.destination);
            const gen1: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound1);
            gen1.connect(this.pastVolume).connect(audioCtx.destination);
            const gen2: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound2);
            gen2.connect(this.pastVolume).connect(audioCtx.destination);
            const gen3: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound3);
            gen3.connect(this.pastVolume).connect(audioCtx.destination);
            const gen4: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound4);
            gen4.connect(this.pastVolume).connect(audioCtx.destination);
            const gen5: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound5);
            gen5.connect(this.pastVolume).connect(audioCtx.destination);
            const gen6: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound6);
            gen6.connect(this.pastVolume).connect(audioCtx.destination);
            const gen7: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound7);
            gen7.connect(this.pastVolume).connect(audioCtx.destination);
        }

        adjustVolume(): void {
            let volume: number = 1;
            this.pastVolume.gain.value = volume;
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
                case 4:
                    this.genSound4.play();
                case 5:
                    this.genSound5.play();
                case 6:
                    this.genSound6.play();
                case 7:
                    this.genSound7.play();
                            
            }
        }
    }
}