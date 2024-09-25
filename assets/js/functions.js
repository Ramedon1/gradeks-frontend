const getGradeColor = (grade) => {
    if (grade >= 5) return '#116A28';
    if (grade >= 4) return '#FF9500';
    if (grade >= 3) return '#FC0';
    if (grade >= 2) return '#D16262';
    return '#000';
};


export default getGradeColor;
