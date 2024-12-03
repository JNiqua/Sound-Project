namespace Marketplace {
    export class Present extends AudioScene {
        loopSound1: HTMLAudioElement;
        loopSound2: HTMLAudioElement;
        loopSound3: HTMLAudioElement;
        genSound1: HTMLAudioElement;
        genSound2: HTMLAudioElement;
        genSound3: HTMLAudioElement;
        genSound4: HTMLAudioElement;

        presentVolume: GainNode;
        volume: number;

        constructor(_music: HTMLAudioElement, _loopSound1: HTMLAudioElement, _loopSound2: HTMLAudioElement, _loopSound3: HTMLAudioElement, _genSound1: HTMLAudioElement, _genSound2: HTMLAudioElement, _genSound3: HTMLAudioElement, _genSound4: HTMLAudioElement) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.loopSound2 = _loopSound2;
            this.loopSound3 = _loopSound3;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.genSound4 = _genSound4;

            this.presentVolume = audioCtx.createGain();
            this.volume = 0;
            this.presentVolume.gain.value = this.volume;

            this.setupSound();
        }

        setupSound(): void {
            
            const music: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.music);
            music.connect(this.presentVolume).connect(audioCtx.destination);
            const loop1: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.loopSound1);
            loop1.connect(this.presentVolume).connect(audioCtx.destination);
            const loop2: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.loopSound2);
            loop2.connect(this.presentVolume).connect(audioCtx.destination);
            const loop3: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.loopSound3);
            loop3.connect(this.presentVolume).connect(audioCtx.destination);
            const gen1: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound1);
            gen1.connect(this.presentVolume).connect(audioCtx.destination);
            const gen2: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound2);
            gen2.connect(this.presentVolume).connect(audioCtx.destination);
            const gen3: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound3);
            gen3.connect(this.presentVolume).connect(audioCtx.destination);
            const gen4: MediaElementAudioSourceNode = audioCtx.createMediaElementSource(this.genSound4);
            gen4.connect(this.presentVolume).connect(audioCtx.destination);
        }

        increaseVolume(_intervalId: number): void {
            this.volume = this.volume + 0.1;
            this.presentVolume.gain.value = this.volume;

            if(this.volume >= 1) {
                this.presentVolume.gain.value = 1;
                clearInterval(_intervalId);
            }
        }

        decreaseVolume(_intervalId: number): void {
            this.volume = this.volume - 0.1;
            this.presentVolume.gain.value = this.volume;

            if(this.volume <= 0) {
                this.presentVolume.gain.value = 0;
                clearInterval(_intervalId);
            }
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