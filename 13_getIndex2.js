//정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴
//반복문(for, while) 사용은 금지
//arr.sort, arr.indexOf 사용은 금지
//빈 배열을 입력받은 경우, 0을 리턴
//num은 arr의 어떤 요소와도 같지 않다고 가정
function getIndex(arr, num) {
    return arr.filter(function (el) {
      return el < num;
    }).length;
}