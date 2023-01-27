//함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴
//반복문(for)문을 사용
//arr.map 사용은 금지
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function mapCallback(func, arr) {
    let result = [];
    for (let el of arr) {
      result.push(func(el));
    }
    return result;
}