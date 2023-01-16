//수를 입력받아 약수(factor)의 합을 리턴
function getSumOfFactors(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            result = result + i;
        }
    }
    return result;
}