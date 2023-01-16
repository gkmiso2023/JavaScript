//수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴
//number 타입의 정수 (num >= 1)
//string 타입을 리턴
//while문 사용
//숫자(number string) 사이를 '-'로 구분합니다. ('1-2-3-4-5')
function makeDigits2(num) {
    let result = '';
    let i = 1;
    while(i <= num) {
        result = result + `${i}-`;
        i++;
    }
    result = result.slice(0,result.length-1);
    return result;
}