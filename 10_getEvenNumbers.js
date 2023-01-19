//수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴
//짝수가 없는 경우, 빈 배열을 리턴
function getEvenNumbers(arr) {
    let result = [];
    for (let el of arr) {
      if (el % 2 === 0) {
        result.push(el);
      }
    }
  
    return result;
  }