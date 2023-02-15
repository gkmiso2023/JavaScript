//배열을 입력받아 모든 요소의 논리합(or)을 리턴
//함수 or는 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
//빈 배열의 논리합은 false
function or(arr) {
    if (arr.length === 0) {
        return false;
    }

    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);

    // if (head === true) {
    //   return true;
    // }

    return head || or(tail);
}