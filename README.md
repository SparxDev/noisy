# Noisy
A JavaScript library that makes it much easier to create sounds with a certain frequency.

## Getting started
I know, I know, it's pretty obvious, but in order to use this wonderful library, you'll need to include the JavaScript file into your HTML document first. Luckily this isn't hard at all, you can either use the link to the [Noisy JavaScript file](https://sparxdev.github.io/noisy/noisy.js) or download [the repository](https://github.com/SparxDev/noisy) (or rather [just the file](https://sparxdev.github.io/noisy/noisy.js)) so that you can use this library offline.

Use the link:
```html
<script src="https://sparxdev.github.io/noisy/noisy.js"></script>
```

Download the file:
```html
<script src="yourpath/noisy.js"></script>
```

<br/><br/>

Okay, uh, including a JavaScript file is great and all, but you can't really use it yet. So, the next step is initializing the Noisy class (super easy, yo): 
```js
var noisy = new Noisy();
```

Now that you have initialized the class, you can start the sound with ``noisy.start()`` or stop it with ``noisy.stop()``.

After you have started the sound, you can listen to a never-ending peeping sound that has a frequency of 400 Hz. Pretty boring, huh? That's why you can also change the frequency, volume and even the wave type. The wave can either be ``sine``, ``square``, ``sawtooth`` or ``triangle``. Pretty cool, huh? The JavaScript code would then look like this:
```js
var noisy = new Noisy({
  frequency: '600',
  oscillator: 'square',
  volume: '0.1'
});
```

And, well, I guess that's it... Have fun!
