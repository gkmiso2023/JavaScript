//수를 입력받아 홀수인지 여부를 리턴
//함수 isOdd는 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//나눗셈(/), 나머지(%) 연산자 사용은 금지
//0은 짝수로 간주
function isOdd(num) {
    if (num === 0) {
        return false;
    } else if (num === 1) {
        return true;
    }

    if (num < 0) {
        return isOdd(-num);
    }
    return isOdd(num - 2);
}