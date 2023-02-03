//number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴
//반복문(for, while) 사용은 금지
//arr.reduce를 이용
//빈 배열을 입력받은 경우, 0을 리턴
function computeAverageOfNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let total = arr.reduce(function (acc, cur) {
        return acc + cur;
    });

    return total / arr.length;
}