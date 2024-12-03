"use strict";
var Marketplace;
(function (Marketplace) {
    class Past extends Marketplace.AudioScene {
        constructor(_music, _loopSound1, _genSound1, _genSound2, _genSound3, _genSound4, _genSound5, _genSound6, _genSound7) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.genSound4 = _genSound4;
            this.genSound5 = _genSound5;
            this.genSound6 = _genSound6;
            this.genSound7 = _genSound7;
            this.pastVolume = Marketplace.audioCtx.createGain();
            this.volume = 0;
            this.pastVolume.gain.value = this.volume;
            this.setupSound();
        }
        setupSound() {
            const music = Marketplace.audioCtx.createMediaElementSource(this.music);
            music.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const loop1 = Marketplace.audioCtx.createMediaElementSource(this.loopSound1);
            loop1.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const gen1 = Marketplace.audioCtx.createMediaElementSource(this.genSound1);
            gen1.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const gen2 = Marketplace.audioCtx.createMediaElementSource(this.genSound2);
            gen2.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const gen3 = Marketplace.audioCtx.createMediaElementSource(this.genSound3);
            gen3.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const gen4 = Marketplace.audioCtx.createMediaElementSource(this.genSound4);
            gen4.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const gen5 = Marketplace.audioCtx.createMediaElementSource(this.genSound5);
            gen5.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const gen6 = Marketplace.audioCtx.createMediaElementSource(this.genSound6);
            gen6.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
            const gen7 = Marketplace.audioCtx.createMediaElementSource(this.genSound7);
            gen7.connect(this.pastVolume).connect(Marketplace.audioCtx.destination);
        }
        increaseVolume(_intervalId) {
            this.volume = this.volume + 0.1;
            this.pastVolume.gain.value = this.volume;
            if (this.volume >= 1) {
                this.pastVolume.gain.value = 1;
                clearInterval(_intervalId);
            }
        }
        decreaseVolume(_intervalId) {
            this.volume = this.volume - 0.1;
            this.pastVolume.gain.value = this.volume;
            if (this.volume <= 0) {
                this.pastVolume.gain.value = 0;
                clearInterval(_intervalId);
            }
        }
        playLoopSound() {
            this.music.loop = true;
            this.music.play();
            this.loopSound1.loop = true;
            this.loopSound1.play();
        }
        playGenSound(_randomizer) {
            switch (_randomizer) {
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
    Marketplace.Past = Past;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Past.js.map