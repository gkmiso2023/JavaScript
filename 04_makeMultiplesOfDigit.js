//수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴
//number 타입의 정수 (num >= 0) 이상의 정수)
//for문 사용
//숫자(number string) 사이의 구분은 없습니다. ('3691215')
//3의 배수가 없을 경우, 빈 문자열을 리턴
function makeMultiplesOfDigit(num) {
    let result = '';
    for(let i = 3; i <= num; i += 3) {
        result = result + String(i);
    }
    return result;
}