//문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴
//배열을 리턴
//가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
//가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.
function removeExtremes(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= min.length) min = arr[i];
        if (arr[i].length >= max.length) max = arr[i];
    }

    arr.splice(arr.indexOf(min), 1);
    arr.splice(arr.indexOf(max), 1);

    return arr;
}