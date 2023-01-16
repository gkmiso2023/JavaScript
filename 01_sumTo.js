//수를 입력받아 0부터 해당 수까지의 합을 리턴
//for문 사용
function sumTo(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result = result + i;
    }
    return result;
}