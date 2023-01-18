//수(num)와 문자열을 입력받아 차례대로 num개의 문자로 구성된 문자열을 리턴
//num과 str.length 중 더 작은 수만큼 저장(take)
function takeLetters(num, str) {
    return str.slice(0, num);
  }