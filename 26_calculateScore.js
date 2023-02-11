//객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴
//반복문(for, while) 사용은 금지
//빈 배열을 입력받은 경우, 0을 리턴
function calculateScore(records, value) {
    const sum = records.reduce(function (acc, cur) {
        if (cur.animal === value) {
            return acc + cur.score;
        } else {
            return acc;
        }
    }, 0);

    return sum;
}