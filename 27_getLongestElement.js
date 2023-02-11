//문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴
//반복문(for, while) 사용은 금지
//가장 긴 문자열이 중복이 될 경우, 앞 쪽에 있는 요소를 리턴
//빈 배열을 입력받은 경우, 빈 문자열을 리턴
function getLongestElement(arr) {
    return arr.reduce(function (a, b) {
        if (a.length >= b.length) {
            return a;
        } else {
            return b;
        }
    }, '');
}