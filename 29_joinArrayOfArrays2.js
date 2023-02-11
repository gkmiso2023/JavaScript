//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴
//배열의 모든 요소들을 깊이 1 까지 단일 배열로 이어붙인 배열을 리턴
//반복문(for, while) 사용은 금지
//arr.flat 사용은 금지
function joinArrayOfArrays(arr) {
    return arr.reduce((a, b) => a.concat(b))
}