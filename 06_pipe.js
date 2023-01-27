//함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴
//리턴되는 함수는 정수를 입력받아 func1, func2, ..., funcN의 순으로 적용
//입력되는 함수들의 수는 1개 이상이라고 가정
//함수가 아닌 입력은 존재하지 않는다고 가정
//입력받은 함수들이 어떤 일을 하는지는 중요하지 않습니다.
function pipe(...funcs) {
    return function (num) {
      let result = num;
      for (let i = 0; i < funcs.length; i++) {
        result = funcs[i](result);
      }
      return result;
    };
}