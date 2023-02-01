//수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열을 리턴
//arr[i]이 2의 배수일 경우, 새로운 배열의 i번째 요소는 'ok'
//arr[i]이 2의 배수일 경우, 새로운 배열의 i번째 요소는 'ok'
//반복문(for, while) 사용은 금지
//arr.map를 이용
//빈 배열을 입력받은 경우, 빈 배열을 리턴
//0은 2의 배수가 아니라고 가정
function checkEvenOrNot(arr) {
    return arr.map(function (el) {
      if (el === 0 || el % 2) {
        return 'no';
      } else {
        return 'ok';
      }
    });
}