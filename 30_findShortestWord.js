//배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴
//반복문(for, while) 사용은 금지
//같은 길이의 요소가 있다면 배열의 앞쪽에 있는 요소를 리턴
//배열에는 문자열 외에 다른 요소들이 있을 수 있습니다
//빈 배열을 입력받은 경우, 빈 문자열을 리턴
//주어진 배열에 문자열이 없는 경우, 빈 문자열을 리턴
function findShortestWord(arr) {
    const onlyStrings = arr.filter(function (el) {
        return typeof el === 'string';
    });

    if (onlyStrings.length === 0) {
        return '';
    }

    return onlyStrings.reduce(function (acc, cur) {
        if (acc.length <= cur.length) {
            return acc;
        } else {
            return cur;
        }
    });
}