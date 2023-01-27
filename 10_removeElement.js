//배열과 임의의 값(discarder)을 입력받아 기존 배열에서 discarder와 일치하는 요소가 제거된 새로운 배열을 리턴
//반복문(for, while) 사용은 금지
//arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지
//arr.filter를 이용
//입력받은 배열을 수정하지 않아야 합니다.
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function removeElement(arr, discarder) {
    return arr.filter(function (el) {
      if (el !== discarder) {
        return true;
      }
      return false;
    });
}