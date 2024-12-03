"use strict";
var Marketplace;
(function (Marketplace) {
    class Present extends Marketplace.AudioScene {
        constructor(_music, _loopSound1, _loopSound2, _loopSound3, _genSound1, _genSound2, _genSound3, _genSound4) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.loopSound2 = _loopSound2;
            this.loopSound3 = _loopSound3;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.genSound4 = _genSound4;
            this.presentVolume = Marketplace.audioCtx.createGain();
            this.volume = 0;
            this.presentVolume.gain.value = this.volume;
            this.setupSound();
        }
        setupSound() {
            const music = Marketplace.audioCtx.createMediaElementSource(this.music);
            music.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
            const loop1 = Marketplace.audioCtx.createMediaElementSource(this.loopSound1);
            loop1.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
            const loop2 = Marketplace.audioCtx.createMediaElementSource(this.loopSound2);
            loop2.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
            const loop3 = Marketplace.audioCtx.createMediaElementSource(this.loopSound3);
            loop3.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
            const gen1 = Marketplace.audioCtx.createMediaElementSource(this.genSound1);
            gen1.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
            const gen2 = Marketplace.audioCtx.createMediaElementSource(this.genSound2);
            gen2.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
            const gen3 = Marketplace.audioCtx.createMediaElementSource(this.genSound3);
            gen3.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
            const gen4 = Marketplace.audioCtx.createMediaElementSource(this.genSound4);
            gen4.connect(this.presentVolume).connect(Marketplace.audioCtx.destination);
        }
        increaseVolume(_intervalId) {
            this.volume = this.volume + 0.1;
            this.presentVolume.gain.value = this.volume;
            if (this.volume >= 1) {
                this.presentVolume.gain.value = 1;
                clearInterval(_intervalId);
            }
        }
        decreaseVolume(_intervalId) {
            this.volume = this.volume - 0.1;
            this.presentVolume.gain.value = this.volume;
            if (this.volume <= 0) {
                this.presentVolume.gain.value = 0;
                clearInterval(_intervalId);
            }
        }
        playLoopSound() {
            this.music.loop = true;
            this.music.play();
            this.loopSound1.loop = true;
            this.loopSound1.play();
            this.loopSound2.loop = true;
            this.loopSound2.play();
            this.loopSound3.loop = true;
            this.loopSound3.play();
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
            }
        }
    }
    Marketplace.Present = Present;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Present.js.map