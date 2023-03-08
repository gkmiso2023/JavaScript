//정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴
//입력으로 주어진 배열은 중첩되지 않은 1차원 배열
//배열의 요소는 음수와 0을 포함하는 정수
//배열의 길이는 3 이상
const largestProductOfThree = function (arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const len = arr.length;
    const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
    const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
    return Math.max(candi1, candi2);
};  