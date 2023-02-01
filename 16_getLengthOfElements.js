//문자열을 요소로 갖는 배열을 입력받아 각 요소의 길이를 요소로 갖는 새로운 배열을 리턴
//반복문(for, while) 사용은 금지
//arr.map를 이용
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function getLengthOfElements(arr) {
    return arr.map(function (el) {
      return el.length;
    });
}