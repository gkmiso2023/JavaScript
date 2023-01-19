//문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴
//배열을 리턴
//str.split 사용은 금지
//빈 문자열을 입력받은 경우, 빈 배열을 리턴
function getAllLetters(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
  
    return arr;
  }