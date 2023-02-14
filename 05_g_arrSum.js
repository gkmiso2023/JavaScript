//배열을 입력받아 모든 요소의 합을 리턴
//함수 arrSum은 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
//입력으로 들어오는 arr의 모든 요소는 정수 값을 갖는다고 가정
//빈 배열의 합은 0
function arrSum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);
    return head + arrSum(tail);
}