//삼각형의 세 변을 입력받아 직각삼각형(pythagorean)인지 여부를 리턴
//자바스크립트에서 x의 제곱(x squared)을 구하는 방법은 3가지
//arr.sort 사용은 금지
function isPythagorean(side1, side2, side3) {
    const pow1 = side1 * side1;
    const pow2 = side2 ** 2;
    const pow3 = Math.pow(side3, 2);
    return (pow1 + pow2) === pow3 || (pow2 + pow3) === pow1 || (pow1 + pow3) === pow2;
  }