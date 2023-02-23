//문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴
//0은 짝수로 간주합니다.
function insertDash(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
        if (Number(str[i - 1]) % 2 && Number(str[i]) % 2) {
            result = result + '-';
        }
        result = result + str[i];
    }

    return result;
}