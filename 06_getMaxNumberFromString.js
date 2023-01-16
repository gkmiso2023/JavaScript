//숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴
//for문 사용
//str.split 사용은 금지
//빈 문자열을 입력받은 경우, 0을 리턴
function getMaxNumberFromString(str) {
    let maxNum = 0;
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) > maxNum) {
            maxNum = parseInt(str[i]);
        }
    }
    return String(maxNum);
}