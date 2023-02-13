//수(num)를 입력받아 1부터 num까지의 합을 리턴
//함수 sumTo는 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//n * (n + 1) / 2 와 같은 공식의 사용은 금지
//음수 입력은 들어오지 않습니다.
function sumTo(num) {
    if(num <= 1) {
        return num;
    }
    return num + sumTo(num-1);
}