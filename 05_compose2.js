//두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴
function compose2(func1, func2) {
    return function (num) {
      return func1(func2(num));
    };
}