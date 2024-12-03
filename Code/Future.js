"use strict";
var Marketplace;
(function (Marketplace) {
    class Future extends Marketplace.AudioScene {
        constructor(_music, _loopSound1, _genSound1, _genSound2, _genSound3) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.futureVolume = Marketplace.audioCtx.createGain();
            this.volume = 0;
            this.futureVolume.gain.value = this.volume;
            this.setupSound();
        }
        setupSound() {
            const music = Marketplace.audioCtx.createMediaElementSource(this.music);
            music.connect(this.futureVolume).connect(Marketplace.audioCtx.destination);
            const loop1 = Marketplace.audioCtx.createMediaElementSource(this.loopSound1);
            loop1.connect(this.futureVolume).connect(Marketplace.audioCtx.destination);
            const gen1 = Marketplace.audioCtx.createMediaElementSource(this.genSound1);
            gen1.connect(this.futureVolume).connect(Marketplace.audioCtx.destination);
            const gen2 = Marketplace.audioCtx.createMediaElementSource(this.genSound2);
            gen2.connect(this.futureVolume).connect(Marketplace.audioCtx.destination);
            const gen3 = Marketplace.audioCtx.createMediaElementSource(this.genSound3);
            gen3.connect(this.futureVolume).connect(Marketplace.audioCtx.destination);
        }
        increaseVolume(_intervalId) {
            this.volume = this.volume + 0.1;
            this.futureVolume.gain.value = this.volume;
            if (this.volume >= 1) {
                this.futureVolume.gain.value = 1;
                clearInterval(_intervalId);
            }
        }
        decreaseVolume(_intervalId) {
            this.volume = this.volume - 0.1;
            this.futureVolume.gain.value = this.volume;
            if (this.volume <= 0) {
                this.futureVolume.gain.value = 0;
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
            }
        }
    }
    Marketplace.Future = Future;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Future.js.map