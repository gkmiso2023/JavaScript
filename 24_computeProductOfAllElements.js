//number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 곱을 리턴
//반복문(for, while) 사용은 금지
//arr.reduce를 이용
//빈 배열을 입력받은 경우, 1을 리턴해야
function computeProductOfAllElements(arr) {
    return arr.reduce(function (acc, val) {
        return acc * val;
    }, 1);
}