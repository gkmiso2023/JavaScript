//임의의 값을 입력받아 타입을 리턴
//자바스크립트에서 array, null 타입은 존재하지 않지만, 이 둘을 구분하여 출력
//타입 확인
//배열의 타입을 확인하면 "object" 입니다. 배열을 따로 구분
function getType(anything) {
    if (Array.isArray(anything)) {
      return 'array';
    } else if (anything === null) {
      return 'null';
    } else {
      return typeof anything;
    }
  }