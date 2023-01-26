//객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거
//별도의 리턴문(return statement)을 작성하지 않습니다.
function removeArrayValues(obj) {
    for (let prop in obj) {
      if (Array.isArray(obj[prop])) {
        delete obj[prop];
      }
    }
}