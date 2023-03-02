//수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴
//Math.sqrt 사용은 금지
//소수점 처리는 javascript 표준 내장 객체인 Number
//타입을 주의
//각 자리수(1, 0.1, 0.01, 0.001)마다 (목표값을 넘지 않는) 근사값을 구하는 방식
//제곱근을 구하는 방법 중 바빌로니아 법
function computeSquareRoot(num) {
    const diffs = [1, 0.1, 0.01, 0.001];
    let base = 1;
    for (let i = 0; i < diffs.length; i++) {
        while (base * base < num) {
            base = base + diffs[i];
        }

        if (base * base === num) {
            return base;
        } else {
            base = base - diffs[i];
        }
    }
    return Number(base.toFixed(2));
}