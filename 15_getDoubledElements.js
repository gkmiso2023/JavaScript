//수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴
//반복문(for, while) 사용은 금지
//arr.map를 이용
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function getDoubledElements(arr) {
    return arr.map(function (el) {
      return el * 2;
    });
}