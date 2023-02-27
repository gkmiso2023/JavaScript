//수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴
//boolean 타입을 리턴
//arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.
function superIncreasing(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= sum) {
            return false;
        }
        sum = sum + arr[i];
    }
    return true;
}