//문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴
//반복문(for, while) 사용은 금지
//빈 배열을 입력받은 경우, 0을 리턴
function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr.reduce(function (acc, cur) {
        if (acc.length >= cur.length) {
            return acc;
        } else {
            return cur;
        }
    }).length;
}