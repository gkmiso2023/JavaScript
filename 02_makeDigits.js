//수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴
//number 타입의 정수 (num >= 1)
//string 타입 리턴
//for문 사용
//숫자(number string) 사이의 구분은 없습니다. ('1234567')
function makeDigits(num) {
    let result = '';
    for (let i = l; i <= num; i++) {
        result = result + String(i)
    }
    return result;
}