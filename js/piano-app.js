//Con tag de teclas asignadas

const piano = document.getElementById('piano');
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const octaves = [2, 3, 4, 5, 6];

const keyMap = {
    'z': 'C2', 's': 'C#2', 'x': 'D2', 'd': 'D#2', 'c': 'E2', 'v': 'F2', 'g': 'F#2', 
    'b': 'G2', 'h': 'G#2', 'n': 'A2', 'j': 'A#2', 'm': 'B2', 'q': 'C3', '2': 'C#3', 
    'w': 'D3', '3': 'D#3', 'e': 'E3', 'r': 'F3', '5': 'F#3', 't': 'G3', '6': 'G#3', 
    'y': 'A3', '7': 'A#3', 'u': 'B3', 'i': 'C4', '9': 'C#4', 'o': 'D4', '0': 'D#4', 
    'p': 'E4'
};

// Reverse keyMap to easily find the key label by note
const noteToKeyMap = {};
for (const [key, note] of Object.entries(keyMap)) {
    noteToKeyMap[note] = key;
}

octaves.forEach(octave => {
    notes.forEach(note => {
        const key = document.createElement('div');
        key.classList.add('key');
        if (note.includes('#')) {
            key.classList.add('black');
        } else {
            key.classList.add('white');
        }
        const noteName = `${note}${octave}`;
        key.setAttribute('data-note', noteName);
        
        // Add the note name and the keyboard key as a label
        const keyLabel = document.createElement('span');
        keyLabel.classList.add('key-label');
        keyLabel.innerHTML = `${noteName} <span class="keyboard">${noteToKeyMap[noteName] ? `(${noteToKeyMap[noteName]})` : ''}</span>`;
        key.appendChild(keyLabel);


        piano.appendChild(key);
    });
});

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        sampler.triggerAttackRelease(note, '8n');
    });
});



// Cargar las muestras de piano (5 octavas)
const sampler = new Tone.Sampler({
    urls: {
        "C1": "C1.mp3",
        "C2": "C2.mp3",
        "C3": "C3.mp3",
        "C4": "C4.mp3",
        "C5": "C5.mp3",
        "C6": "C6.mp3",
        "C7": "C7.mp3",
        "D#1": "Ds1.mp3",
        "D#2": "Ds2.mp3",
        "D#3": "Ds3.mp3",
        "D#4": "Ds4.mp3",
        "D#5": "Ds5.mp3",
        "D#6": "Ds6.mp3",
        "D#7": "Ds7.mp3",
        "F#1": "Fs1.mp3",
        "F#2": "Fs2.mp3",
        "F#3": "Fs3.mp3",
        "F#4": "Fs4.mp3",
        "F#5": "Fs5.mp3",
        "F#6": "Fs6.mp3",
        "F#7": "Fs7.mp3",
        "A1": "A1.mp3",
        "A2": "A2.mp3",
        "A3": "A3.mp3",
        "A4": "A4.mp3",
        "A5": "A5.mp3",
        "A6": "A6.mp3",
        "A7": "A7.mp3",
    },
    baseUrl: "assets/samples/",
    release: 1, // Ajusta el release para que el sonido no se corte abruptamente
    attack: 0.01 // Ajusta el ataque para evitar un sonido muy brusco al inicio
}).toDestination();






document.addEventListener('keydown', (event) => {
    const note = keyMap[event.key];
    if (note) {
        const keyElement = [...document.querySelectorAll('.key')].find(key => key.getAttribute('data-note') === note);
        if (keyElement) {
            keyElement.click(); // Simula el clic en la tecla correspondiente
            keyElement.classList.add('active');
            setTimeout(() => keyElement.classList.remove('active'), 150); // Ajustar el tiempo de acuerdo a la duración del efecto deseado
        }
    }
});


// Función para mostrar u ocultar las etiquetas
function toggleLabels() {
    const labels = document.querySelectorAll('.keyboard');
    labels.forEach(label => {
        label.style.display = label.style.display === 'none' ? 'block' : 'none';
    });
}

// Asignar el evento de clic al botón
const toggleLabelsButton = document.getElementById('toggleLabelsButton');
toggleLabelsButton.addEventListener('click', toggleLabels);