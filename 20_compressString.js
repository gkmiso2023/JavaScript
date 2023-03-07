//문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴
//빈 문자열을 입력받은 경우, 빈 문자열을 리턴
//3개 이상 연속되는 문자만 압축
function compressString(str) {
    // 연속되는 문자를 기록하기 위한 변수
    // 첫 번째 문자로 초기화
    let before = str[0];

    // 동일한 문자의 반복 횟수
    let count = 1;

    // 정답으로 리턴할 문자열
    let result = '';

    // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
    str = str + ' ';
    for (let i = 1; i < str.length; i++) {
        // 동일한 문자가 반복될 경우
        if (before === str[i]) {
            count++;
        } else {
            // 이전과 다른 문자일 경우,
            // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
            if (count >= 3) {
                result = result + `${count}${before}`;
            } else {
                result = result + before.repeat(count);
            }
            before = str[i];
            count = 1;
        }
    }

    return result;
}