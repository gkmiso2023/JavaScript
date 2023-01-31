//문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴
//반복문(for, while) 사용은 금지
//arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지
//arr.filter를 이용
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function filterOddLengthWords(words) {
    if (words === []) {
      return [];
    }
    let result = words.filter(word => word.length % 2 !== 0);
    return result;
}