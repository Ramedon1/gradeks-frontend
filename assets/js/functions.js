const getGradeColor = (grade) => {
    if (grade >= 5) return '#0ca139';
    if (grade >= 4) return '#ff9600';
    if (grade >= 3) return '#FC0';
    if (grade >= 2) return '#ff4d4d';
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


export {getGradeColor, getIconColor, applyTheme};
