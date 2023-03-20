//두 수를 입력받아 거듭제곱을 리턴해
//인자 base, number 타입의 자연수 (base >= 2)
//인자 exponent, number 타입의 정수 (exponent >= 0)
//Math.pow, 거듭제곱 연산자 사용은 금지
//시간복잡도 O(logN)을 만족
//나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.
function power(base, exponent) {
    if (exponent === 0) return 1;

    const half = parseInt(exponent / 2);
    const temp = power(base, half);
    const result = (temp * temp) % 94906249;

    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result;
}