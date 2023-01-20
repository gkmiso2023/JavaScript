//배열을 입력받아 마지막 요소를 제외한 배열을 리턴
//반복문(for, while) 사용은 금지
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function getAllElementsButLast(arr) {
    return arr.slice(0, arr.length - 1);
  }