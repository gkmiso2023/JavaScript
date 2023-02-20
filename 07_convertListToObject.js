//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴
//arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴
//중복되는 키의 경우, 초기의 값을 사용
//빈 배열을 입력받은 경우, 빈 객체를 리턴
//arr[i]의 길이가 0인 경우, 무시
function convertListToObject(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
            result[arr[i][0]] = arr[i][1];
        }
    }

    return result;
}