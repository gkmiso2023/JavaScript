//두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가
//별도의 리턴문(return statement)을 작성하지 않습니다.
//추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로
//두번째 객체는 수정하지 않아야 합니다.
function extend(obj1, obj2) {
    for (let key in obj2) {
      if (!(key in obj1)) {
        obj1[key] = obj2[key];
      }
    }
}