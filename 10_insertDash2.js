//문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴
//0은 짝수로 간주합니다.
function insertDash(str) {
    let arr = str.split('');
    arr = arr.map(el => parseInt(el));

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0 && arr[i] % 2 !== 0) {
            if (arr[i - 1] !== 0 && arr[i - 1] % 2 !== 0) {
                arr[i] = '-' + arr[i];
            }
        }
    }

    return arr.join('');
}