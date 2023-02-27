//문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴
//각 문자열의 길이는 다양
//각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시
function readVertically(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        for (let j = 0; j < str.length; j++) {
            if (temp.length === j) {
                temp.push(str[j]);
            } else {
                temp[j] = temp[j] + str[j];
            }
        }
    }

    let result = '';
    for (let i = 0; i < temp.length; i++) {
        result = result + temp[i];
    }

    return result;
}