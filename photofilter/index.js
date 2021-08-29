const inputs = document.querySelectorAll('.filters input');
const presets = document.querySelectorAll('.preset');
let objPresets = {
    'default-settings': { spacing: 0, blur: 0, saturate: 100, contrast: 100, sepia: 0, brightness: 100 },
    'image-preset-0': { saturate: 100, contrast: 100, sepia: 0, brightness: 100 },
    'image-preset-1': { saturate: 60, contrast: 90, sepia: 0, brightness: 100 },
    'image-preset-2': { saturate: 100, contrast: 100, sepia: 60, brightness: 85 },
    'image-preset-3': { saturate: 0, contrast: 100, sepia: 50, brightness: 100 },
    'image-preset-4': { saturate: 100, contrast: 160, sepia: 30, brightness: 100 },
    'image-preset-5': { saturate: 35, contrast: 120, sepia: 50, brightness: 70 }
};

const resetButton = document.querySelector('.reset')

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

function reset() {
    let settings = objPresets['default-settings'];
    let { spacing, blur, saturate, contrast, sepia, brightness } = settings;

    document.documentElement.style.setProperty(`--spacing`, spacing + 'px');
    document.documentElement.style.setProperty(`--blur`, blur + 'px');
    document.getElementById('spacing').value = spacing;
    document.getElementById('blur').value = blur;

    document.documentElement.style.setProperty(`--saturate`, saturate + '%');
    document.documentElement.style.setProperty(`--contrast`, contrast + '%');
    document.documentElement.style.setProperty(`--sepia`, sepia + '%');
    document.documentElement.style.setProperty(`--brightness`, brightness + '%');
    document.getElementById('saturate').value = saturate;
    document.getElementById('contrast').value = contrast;
    document.getElementById('sepia').value = sepia;
    document.getElementById('brightness').value = brightness;
};

function changePreset() {
    reset();
    let preset = objPresets[this.id];
    let { saturate, contrast, sepia, brightness } = preset;

    document.documentElement.style.setProperty(`--saturate`, saturate + '%');
    document.documentElement.style.setProperty(`--contrast`, contrast + '%');
    document.documentElement.style.setProperty(`--sepia`, sepia + '%');
    document.documentElement.style.setProperty(`--brightness`, brightness + '%');
    document.getElementById('saturate').value = saturate;
    document.getElementById('contrast').value = contrast;
    document.getElementById('sepia').value = sepia;
    document.getElementById('brightness').value = brightness;
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

presets.forEach(preset => preset.addEventListener('click', changePreset));
resetButton.addEventListener('click', reset);
