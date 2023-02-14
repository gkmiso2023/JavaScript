//수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴
//함수 take는 재귀함수의 형태로 작성
//반복문(for, while) 사용은 금지
//입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
function take(num, arr) {
    // if (num >= arr.length) {
    //   return arr;
    // }

    if (num === 0 || arr.length === 0) {
        return [];
    }

    // const [head, ...tail] = arr;
    const head = arr[0];
    const tail = arr.slice(1);

    return [head].concat(take(num - 1, tail));
}