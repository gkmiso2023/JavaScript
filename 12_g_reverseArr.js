//배열을 입력받아 순서가 뒤집힌 배열을 리턴
//함수 reverseArr는 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
//빈 배열은 빈 배열 그대로를 리턴
function reverseArr(arr) {
    if (arr.length === 0) {
        return [];
    }

    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);
    return reverseArr(tail).concat(head);
}