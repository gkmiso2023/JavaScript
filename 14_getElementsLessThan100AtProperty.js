//객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴
//반복문(for, while) 사용은 금지
//대소 비교는 number 타입에만 적용
//주어진 키에 해당하는 값이 배열이고, 100 미만인 요소가 있는 경우에만 해당 요소를 갖는 배열을 리턴
//그 외의 경우, 빈 배열을 리턴
//주어진 보조 함수(lessThan100)를 사용
function lessThan100(number) {
    // solution 1
    return number < 100;
  
    // solution 2
    // return typeof number === 'number' && number < 100;
}
  
function getElementsLessThan100AtProperty(obj, property) {
    const maybeArr = obj[property];
    if (Array.isArray(maybeArr)) {
      // solution 1
      return maybeArr.filter(function (el) {
        return typeof el === 'number' && lessThan100(el);
        // 위 코드는 타입이 el이 number가 아닌 경우 false를 리턴
      });
  
      // solution 2
      // return maybeArr.filter(lessThan100);
    }
  
    return [];
}