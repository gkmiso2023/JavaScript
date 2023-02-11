//학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴
//남학생들의 정보는 리턴하는 배열에서 제외
//'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
//반복문(for, while) 사용은 금지
//배열을 리턴
//배열로 되어 있는 학생들의 성적을 number 타입의 평균값으로 변형
function studentReports(students) {
    const onlyFemales = students.filter(function (el) {
        return el.gender === 'female';
    });

    return onlyFemales.map(function (el) {
        const sum = el.grades.reduce(function (acc, cur) {
            return acc + cur;
        }, 0);
        const avg = sum / el.grades.length;

        el.grades = avg;
        return el;
    });
}