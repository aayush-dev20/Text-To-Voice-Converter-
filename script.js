let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

// Load voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    // Set default
    if (voices.length > 0) {
        speech.voice = voices[0];
        speech.lang = voices[0].lang;
    }

    // Add voices to dropdown
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(`${voice.name} (${voice.lang})`, i);
    });
};

// Change selected voice + language
voiceSelect.addEventListener("change", () => {
    let selectedVoice = voices[voiceSelect.value];
    speech.voice = selectedVoice;
    speech.lang = selectedVoice.lang;   // IMPORTANT FIX
});

// Speak button
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
