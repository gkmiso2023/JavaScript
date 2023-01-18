//plusOne은 함수 선언식
//minusOne은 함수 표현식을 변수 minusOne에 할당
//변수를 선언하고, 함수를 할당했다
//첫 번째 인자에 2를 곱하는 함수 multiplyBy2와 비슷하게 첫 번째 인자를 2로 나누는 함수 divideBy2를 선언
function multiplyBy2(input) {
    input = input * 2;
    return input;
  }
  
  let divideBy2 = function (input) {
    input = input / 2;
    return input;
  };