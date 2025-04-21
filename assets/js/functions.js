const getGradeColor = (grade) => {
    if (grade >= 5) return '#0ca139';
    if (grade >= 4) return '#ff9600';
    if (grade >= 3) return '#FFCC00FF';
    if (grade >= 2) return '#ff4d4d';
    if (grade >= 1) return '#ff4d4d';
    if (grade >= 0) return '#0ca139';
    if (grade === 'Зачёт') return '#0ca139';
    if (grade === 'Незачёт') return '#ff4d4d';
    return '#000';
};

const style = getComputedStyle(document.body);

function getIconColor(property) {
    const color = style.getPropertyValue(property);
    return color ? color.trim() : '#000';
}


function applyTheme(themeName) {
    const root = document.documentElement;

    root.classList.remove('theme-white', 'theme-black', 'theme-telegram');

    if (themeName === 'white') {
        root.classList.add('theme-white');
        setData('theme', 'white');
    } else if (themeName === 'black') {
        root.classList.add('theme-black');
        setData('theme', 'black');
    } else if (themeName === 'telegram') {
        root.classList.add('theme-telegram');
        setData('theme', 'telegram');
    }
}

function hapticFeedbackCelection() {
    window.Telegram.WebApp.HapticFeedback.selectionChanged();
}

function hexToRgba(hex, alpha) {
    const parsedHex = hex.replace('#', '');
    const bigint = parseInt(parsedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function adjustColorBrightness(hex, percent) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r = Math.max(0, Math.min(255, r + percent));
    g = Math.max(0, Math.min(255, g + percent));
    b = Math.max(0, Math.min(255, b + percent));
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export {getGradeColor, getIconColor, applyTheme, hapticFeedbackCelection, hexToRgba, adjustColorBrightness};
