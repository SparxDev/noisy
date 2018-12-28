function Noisy(values = {}) {
  this.frequency = values.frequency != null ? values.frequency : noisy.frequency;
  this.volume = values.volume != null ? values.volume : noisy.volume;
  this.oscillator = values.oscillator == 'sine' || values.oscillator == 'square' || values.oscillator == 'sawtooth' || values.oscillator == 'triangle' ? values.oscillator : noisy.oscillator;

  this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  this.oscillatorNode = this.audioCtx.createOscillator();
  this.gainNode = this.audioCtx.createGain();

  this.oscillatorNode.connect(this.gainNode);
  this.gainNode.connect(this.audioCtx.destination);
  this.oscillatorNode.type = this.oscillator;
  this.oscillatorNode.start();
  this.oscillatorNode.frequency.value = this.frequency;
  this.gainNode.gain.value = 0;
}

Noisy.prototype.start = function() {
  this.gainNode.gain.value = this.volume;
}

Noisy.prototype.stop = function() {
  this.gainNode.gain.value = 0;
}

var noisy = {
  frequency: 400,
  volume: 0.8,
  oscillator: 'sine',
  defaultValues: function(defValues) {
    if (defValues.frequency != null) this.frequency = defValues.frequency;
    if (defValues.oscillator != null) this.oscillator = defValues.oscillator;
  }
}