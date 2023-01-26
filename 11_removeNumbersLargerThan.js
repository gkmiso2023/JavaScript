//수와 객체를 입력받아 입력받은 수보다 큰 수를 갖는 속성을 모두 제거
//별도의 리턴문(return statement)을 작성하지 않습니다.
//대소 비교는 number 타입에만 적용
function removeNumbersLargerThan(num, obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === 'number' && obj[prop] > num) {
        delete obj[prop];
      }
    }
}