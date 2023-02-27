//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴
//'B'의 위치 정보(행, 열)를 요소로 갖는 배열을 리턴
//배열의 요소는 차례대로 행, 열입니다. ([행, 열])
//행: 'B'를 요소로 갖는 배열 arr[i]의 인덱스 i
//열: arr[i]에서 'B'(arr[i][j])의 인덱스 j
//arr, arr[i]의 길이는 다양하게 주어집니다.
//항상 한 개의 문자열 'B'가 존재
function findBugInApples(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].length; j += 1) {
            if (arr[i][j] === 'B') {
                return [i, j];
            }
        }
    }
}