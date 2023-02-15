//다차원 배열을 입력받아 1차원 배열로 변환하여 리턴
//함수 flattenArr는 재귀함수의 형태로 작성
//Array Method flat()과 flatMap() 사용은 금지
//입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability)
//입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
//빈 배열을 입력받은 경우, 빈 배열을 리턴
function flattenArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let front = arr.slice(0, 1);
            let middle = arr[i];
            let back = arr.slice(i + 1);
            return flattenArr([...front, ...middle, ...back]);
        }
    }
    return arr;
}