//객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거
//별도의 리턴문(return statement)을 작성하지 않습니다.
function removeOddValues(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === 'number' && obj[prop] % 2 !== 0) {
        delete obj[prop];
      }
    }
}