//수를 입력받아 2의 거듭제곱인지 여부를 리턴
//boolean 타입을 리턴
//반복문(while)문을 사용
//2의 0승은 1
//Number.isInteger, Math.log2, Math.log 사용
function powerOfTwo(num) {
    if (num === 1) {
        return true;
    }

    if (num % 2) {
        return false;
    }

    let powered = 2;
    while (powered < num) {
        powered = powered * 2;
    }

    return powered === num;
}