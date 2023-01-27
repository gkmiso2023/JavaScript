//함수와 수(num)를 입력받아 num에 함수를 두 번(twice) 적용(apply)한 결과를 리턴
function applyTwice(func, num) {
    return func(func(num));
}