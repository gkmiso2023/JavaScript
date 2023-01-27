//함수와 배열을 입력받아 배열의 각 요소에 함수를 적용했을 때 그 결과가 참인 요소만을 갖는 새로운 배열을 리턴
//반복문(for)문을 사용
//arr.filter 사용은 금지
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function filterCallback(func, arr) {
    let result =[];
    for(let i =0; i<arr.length ; i++) {
      if(func(arr[i])) {
        result.push(arr[i])
      }
    }
    return result;
}