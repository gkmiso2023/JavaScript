//2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴
//number 타입의 정수 (num >= 2)
//2-3-5-7의 형식으로 리턴
//이중 반복문(double for loop)을 사용
function listPrimes(num) {
    let result = '2';
    for (let i = 3; i <= num; i += 2) {
      let isPrime = true; //소수인지 판별
      let sqrt = parseInt(Math.sqrt(i));
      for (let divider = 3; divider <= sqrt; divider += 2) {
        if (i % divider === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        result = `${result}-${i}`;
      }
    }
  
    return result;
  }