//수를 입력받아 n-factorial(n!; 엔-팩토리얼) 값을 리턴
//n! 은 1부터 n까지 1씩 증가한 모든 값의 곱
//함수 factorial은 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//factorial(0)은 1로 정의
//음수 입력은 들어오지 않습니다.
function factorial(num) {
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num - 1);
}  