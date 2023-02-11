//2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴
//합을 구할 때 number 타입만 고려
function sumOfArraysInArray(arr) {
    const joinedArr = arr.reduce(function (acc, cur) {
        return acc.concat(cur);
    });

    const onlyNumbers = joinedArr.filter(function (el) {
        return typeof el === 'number';
    });

    return onlyNumbers.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
}