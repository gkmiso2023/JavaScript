//객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거
//별도의 리턴문(return statement)을 작성하지 않습니다.
function removeNumberValues(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
        delete obj[prop];
        }
    }
}