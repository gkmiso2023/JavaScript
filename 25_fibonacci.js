//수(num)를 입력받아 num번째까지 총 num + 1개의 피보나치 수열을 리턴
//반복문(for)문을 사용
//피보나치 수열은 0번부터 시작

// 피보나치 수열, 최소한 두 수가 있어야 더할 수 있기 때문에 i가 0, 1 push
function fibonacci(num) {
    let result = []; // 배열
    for (let i = 0; i <= num; i++) { // i <= num, i가 2인 경우를 넣어줘야 result[i - 2 → 0] + result[i - 1 → 1]
      if (i === 0) {
        result.push(0) // 만들어 준 배열에 0 넣기 [0]
      } else if (i === 1) {
        result.push(1) // 만들어 준 배열에 1 넣기 [1]
      } else if (i >= 2) { //2보다 큰, 0/1 그 외
        result.push(result[i - 2] + result[i - 1]) // 전전값 + 전값의 합
      }
    }
    return result;
  }